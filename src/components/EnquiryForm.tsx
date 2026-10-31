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
  website: string; // honeypot
};

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const empty: Fields = { name: "", company: "", phone: "", email: "", product: "", message: "", website: "" };

export function EnquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [f, setF] = useState<Fields>({ ...empty, product: defaultProduct });
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, page: window.location.href }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus({ state: "error", message: data.error ?? "Something went wrong. Please try again." });
        return;
      }
      setStatus({ state: "sent" });
      setF({ ...empty, product: defaultProduct });
    } catch {
      setStatus({ state: "error", message: "Network error. Please check your connection and try again." });
    }
  };

  const onWhatsApp = () => {
    const text = [
      "Hello Shenovac Engineers,",
      "",
      `Name: ${f.name}`,
      ...(f.company ? [`Company: ${f.company}`] : []),
      `Phone: ${f.phone}`,
      ...(f.product ? [`Product: ${f.product}`] : []),
      "",
      f.message,
    ].join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  if (status.state === "sent") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-ink-100" role="status">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Thank you! Your enquiry has been sent.</h3>
        <p className="mx-auto mt-2 max-w-md text-ink-500">
          Our engineers will get back to you shortly — usually within one working day. If you shared
          your email, a confirmation is on its way.
        </p>
        <button type="button" onClick={() => setStatus({ state: "idle" })} className="btn btn-outline mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";
  const input =
    "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot — hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Full name *</span>
          <input required minLength={2} value={f.name} onChange={set("name")} className={input} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Company</span>
          <input value={f.company} onChange={set("company")} className={input} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-800">Phone *</span>
          <input required type="tel" minLength={7} value={f.phone} onChange={set("phone")} className={input} placeholder="+91" autoComplete="tel" />
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
          minLength={5}
          rows={4}
          value={f.message}
          onChange={set("message")}
          className={input}
          placeholder="Application, required vacuum level, flow (LPM or m³/hr), quantity…"
        />
      </label>

      {status.state === "error" && (
        <p className="flex gap-2 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800" role="alert">
          <Icon name="spark" className="mt-0.5 h-4 w-4 shrink-0" />
          {status.message}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={sending} className="btn btn-primary flex-1 disabled:cursor-wait disabled:opacity-70">
          {sending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </>
          ) : (
            <>
              <Icon name="mail" className="h-4 w-4" /> Send Enquiry
            </>
          )}
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
      <p className="text-xs text-ink-400">
        We respect your privacy. Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
