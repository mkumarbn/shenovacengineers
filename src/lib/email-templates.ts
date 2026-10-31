import { site } from "@/data/site";
import { products } from "@/data/products";

export type Enquiry = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  product?: string;
  message: string;
  page?: string;
};

// Brand palette (mirrors src/app/globals.css)
const RED = "#e10f17";
const INK = "#111317";
const INK_700 = "#434b5a";
const INK_500 = "#677386";
const INK_100 = "#eceef1";
const INK_50 = "#f6f7f8";
const FONT = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const nl2br = (value: string) => esc(value).replace(/\r?\n/g, "<br>");

function productUrl(base: string, name?: string) {
  const p = name && products.find((x) => x.name === name);
  return p ? `${base}/products/${p.slug}` : null;
}

function button(href: string, label: string, color = RED) {
  return `<a href="${esc(href)}" style="display:inline-block;background:${color};color:#ffffff;font-family:${FONT};font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:6px;margin:0 8px 8px 0;">${label}</a>`;
}

function detailRows(rows: [string, string | undefined, string?][]) {
  return rows
    .filter(([, v]) => v)
    .map(
      ([label, value, href], i) => `
      <tr>
        <td style="padding:12px 16px;background:${i % 2 ? "#ffffff" : INK_50};font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${INK_500};width:34%;vertical-align:top;border-bottom:1px solid ${INK_100};">${label}</td>
        <td style="padding:12px 16px;background:${i % 2 ? "#ffffff" : INK_50};font-family:${FONT};font-size:15px;color:${INK};vertical-align:top;border-bottom:1px solid ${INK_100};">${
          href
            ? `<a href="${esc(href)}" style="color:${INK};text-decoration:underline;text-decoration-color:${RED};">${esc(value!)}</a>`
            : esc(value!)
        }</td>
      </tr>`,
    )
    .join("");
}

function layout({
  base,
  preheader,
  eyebrow,
  title,
  body,
}: {
  base: string;
  preheader: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  const phones = site.phones
    .map((p) => `<a href="tel:${p.tel}" style="color:#d5d9df;text-decoration:none;">${p.number}</a>`)
    .join(" &nbsp;·&nbsp; ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:${INK_100};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${INK_100};">
  <tr>
    <td align="center" style="padding:28px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(17,19,23,.08);">

        <!-- Header -->
        <tr>
          <td style="background:${INK};padding:26px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:middle;">
                  <a href="${base}" style="text-decoration:none;">
                    <img src="${base}/images/logo-white.png" width="220" alt="Shenovac Engineers" style="display:block;width:220px;max-width:100%;height:auto;border:0;">
                  </a>
                </td>
                <td align="right" style="vertical-align:middle;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#ffffff;">
                  <span style="display:inline-block;border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:6px 12px;">${site.certification}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="height:4px;line-height:4px;font-size:0;background:${RED};">&nbsp;</td></tr>

        <!-- Title -->
        <tr>
          <td style="padding:34px 32px 8px 32px;">
            <p style="margin:0 0 10px 0;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${RED};">${esc(eyebrow)}</p>
            <h1 style="margin:0;font-family:${FONT};font-size:26px;line-height:1.25;font-weight:800;color:${INK};">${title}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:16px 32px 32px 32px;font-family:${FONT};font-size:15px;line-height:1.65;color:${INK_700};">
            ${body}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${INK};padding:28px 32px;font-family:${FONT};font-size:13px;line-height:1.7;color:#b1b8c3;">
            <p style="margin:0 0 6px 0;font-size:15px;font-weight:800;color:#ffffff;">${site.name}</p>
            <p style="margin:0 0 10px 0;">${esc(site.headOffice)}</p>
            <p style="margin:0 0 4px 0;">${phones}</p>
            <p style="margin:0 0 16px 0;"><a href="mailto:${site.emails[0]}" style="color:#d5d9df;text-decoration:none;">${site.emails[0]}</a> &nbsp;·&nbsp; <a href="${base}" style="color:#d5d9df;text-decoration:none;">${base.replace(/^https?:\/\//, "")}</a></p>
            <p style="margin:0;font-size:11px;color:#677386;">Manufacturer of industrial vacuum pumps, blowers and vacuum systems since ${site.established}.</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

/** Email sent to the Shenovac team for each new enquiry. */
export function notificationEmail(e: Enquiry, base: string) {
  const pUrl = productUrl(base, e.product);
  const waNumber = e.phone.replace(/[^\d]/g, "");
  const waLink = `https://wa.me/${waNumber.length === 10 ? `91${waNumber}` : waNumber}`;

  const body = `
    <p style="margin:0 0 22px 0;">A new enquiry has been submitted on the website. Reply to this email to respond directly to the customer.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${INK_100};border-radius:10px;overflow:hidden;border-collapse:separate;">
      ${detailRows([
        ["Name", e.name],
        ["Company", e.company],
        ["Phone", e.phone, `tel:${e.phone.replace(/[^\d+]/g, "")}`],
        ["Email", e.email, e.email ? `mailto:${e.email}` : undefined],
        ["Product", e.product, pUrl ?? undefined],
      ])}
    </table>

    <p style="margin:28px 0 8px 0;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${INK_500};">Requirement</p>
    <div style="background:${INK_50};border-left:4px solid ${RED};border-radius:6px;padding:16px 18px;color:${INK};font-size:15px;line-height:1.65;">${nl2br(e.message)}</div>

    <div style="margin-top:28px;">
      ${e.email ? button(`mailto:${e.email}?subject=${encodeURIComponent(`Re: Your enquiry with Shenovac Engineers`)}`, "Reply by Email") : ""}
      ${button(`tel:${e.phone.replace(/[^\d+]/g, "")}`, "Call Customer", INK)}
      ${button(waLink, "WhatsApp", "#1ebe5b")}
    </div>

    <p style="margin:24px 0 0 0;font-size:12px;color:${INK_500};">Submitted from: ${esc(e.page || base)}</p>
  `;

  const subject = `New enquiry${e.product ? `: ${e.product}` : ""} — ${e.name}`;
  const text = [
    "New website enquiry",
    "",
    `Name: ${e.name}`,
    ...(e.company ? [`Company: ${e.company}`] : []),
    `Phone: ${e.phone}`,
    ...(e.email ? [`Email: ${e.email}`] : []),
    ...(e.product ? [`Product: ${e.product}`] : []),
    "",
    "Requirement:",
    e.message,
    "",
    `Submitted from: ${e.page || base}`,
  ].join("\n");

  return {
    subject,
    text,
    html: layout({
      base,
      preheader: `${e.name}${e.company ? ` (${e.company})` : ""} — ${e.message.slice(0, 90)}`,
      eyebrow: "New Website Enquiry",
      title: esc(e.product || "General enquiry"),
      body,
    }),
  };
}

/** Confirmation sent to the customer. */
export function confirmationEmail(e: Enquiry, base: string) {
  const firstName = e.name.split(/\s+/)[0];
  const pUrl = productUrl(base, e.product);

  const steps = [
    ["Review", "Our engineers review your application and requirement."],
    ["Recommend", "We select the right model and configuration for your duty."],
    ["Quote", "You receive pricing and delivery timelines, usually within one working day."],
  ]
    .map(
      ([t, d], i) => `
      <tr>
        <td width="44" style="vertical-align:top;padding:0 0 16px 0;">
          <div style="width:32px;height:32px;line-height:32px;border-radius:8px;background:${RED};color:#ffffff;font-family:${FONT};font-size:14px;font-weight:800;text-align:center;">${i + 1}</div>
        </td>
        <td style="vertical-align:top;padding:4px 0 16px 0;font-family:${FONT};font-size:14px;color:${INK_700};">
          <strong style="color:${INK};">${t}.</strong> ${d}
        </td>
      </tr>`,
    )
    .join("");

  const body = `
    <p style="margin:0 0 16px 0;">Dear ${esc(firstName)},</p>
    <p style="margin:0 0 24px 0;">Thank you for contacting <strong style="color:${INK};">Shenovac Engineers</strong>. We have received your enquiry and our technical team will get back to you shortly.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${INK_50};border-radius:10px;">
      <tr>
        <td style="padding:20px 22px;">
          <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${INK_500};">Your enquiry</p>
          ${e.product ? `<p style="margin:0 0 8px 0;font-size:15px;color:${INK};"><strong>Product:</strong> ${pUrl ? `<a href="${esc(pUrl)}" style="color:${RED};">${esc(e.product)}</a>` : esc(e.product)}</p>` : ""}
          <p style="margin:0;font-size:14px;color:${INK_700};border-left:3px solid ${RED};padding-left:12px;">${nl2br(e.message)}</p>
        </td>
      </tr>
    </table>

    <p style="margin:30px 0 14px 0;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${INK_500};">What happens next</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${steps}</table>

    <p style="margin:12px 0 16px 0;">Need to speak to us sooner? Call or message us directly:</p>
    <div>
      ${button(`tel:${site.phones[0].tel}`, `Call ${site.phones[0].number}`)}
      ${button(`https://wa.me/${site.whatsapp}`, "WhatsApp Us", "#1ebe5b")}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border-top:1px solid ${INK_100};">
      <tr>
        <td style="padding-top:22px;font-family:${FONT};font-size:14px;color:${INK_700};">
          While you wait, explore our full range of
          <a href="${base}/products" style="color:${RED};font-weight:700;">vacuum pumps, blowers and systems</a>.
        </td>
      </tr>
    </table>

    <p style="margin:28px 0 0 0;">Warm regards,<br><strong style="color:${INK};">Team Shenovac Engineers</strong></p>
  `;

  const text = [
    `Dear ${firstName},`,
    "",
    "Thank you for contacting Shenovac Engineers. We have received your enquiry and our technical team will get back to you shortly.",
    "",
    ...(e.product ? [`Product: ${e.product}`] : []),
    `Your message: ${e.message}`,
    "",
    `Call: ${site.phones.map((p) => p.number).join(" / ")}`,
    `Email: ${site.emails[0]}`,
    `Website: ${base}`,
    "",
    "Warm regards,",
    "Team Shenovac Engineers",
  ].join("\n");

  return {
    subject: "We've received your enquiry — Shenovac Engineers",
    text,
    html: layout({
      base,
      preheader: "Thank you for your enquiry. Our engineers will get back to you shortly.",
      eyebrow: "Enquiry Received",
      title: `Thank you, ${esc(firstName)}.`,
      body,
    }),
  };
}
