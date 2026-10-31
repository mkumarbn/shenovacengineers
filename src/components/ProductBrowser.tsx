"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { categories, products, type CategoryId } from "@/data/products";
import { ProductCard } from "./ui";
import { Icon } from "./Icon";

export function ProductBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const active = (params.get("category") as CategoryId | null) ?? "all";
  const [query, setQuery] = useState("");

  const setCategory = (id: string) => {
    const url = id === "all" ? "/products" : `/products?category=${id}`;
    router.replace(url, { scroll: false });
  };

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === "all" || p.category === active) &&
        (!q ||
          p.name.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q))),
    );
  }, [active, query]);

  const tabs = [{ id: "all", short: "All Products" }, ...categories];
  const current = categories.find((c) => c.id === active);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setCategory(t.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === t.id
                  ? "border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25"
                  : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
              }`}
            >
              {t.short}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search products</span>
          <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pumps or applications…"
            className="w-full rounded-full border border-ink-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
          />
        </label>
      </div>

      {current && (
        <p className="mt-6 max-w-3xl text-ink-500">
          <span className="font-semibold text-ink-900">{current.name}.</span> {current.description}
        </p>
      )}

      {list.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-ink-200 p-12 text-center">
          <p className="font-semibold text-ink-900">No products match “{query}”.</p>
          <p className="mt-1 text-sm text-ink-500">
            Try a different term, or contact us — we build custom solutions too.
          </p>
        </div>
      )}
    </div>
  );
}
