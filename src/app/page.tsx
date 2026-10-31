import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Icon } from "@/components/Icon";
import { CtaBand, ProductCard, SectionHeading } from "@/components/ui";
import { categories, getProduct, productsIn } from "@/data/products";
import { industries, site } from "@/data/site";

const stats = [
  { value: String(site.established), label: "Established" },
  { value: site.customers, label: "Satisfied customers" },
  { value: "19", label: "Product lines" },
  { value: "12 mo", label: "Warranty on every pump" },
];

const featured = [
  "oil-sealed-rotary-high-vacuum-pump",
  "two-stage-water-ring-vacuum-pump",
  "rotary-vacuum-pressure-pump",
  "oil-free-diaphragm-vacuum-pump",
  "monoblock-water-ring-vacuum-pump",
  "direct-drive-oil-sealed-rotary-high-vacuum-pump",
  "double-stage-side-channel-blower",
  "vacuum-impregnation-plants",
].map((s) => getProduct(s)!);

const reasons = [
  { icon: "award", title: "Three decades of expertise", text: "Designing and building vacuum pumps in Delhi since 1990, led by a technical director with 30+ years in the field." },
  { icon: "shield", title: "ISO 9001:2015 certified", text: "A documented quality management system with checks after every stage of manufacturing." },
  { icon: "ruler", title: "Engineered to your duty", text: "Standard models or custom builds in cast iron, SS-304, SS-316 and PH Bronze to suit your process." },
  { icon: "truck", title: "On-time delivery", text: "Focused production planning and ready spares mean short lead times and dependable dispatch." },
  { icon: "wrench", title: "After-sales & repairs", text: "Prompt nationwide service, plus repair and overhaul of local and imported pumps." },
  { icon: "wallet", title: "Competitive pricing", text: "Factory-direct prices with transparent dealings and easy payment modes." },
];

const process = [
  { icon: "clipboard", title: "Understand", text: "We study your application, vacuum level, gas load and duty cycle." },
  { icon: "ruler", title: "Engineer", text: "Our team selects or designs the right pump and system configuration." },
  { icon: "gear", title: "Manufacture", text: "Built in-house with quality checks after every stage of production." },
  { icon: "rocket", title: "Deliver & Support", text: "Tested, dispatched on schedule and backed by a 12-month warranty." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand-700/25 blur-3xl" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-l from-brand-800/40 via-brand-900/10 to-transparent lg:block" />
        <div className="relative container-x grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-200">
              <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_12px] shadow-brand-500" />
              {site.certification} Certified Manufacturer
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Industrial vacuum,
              <br />
              <span className="text-brand-500">engineered to perform.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Since {site.established}, Shenovac Engineers has manufactured rotary high vacuum
              pumps, water ring pumps, blowers and complete vacuum systems for pharma, power,
              chemical and process industries across India and abroad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary px-7 py-3.5">
                Explore Products <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact#enquiry" className="btn btn-ghost-light px-7 py-3.5">
                Talk to an Engineer
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["0.002", "mm Hg ultimate vacuum"],
                ["7500", "LPM max displacement"],
                ["2050", "m³/hr blower capacity"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{v}</dd>
                  <dd className="mt-1 text-xs leading-snug text-ink-400">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-10 -mt-px bg-brand-600">
        <div className="container-x grid grid-cols-2 divide-white/15 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-7 text-center text-white">
              <p className="font-display text-3xl font-extrabold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-50">
              <div className="absolute inset-0 bg-blueprint-light" />
              <Image src="/images/products/single-stage-water-ring.png" alt="Single stage water ring vacuum pump" fill sizes="25vw" className="object-contain p-4 mix-blend-multiply" />
            </div>
            <div className="mt-12 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink-50">
                <div className="absolute inset-0 bg-blueprint-light" />
                <Image src="/images/products/rotary-vacuum-pressure.png" alt="Rotary vacuum pressure pump" fill sizes="25vw" className="object-contain p-4 mix-blend-multiply" />
              </div>
              <div className="rounded-2xl bg-ink-950 p-6 text-white">
                <p className="font-display text-4xl font-extrabold text-brand-500">30+</p>
                <p className="mt-1 text-sm text-ink-300">Years of manufacturing excellence</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-2xl bg-brand-100" />
        </div>
        <div>
          <SectionHeading
            eyebrow="About Shenovac"
            title="No industry is complete without the right vacuum."
          />
          <div className="prose-copy mt-6">
            <p>
              Shenovac Engineers is a prominent manufacturer, supplier, exporter and wholesaler of
              oil sealed rotary high vacuum pumps, water ring vacuum pumps, vacuum pressure pumps,
              diaphragm pumps, side channel blowers, impregnation plants, vacuum oil and
              components.
            </p>
            <p>
              Our modern works in Delhi house manufacturing, quality checking and R&amp;D under one
              roof. Every pump is tested before dispatch — which is why our products are known
              for performance, durability, rugged construction and reliability.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Manufacturing", "Quality testing", "R&D wing", "Repairs & spares"].map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4 font-semibold text-ink-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn btn-dark mt-8">
            More About Us <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Product Range"
              title="A complete vacuum portfolio"
              text="From laboratory diaphragm pumps to industrial water ring systems — one manufacturer for every vacuum requirement."
            />
            <Link href="/products" className="btn btn-outline shrink-0">
              View all 19 products <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, idx) => (
              <Link
                key={c.id}
                href={`/products?category=${c.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10 hover:ring-brand-200"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-bold text-ink-300">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
                    {productsIn(c.id).length} products
                  </span>
                </div>
                <div className="relative my-4 h-44">
                  <Image src={c.image} alt={c.name} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-600">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{c.description}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Explore range
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Featured"
          title="Our most requested pumps"
          text="Proven designs with published specifications — every model tested at our Delhi works."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-700/20 blur-3xl" />
        <div className="relative container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <SectionHeading
                eyebrow="Why Shenovac"
                title="Built rugged. Backed by people who know vacuum."
                light
              />
              <p className="mt-5 text-ink-300">
                Our edge comes from focused engineering, transparent dealings and a belief in
                long-term relationships with every customer.
              </p>
              <Link href="/quality" className="btn btn-primary mt-8">
                Our Quality Process <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:col-span-2">
              {reasons.map((r) => (
                <div key={r.title} className="group bg-ink-950 p-7 transition hover:bg-ink-900">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-500 ring-1 ring-brand-500/30 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={r.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="How We Work"
          title="From requirement to running pump"
          align="center"
        />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-ink-200 to-transparent md:block" />
          {process.map((p, i) => (
            <li key={p.title} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-ink-900/10 ring-1 ring-ink-100">
                <Icon name={p.icon} className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-ink-500">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Trusted across process industries"
              text="Our pumps and blowers run in plants, labs and production lines across a wide range of sectors."
            />
            <Link href="/industries" className="btn btn-outline shrink-0">
              All industries <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {industries.slice(0, 12).map((ind) => (
              <div key={ind.name} className="group rounded-xl bg-white p-5 ring-1 ring-ink-100 transition hover:ring-brand-300">
                <Icon name={ind.icon} className="h-7 w-7 text-brand-600" />
                <p className="mt-4 text-sm font-semibold leading-snug text-ink-900">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Clients"
            title="Chosen by India's leading companies"
            align="center"
          />
        </div>
        <div className="mt-12">
          <ClientsMarquee />
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="container-x pb-4">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100 md:grid-cols-5 md:p-12">
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="Certified Quality"
              title={`${site.certification} Quality Management System`}
              text="Shenovac Engineers is assessed and certified for the manufacture of vacuum pumps, vacuum pressure pumps, chemical process pumps and vacuum pump accessories and components."
            />
            <Link href="/company-profile" className="btn btn-dark mt-8">
              View Certificates <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-xs md:col-span-2">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl bg-brand-600" />
            <Image
              src="/images/iso-certificate.png"
              alt="ISO 9001:2015 certificate of Shenovac Engineers"
              width={635}
              height={832}
              className="relative rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
