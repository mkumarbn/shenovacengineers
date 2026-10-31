import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Every Shenovac vacuum pump passes stage-wise quality checks under our ISO 9001:2015 quality management system before dispatch.",
};

const steps = [
  { icon: "search", title: "Raw Material Inspection", text: "Castings, steel and bought-out parts are sourced from reliable vendors and inspected on arrival." },
  { icon: "ruler", title: "Precision Machining", text: "Components are machined, drilled and finished on jigs and fixtures for accurate, interchangeable parts." },
  { icon: "clipboard", title: "Stage-wise Checks", text: "Quality supervisors conduct checks after every stage of manufacturing — not just at the end." },
  { icon: "gear", title: "Assembly & Balancing", text: "Rotors and impellers are dynamically balanced and assemblies are aligned for low vibration." },
  { icon: "spark", title: "Performance Testing", text: "Each pump is run and tested on Pirani and McLeod gauges against its rated vacuum and displacement." },
  { icon: "truck", title: "Final Approval & Dispatch", text: "Only pumps that pass rigorous final inspection are approved, packed and dispatched." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality Assurance"
        text="Strict, stage-wise quality supervision ensures every pump we deliver is reliable and durable."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about" },
          { label: "Quality Assurance" },
        ]}
      />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading eyebrow="Our Commitment" title="Quality is built in, not inspected in." />
          <div className="prose-copy mt-6">
            <p>
              Since our humble beginning in {site.established}, Shenovac Engineers has grown step by
              step into a leading manufacturer of industrial vacuum pumps, vacuum pressure pumps,
              chemical process pumps, plants and systems. We have earned a respectable position in
              the market for integrity, commitment to customers, continuous technological
              innovation and quality products.
            </p>
            <p>
              Our entire manufacturing process is subject to a strict quality supervision procedure.
              Quality checks are conducted after every stage of manufacturing, and pumps are
              delivered only after rigorous testing by our quality management team — ensuring total
              reliability and durability.
            </p>
            <p>
              We have invested heavily in R&amp;D to improve quality and expand our range, and our
              qualified design and production personnel give us a distinguished strength in the
              industry. Our focus remains simple: quality products at reasonable prices, with strict
              adherence to delivery schedules.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["shield", site.certification, "Certified QMS"],
              ["award", "30+ years", "Of manufacturing"],
              ["users", site.customers, "Satisfied customers"],
              ["wrench", `${site.warrantyMonths} months`, "Product warranty"],
            ].map(([icon, v, l]) => (
              <div key={l} className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
                <Icon name={icon} className="h-8 w-8 text-brand-600" />
                <p className="mt-4 font-display text-2xl font-bold text-ink-900">{v}</p>
                <p className="text-sm text-ink-500">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 rounded-2xl bg-ink-950 p-6 text-white">
            <Image
              src="/images/iso-certificate.png"
              alt="ISO 9001:2015 certificate"
              width={635}
              height={832}
              className="w-24 shrink-0 rounded shadow-lg"
            />
            <div>
              <p className="font-display text-xl font-bold">ISO 9001:2015 Certified</p>
              <p className="mt-1 text-sm text-ink-300">
                Certificate No. {site.certificateNumber} · Otabu Certification Ltd (UK)
              </p>
              <Link href="/company-profile" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-400 hover:text-brand-300">
                View certificates <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Process"
            title="Six checkpoints between raw metal and your plant"
            align="center"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-100">
                <span className="absolute -right-2 -top-6 font-display text-8xl font-extrabold text-ink-50">
                  {i + 1}
                </span>
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
