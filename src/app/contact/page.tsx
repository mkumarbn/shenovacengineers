import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shenovac Engineers, New Delhi, for vacuum pump enquiries, quotations, spares and service. Call +91 98183 47008 or email info@shenovacengineers.com.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: "pin",
      title: "Head Office",
      lines: [site.headOffice],
    },
    {
      icon: "factory",
      title: "Works",
      lines: [site.works],
    },
    {
      icon: "phone",
      title: "Call Us",
      lines: site.phones.map((p) => `${p.number} (${p.label})`),
      links: site.phones.map((p) => `tel:${p.tel}`),
    },
    {
      icon: "mail",
      title: "Email Us",
      lines: site.emails,
      links: site.emails.map((e) => `mailto:${e}`),
    },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        text="Questions, quotations, spares or service — our team is ready to help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-bold">{c.title}</h2>
              <div className="mt-2 space-y-1 text-sm text-ink-600">
                {c.lines.map((l, i) =>
                  c.links ? (
                    <a key={l} href={c.links[i]} className="block break-all hover:text-brand-600">
                      {l}
                    </a>
                  ) : (
                    <p key={l}>{l}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="enquiry" className="container-x scroll-mt-24 grid gap-10 py-20 lg:grid-cols-5 lg:py-24">
        <div className="lg:col-span-3">
          <p className="eyebrow">Send an Enquiry</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tell us about your requirement</h2>
          <p className="mt-3 text-ink-500">
            Include your application, required vacuum and flow if you know them. We&apos;ll come back
            with a recommendation and quotation.
          </p>
          <div className="mt-8 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <div className="overflow-hidden rounded-2xl ring-1 ring-ink-100">
            <iframe
              title="Shenovac Engineers location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-80 w-full border-0 lg:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-white">
            <div className="flex items-center gap-3">
              <Icon name="clock" className="h-6 w-6 text-brand-500" />
              <p className="font-display text-lg font-bold">Business Hours</p>
            </div>
            <p className="mt-2 text-ink-300">{site.hours}</p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-5 w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
