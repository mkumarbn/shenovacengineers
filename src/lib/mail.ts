import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export function getTransporter() {
  if (transporter) return transporter;
  const port = Number(process.env.MAIL_PORT ?? 587);
  const encryption = (process.env.MAIL_ENCRYPTION ?? "tls").toLowerCase();
  transporter = nodemailer.createTransport({
    host: required("MAIL_HOST"),
    port,
    // "ssl" = implicit TLS (port 465); "tls" = STARTTLS upgrade (port 587)
    secure: encryption === "ssl" || port === 465,
    requireTLS: encryption === "tls",
    auth: {
      user: required("MAIL_USERNAME"),
      // Google App Passwords are shown with spaces; SMTP expects them without.
      pass: required("MAIL_PASSWORD").replace(/\s+/g, ""),
    },
  });
  return transporter;
}

export function mailFrom() {
  const address = process.env.MAIL_FROM_ADDRESS ?? required("MAIL_USERNAME");
  const name = process.env.MAIL_FROM_NAME ?? "Shenovac Engineers";
  return { name, address };
}

export function contactRecipients() {
  return required("CONTACT_TO_EMAIL")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Absolute base URL for links and images inside emails. */
export function publicBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shenovacengineers.vercel.app").replace(/\/$/, "");
}
