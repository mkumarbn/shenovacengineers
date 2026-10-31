import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { categories } from "@/data/products";
import { Icon } from "./Icon";
import { CurrentYear } from "./CurrentYear";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Services & Repairs", href: "/services" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-700/20 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-white md:text-3xl">
              Need a vacuum solution for your process?
            </p>
            <p className="mt-1 text-ink-400">
              Talk to our engineers — we usually respond within one working day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#enquiry" className="btn btn-primary">
              Request a Quote <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phones[0].tel}`} className="btn btn-ghost-light">
              <Icon name="phone" className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image
            src="/images/logo-white.png"
            alt={site.name}
            width={360}
            height={80}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
            Manufacturer, exporter and supplier of industrial vacuum pumps, blowers,
            impregnation plants and vacuum components since {site.established}. Trusted
            by {site.customers} customers across India and abroad.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <Icon name="shield" className="h-8 w-8 text-brand-500" />
            <div className="text-xs">
              <p className="font-bold uppercase tracking-wider text-white">
                {site.certification}
              </p>
              <p className="text-ink-400">Quality Management System</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Product Range
          </h3>
          <ul className="space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/products?category=${c.id}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span>{site.headOffice}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-white">
                    {p.number}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span className="flex flex-col">
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="break-all hover:text-white">
                    {e}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-500 sm:flex-row">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <p>Made in India · Exporting worldwide</p>
        </div>
      </div>
    </footer>
  );
}
