import { NextResponse, type NextRequest } from "next/server";
import { confirmationEmail, notificationEmail, type Enquiry } from "@/lib/email-templates";
import { contactRecipients, getTransporter, mailFrom, publicBaseUrl } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort, per-instance rate limit: 5 enquiries per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

/** Trim, collapse header-breaking characters and cap length. */
function clean(value: unknown, max: number, multiline = false) {
  if (typeof value !== "string") return "";
  const v = multiline ? value.replace(/\r\n/g, "\n") : value.replace(/[\r\n\t]+/g, " ");
  return v.trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries. Please try again in a few minutes or call us." },
      { status: 429 },
    );
  }

  const enquiry: Enquiry = {
    name: clean(body.name, 100),
    company: clean(body.company, 150) || undefined,
    phone: clean(body.phone, 30),
    email: clean(body.email, 200) || undefined,
    product: clean(body.product, 200) || undefined,
    message: clean(body.message, 5000, true),
    page: clean(body.page, 300) || undefined,
  };

  const errors: string[] = [];
  if (enquiry.name.length < 2) errors.push("Please enter your name.");
  if (enquiry.phone.replace(/\D/g, "").length < 7) errors.push("Please enter a valid phone number.");
  if (enquiry.email && !EMAIL_RE.test(enquiry.email)) errors.push("Please enter a valid email address.");
  if (enquiry.message.length < 5) errors.push("Please describe your requirement.");
  if (errors.length) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  const base = publicBaseUrl();
  const from = mailFrom();

  try {
    const transporter = getTransporter();
    const notice = notificationEmail(enquiry, base);
    await transporter.sendMail({
      from,
      to: contactRecipients(),
      replyTo: enquiry.email ? { name: enquiry.name, address: enquiry.email } : undefined,
      subject: notice.subject,
      text: notice.text,
      html: notice.html,
    });

    // The customer's copy is a courtesy; don't fail the request if it bounces.
    if (enquiry.email) {
      const confirm = confirmationEmail(enquiry, base);
      await transporter
        .sendMail({
          from,
          to: { name: enquiry.name, address: enquiry.email },
          replyTo: process.env.CONTACT_REPLY_TO || undefined,
          subject: confirm.subject,
          text: confirm.text,
          html: confirm.html,
        })
        .catch((err) => console.error("[enquiry] confirmation email failed:", err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] failed to send:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now. Please call or WhatsApp us." },
      { status: 500 },
    );
  }
}
