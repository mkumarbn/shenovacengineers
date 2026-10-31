import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CheckList, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shenovac Engineers — manufacturer, supplier and exporter of industrial vacuum pumps since 1990. Learn about our infrastructure, R&D, quality and values.",
};

const pillars = [
  {
    icon: "factory",
    title: "Modern Infrastructure",
    text: "A properly segregated works with a manufacturing unit, a quality checking unit and an R&D wing — equipped with modern machines and tools to build quality pumps in volume.",
  },
  {
    icon: "microscope",
    title: "Research & Development",
    text: "A dedicated research wing keeps our pumps aligned with the latest market demands. Work is documented digitally, and improvements flow straight into manufacturing.",
  },
  {
    icon: "clipboard",
    title: "Quality Assurance",
    text: "Experienced quality auditors ensure only the best materials are used, supervise every stage of production and test each finished pump before approval.",
  },
  {
    icon: "handshake",
    title: "Customer Satisfaction",
    text: "We listen to client suggestions, refine our range accordingly and welcome partners worldwide into mutually beneficial, long-term relationships.",
  },
];

const values = [
  {
    icon: "eye",
    title: "Our Vision",
    text: "To create lasting business value for our customers through dependable vacuum technology and continuous innovation.",
  },
  {
    icon: "target",
    title: "Our Mission",
    text: "To supply high-quality vacuum pumps and systems that precisely meet each customer's requirement — on time and at a fair price.",
  },
  {
    icon: "award",
    title: "Our Objectives",
    text: "Customer satisfaction, safety in every operation, responsibility towards the environment and an unwavering commitment to excellence.",
  },
];

const whyUs = [
  "Timely delivery",
  "Focused approach",
  "Competent and efficient team",
  "Transparent dealings",
  "Maximum customer satisfaction",
  "Long-term relationships with vendors",
  "Safety and sincerity",
  "Easy payment modes",
];

const milestones = [
  { year: "1990", text: "Shenovac Engineers begins manufacturing industrial vacuum pumps in Delhi." },
  { year: "Growth", text: "Range expands to vacuum pressure pumps, water ring pumps and chemical process pumps." },
  { year: "Systems", text: "Vacuum impregnation plants and complete high vacuum systems added to the portfolio." },
  { year: "2014", text: "Quality management system certified to ISO 9001:2008." },
  { year: "2018", text: "Upgraded certification to ISO 9001:2015." },
  { year: "Today", text: "19 product lines, 1000+ customers, supplying across India and exporting abroad." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Shenovac Engineers"
        text="Manufacturer, supplier, exporter and wholesaler of industrial vacuum pumps and allied equipment since 1990."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Intro */}
      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Every industry needs the right pump. We build it."
          />
          <div className="prose-copy mt-6">
            <p>
              Shenovac Engineers is a prominent manufacturer, supplier, exporter and wholesaler of
              oil sealed rotary high vacuum pumps, suction pumps, industrial vacuum pumps, vacuum
              pressure pumps, water ring vacuum pumps and diaphragm vacuum pumps. We also offer
              pressure pumps, chemical process pumps, impregnation plants, vacuum pump oil and
              vacuum components and accessories.
            </p>
            <p>
              Our modern infrastructure is equipped with the latest machines and tools, allowing our
              team to work efficiently and at speed. Every specialist is a master of their
              department, and we regularly take suggestions from clients to refine our range —
              while keeping prices competitive for every budget.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/company-profile" className="btn btn-primary">
              Company Profile <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn btn-outline">
              Our Products
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-50 ring-1 ring-ink-100">
            <div className="absolute inset-0 bg-blueprint-light" />
            <Image
              src="/images/products/two-stage-water-ring.png"
              alt="Shenovac two stage water ring vacuum pump"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-contain p-8 mix-blend-multiply"
            />
          </div>
          <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 divide-x divide-ink-100 rounded-2xl bg-white p-5 text-center shadow-2xl shadow-ink-900/10 ring-1 ring-ink-100">
            {[
              [String(site.established), "Founded"],
              [site.customers, "Customers"],
              ["ISO", "9001:2015"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-extrabold text-brand-600">{v}</p>
                <p className="text-xs text-ink-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Strengths"
            title="What stands behind every Shenovac pump"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-5 rounded-2xl bg-white p-7 ring-1 ring-ink-100">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="relative container-x">
          <SectionHeading eyebrow="Purpose" title="Vision, mission & objectives" light align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-brand-500/50">
                <Icon name={v.icon} className="h-10 w-10 text-brand-500" />
                <h3 className="mt-5 text-2xl font-bold text-white">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-300">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey + Why us */}
      <section className="container-x grid gap-16 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading eyebrow="Our Journey" title="Growing step by step since 1990" />
          <ol className="relative mt-10 space-y-8 border-l-2 border-ink-100 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-600 ring-2 ring-brand-200" />
                <p className="font-display text-lg font-bold text-brand-600">{m.year}</p>
                <p className="mt-1 text-ink-600">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHeading eyebrow="Why Us" title="Our edge over other market players" />
          <div className="mt-10 rounded-2xl bg-ink-50 p-8 ring-1 ring-ink-100">
            <CheckList items={whyUs} cols={2} />
          </div>
          <div className="mt-6 flex items-center gap-5 rounded-2xl bg-white p-6 ring-1 ring-ink-100">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-xl font-bold text-white">
              AK
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink-900">{site.ceo}</p>
              <p className="text-sm text-ink-500">
                {site.ceoTitle} · 30+ years of experience in vacuum technology
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
