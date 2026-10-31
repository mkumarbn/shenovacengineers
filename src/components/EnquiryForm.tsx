"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { Icon } from "./Icon";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

const empty: Fields = { name: "", company: "", phone: "", email: "", product: "", message: "" };

/**
 * There is no server-side mailer yet, so the enquiry is handed off to the
 * visitor's email client or WhatsApp with all details pre-filled.
 */
export function EnquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [f, setF] = useState<Fields>({ ...empty, product: defaultProduct });
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  const body = () =>
    [
      `Name: ${f.name}`,
      f.company && `Company: ${f.company}`,
      `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.product && `Product: ${f.product}`,
    ]
      .filter(Boolean)
      .join("\n") + `\n\n${f.message}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry${f.product ? `: ${f.product}` : ""} — ${f.name}`;
    window.location.href = `mailto:${site.emails[0]}?cc=${site.emails[1]}&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body())}`;
    setSent(true);
  };

  const onWhatsApp = () => {
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Shenovac Engineers,\n\n${body()}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const input =
    "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Full name *</span>
          <input required value={f.name} onChange={set("name")} className={input} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Company</span>
          <input value={f.company} onChange={set("company")} className={input} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Phone *</span>
          <input required type="tel" value={f.phone} onChange={set("phone")} className={input} placeholder="+91" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Email</span>
          <input type="email" value={f.email} onChange={set("email")} className={input} placeholder="you@company.com" autoComplete="email" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink-800">Product of interest</span>
        <select value={f.product} onChange={set("product")} className={input}>
          <option value="">Select a product (optional)</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Custom vacuum system">Custom vacuum system</option>
          <option value="Repair / service">Repair / service</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink-800">Requirement *</span>
        <textarea
          required
          rows={4}
          value={f.message}
          onChange={set("message")}
          className={input}
          placeholder="Application, required vacuum level, flow (LPM or m³/hr), quantity…"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary flex-1">
          <Icon name="mail" className="h-4 w-4" /> Send Enquiry by Email
        </button>
        <button
          type="button"
          onClick={onWhatsApp}
          disabled={!f.name || !f.phone}
          className="btn flex-1 bg-[#25D366] text-white hover:bg-[#1ebe5b] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> Send on WhatsApp
        </button>
      </div>
      {sent && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
          Your email app should now be open with the enquiry filled in. If it didn&apos;t open, write to{" "}
          <a href={`mailto:${site.emails[0]}`} className="font-semibold underline">
            {site.emails[0]}
          </a>
          .
        </p>
      )}
    </form>
  );
}
