import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-blueprint" />
      <div className="relative container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-8xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">This page is in a vacuum.</h1>
        <p className="mt-3 max-w-md text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go Home <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/products" className="btn btn-ghost-light">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
