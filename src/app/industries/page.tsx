import type { Metadata } from "next";
import Link from "next/link";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { industries } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Shenovac vacuum pumps and blowers serve pharmaceuticals, chemicals, power, food & dairy, plastics, electrical, textiles, laboratories, HVAC and more.",
};

const applications = [
  ["Distillation & evaporation", "/products/oil-sealed-rotary-high-vacuum-pump"],
  ["Solvent & vapour recovery", "/products/two-stage-water-ring-vacuum-pump"],
  ["Vacuum impregnation", "/products/vacuum-impregnation-plants"],
  ["Filtration & drying", "/products/single-stage-water-ring-vacuum-pump"],
  ["Pneumatic conveying", "/products/single-stage-side-channel-blower"],
  ["Packaging & bottle filling", "/products/oil-lubricated-vacuum-pump"],
  ["Lab & analytical instruments", "/products/oil-free-diaphragm-vacuum-pump"],
  ["Refrigeration evacuation", "/products/direct-drive-oil-sealed-rotary-high-vacuum-pump"],
  ["Vacuum forming & blister packing", "/products/rotary-vacuum-pressure-pump"],
  ["Degassing & vacuum furnaces", "/products/mechanical-booster"],
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        text="Precision-engineered pumps and blowers serving a wide range of industries and applications."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="group flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink-900/5 hover:ring-brand-200">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={ind.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold">{ind.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{ind.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <SectionHeading
            eyebrow="Applications"
            title="Find a pump by application"
            text="Not sure where to start? Pick your process to see the pump we most often recommend."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {applications.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 font-semibold text-ink-800 ring-1 ring-ink-100 transition hover:text-brand-600 hover:ring-brand-300">
                  {label}
                  <Icon name="arrow" className="h-4 w-4 text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Clients" title="Trusted by industry leaders" align="center" />
        </div>
        <div className="mt-12">
          <ClientsMarquee />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
