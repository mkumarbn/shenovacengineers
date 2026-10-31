import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductBrowser } from "@/components/ProductBrowser";
import { CtaBand, PageHero, ProductCard } from "@/components/ui";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Vacuum Pumps, Blowers & Systems",
  description:
    "Explore Shenovac's full range: oil sealed rotary high vacuum pumps, water ring vacuum pumps, side channel blowers, diaphragm pumps, impregnation plants, accessories and vacuum pump oil.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        text="19 product lines covering rotary vane, liquid ring, regenerative blower, diaphragm and complete vacuum systems — with published specifications for every model."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className="container-x py-14 lg:py-20">
        <Suspense
          fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          }
        >
          <ProductBrowser />
        </Suspense>
      </section>
      <CtaBand />
    </>
  );
}
