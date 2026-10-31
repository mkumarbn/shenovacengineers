import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services — Repair, Spares & Custom Systems",
  description:
    "Vacuum pump repair and overhaul for local and imported pumps, spare parts, custom vacuum systems and after-sales support from Shenovac Engineers.",
};

const services = [
  {
    icon: "wrench",
    title: "Pump Repair & Overhaul",
    text: "We repair any type of local or imported vacuum pump — rotary vane, water ring, vacuum pressure and more — restoring efficient, trouble-free performance.",
    points: ["Diagnosis & teardown", "Replacement of worn parts", "Re-assembly & testing"],
  },
  {
    icon: "box",
    title: "Spare Parts Supply",
    text: "Genuine spares for Shenovac pumps and compatible parts for many imported makes, kept ready to cut downtime.",
    points: ["Vanes, seals & gaskets", "Rotors, bearings & couplings", "Filters & overhaul kits"],
  },
  {
    icon: "ruler",
    title: "Custom Vacuum Systems",
    text: "Skid-mounted plants built around our pumps — with boosters, condensers, receivers, traps and controls — engineered to your process.",
    points: ["Application sizing", "Material selection (SS/Bronze)", "Factory tested"],
  },
  {
    icon: "users",
    title: "After-Sales Support",
    text: "Efficient and timely after-sales service across our nationwide network, backed by a 12-month warranty on every product.",
    points: ["Installation guidance", "Maintenance advice", "Responsive service team"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        text="Beyond manufacturing — we keep your vacuum equipment running."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl bg-white p-8 ring-1 ring-ink-100 transition hover:shadow-2xl hover:shadow-ink-900/10 hover:ring-brand-200">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-950 text-white transition group-hover:bg-brand-600">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-500">{s.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-sm text-ink-700">
                    <Icon name="check" className="h-3.5 w-3.5 text-brand-600" strokeWidth={3} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="relative container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Imported Pump Repairs"
              title="Don't replace it. Let us restore it."
              text="Imported pumps are expensive to replace and slow to service. Our technicians overhaul them with precision — often at a fraction of the cost and lead time."
              light
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn btn-primary">
                Book a Repair <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/products/imported-vacuum-pump-spare-parts" className="btn btn-ghost-light">
                Spare Parts
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/images/products/accessories-4.png", "/images/products/accessories-3.png", "/images/products/accessories-2.png", "/images/products/accessories-6.png"].map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                <Image src={src} alt="Vacuum pump spare parts" fill sizes="25vw" className="object-contain p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
