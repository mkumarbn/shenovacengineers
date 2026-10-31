import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/ProductGallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { CheckList, PageHero, ProductCard } from "@/components/ui";
import { categories, getCategory, getProduct, products, productsIn } from "@/data/products";
import { site } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.summary} Manufactured by ${site.name}, Delhi — ${site.certification} certified.`,
    openGraph: { images: [p.images[0]] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const cat = getCategory(product.category);
  const related = [
    ...productsIn(product.category).filter((p) => p.slug !== product.slug),
    ...products.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${site.url}${product.images[0]}`,
    brand: { "@type": "Brand", name: "Shenovac" },
    manufacturer: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero
        title={product.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: cat.short, href: `/products?category=${cat.id}` },
          { label: product.name },
        ]}
      />

      {/* Overview */}
      <section className="container-x grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <ProductGallery images={product.images} name={product.name} />
        <div>
          <p className="eyebrow">{cat.name}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{product.name}</h2>
          <p className="mt-4 text-lg text-ink-500">{product.summary}</p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {product.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-ink-100 bg-ink-50 p-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">{h.label}</dt>
                <dd className="mt-1 font-display text-base font-bold text-ink-900 sm:text-lg">{h.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquiry" className="btn btn-primary">
              Enquire Now <Icon name="arrow" className="h-4 w-4" />
            </a>
            {product.specs && (
              <a href="#specifications" className="btn btn-outline">
                <Icon name="ruler" className="h-4 w-4" /> Specifications
              </a>
            )}
            <a href={`tel:${site.phones[0].tel}`} className="btn btn-outline">
              <Icon name="phone" className="h-4 w-4" /> {site.phones[0].number}
            </a>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-ink-100 pt-6 text-sm text-ink-600 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Icon name="shield" className="h-5 w-5 text-brand-600" /> {site.warrantyMonths}-month warranty
            </li>
            <li className="flex items-center gap-2">
              <Icon name="award" className="h-5 w-5 text-brand-600" /> {site.certification}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="wrench" className="h-5 w-5 text-brand-600" /> After-sales service
            </li>
          </ul>
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-ink-100 bg-ink-50/60">
        <div className="container-x grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="space-y-14 lg:col-span-8">
            <div>
              <h2 className="text-2xl font-bold">Introduction</h2>
              <div className="prose-copy mt-5">
                {product.intro.map((t) => (
                  <p key={t.slice(0, 32)}>{t}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-7 ring-1 ring-ink-100">
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Icon name="spark" className="h-5 w-5" />
                  </span>
                  {product.category === "accessories" && product.slug.includes("accessories")
                    ? "Range Includes"
                    : "Salient Features"}
                </h2>
                <div className="mt-6 text-sm">
                  <CheckList items={product.features} />
                </div>
              </div>
              <div className="rounded-2xl bg-white p-7 ring-1 ring-ink-100">
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-white">
                    <Icon name="factory" className="h-5 w-5" />
                  </span>
                  Applications
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <li key={a} className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm text-ink-700">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {product.specs && (
              <div id="specifications" className="scroll-mt-28">
                <h2 className="text-2xl font-bold">Technical Specifications</h2>
                <div className="mt-6 space-y-10">
                  {product.specs.map((t) => (
                    <div key={t.title}>
                      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                        <span className="h-4 w-1 rounded bg-brand-600" />
                        {t.title}
                      </h3>
                      <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-ink-100">
                        <table className="spec-table">
                          <thead>
                            <tr>
                              {t.columns.map((c) => (
                                <th key={c} scope="col">
                                  {c}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {t.rows.map((r) => (
                              <tr key={r[0]}>
                                {r.map((cell, i) => (
                                  <td key={i}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {t.note && <p className="mt-2 text-xs text-ink-400">* {t.note}</p>}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-ink-400">
                  In view of continuous improvement, specifications and designs may change without
                  prior notice.
                </p>
              </div>
            )}

            {product.footnote && (
              <div className="flex gap-4 rounded-2xl border-l-4 border-brand-600 bg-white p-6 ring-1 ring-ink-100">
                <Icon name="spark" className="h-6 w-6 shrink-0 text-brand-600" />
                <p className="text-ink-700">{product.footnote}</p>
              </div>
            )}

            <div className="flex items-center gap-4 rounded-2xl bg-ink-950 p-6 text-white">
              <Icon name="shield" className="h-10 w-10 shrink-0 text-brand-500" />
              <p className="text-sm text-ink-200">
                <span className="font-bold text-white">Warranty:</span> All Shenovac products are
                warranted for {site.warrantyMonths} months of trouble-free operation from the date
                of purchase against manufacturing defects.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100">
                <h2 className="bg-ink-900 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white">
                  All Categories
                </h2>
                <ul className="divide-y divide-ink-100">
                  {categories.map((c) => (
                    <li key={c.id}>
                      <details open={c.id === product.category} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 text-sm font-semibold text-ink-800 hover:text-brand-600">
                          {c.name}
                          <Icon name="chevron" className="h-4 w-4 text-ink-400 transition group-open:rotate-180" />
                        </summary>
                        <ul className="pb-3">
                          {productsIn(c.id).map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/products/${p.slug}`}
                                className={`block border-l-2 px-5 py-1.5 text-sm ${
                                  p.slug === product.slug
                                    ? "border-brand-600 bg-brand-50 font-semibold text-brand-700"
                                    : "border-transparent text-ink-500 hover:text-ink-900"
                                }`}
                              >
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-brand-600 p-6 text-white">
                <div className="absolute inset-0 bg-blueprint" />
                <div className="relative">
                  <p className="font-display text-xl font-bold">Need help choosing?</p>
                  <p className="mt-2 text-sm text-brand-100">
                    Call our technical team for sizing, pricing and delivery.
                  </p>
                  {site.phones.map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`} className="mt-4 flex items-center gap-3 font-semibold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                        <Icon name="phone" className="h-4 w-4" />
                      </span>
                      <span>
                        {ph.number}
                        <span className="block text-xs font-normal text-brand-100">{ph.label}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="container-x scroll-mt-24 py-16 lg:py-20">
        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-2xl shadow-ink-900/5 ring-1 ring-ink-100 md:p-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-3 text-3xl font-bold">Request a quote for this product</h2>
            <p className="mt-4 text-ink-500">
              Tell us your application and required capacity. Our engineers will recommend the right
              model and reply with pricing and delivery.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {["Expert model selection", "Factory-direct pricing", "Quick response"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-brand-600" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <EnquiryForm defaultProduct={product.name} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
