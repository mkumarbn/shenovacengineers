import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";
import { Icon } from "./Icon";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-ink-300" : "text-ink-500"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  text,
  crumbs,
}: {
  title: string;
  text?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-blueprint" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 hidden h-full w-1/3 bg-linear-to-l from-brand-700/30 to-transparent [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)] md:block" />
      <div className="relative container-x py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <Icon name="chevronRight" className="h-3.5 w-3.5" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-brand-400">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-ink-300">{text}</p>}
        <div className="mt-8 h-1 w-20 bg-brand-600" />
      </div>
    </section>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-ink-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-linear-to-b from-ink-50 to-white">
        <div className="absolute inset-0 bg-blueprint-light" />
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600 shadow-sm backdrop-blur">
          {cat.short}
        </span>
      </div>
      <div className="flex flex-1 flex-col border-t border-ink-100 p-5">
        <h3 className="text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-600">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-500">{product.summary}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {product.highlights.slice(0, 2).map((h) => (
            <div key={h.label} className="rounded-md bg-ink-50 px-2.5 py-2">
              <dt className="text-ink-400">{h.label}</dt>
              <dd className="font-semibold text-ink-800">{h.value}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600">
          View details
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function CheckList({ items, cols = 1 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-ink-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
            <Icon name="check" className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-16">
      <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 text-white sm:px-12 md:py-14">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
        <div className="absolute -bottom-24 right-40 h-56 w-56 rounded-full border-[30px] border-white/5" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get the right pump, sized for your process.
            </h2>
            <p className="mt-3 text-brand-100">
              Share your application, required vacuum and flow. We&apos;ll recommend a model
              and send a quotation with delivery timelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#enquiry" className="btn bg-white text-brand-700 hover:bg-ink-50">
              Request a Quote <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn btn-ghost-light">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
