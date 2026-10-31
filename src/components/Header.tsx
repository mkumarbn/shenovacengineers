"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { categories, productsIn } from "@/data/products";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div
        className={`hidden bg-ink-950 text-ink-300 transition-all duration-300 lg:block ${
          scrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phones[0].tel}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-brand-500" />
              {site.phones[0].number}
            </a>
            <a
              href={`mailto:${site.emails[0]}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Icon name="mail" className="h-3.5 w-3.5 text-brand-500" />
              {site.emails[0]}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-3.5 w-3.5 text-brand-500" />
              {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-2 font-semibold tracking-wide text-white">
            <Icon name="shield" className="h-3.5 w-3.5 text-brand-500" />
            {site.certification} Certified · Since {site.established}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-ink-100 shadow-lg shadow-ink-900/5" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-18 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={500}
              height={80}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const hasMenu = item.label === "Products" || !!item.children;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-ink-800 hover:text-brand-600"
                    }`}
                    aria-expanded={hasMenu ? openMenu === item.label : undefined}
                  >
                    {item.label}
                    {hasMenu && <Icon name="chevron" className="h-4 w-4 opacity-60" />}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-3.5 -bottom-[21px] h-0.5 bg-brand-600" />
                    )}
                  </Link>

                  {item.children && openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="w-60 overflow-hidden rounded-xl border border-ink-100 bg-white p-2 shadow-2xl shadow-ink-900/10 animate-fade-up">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {c.label}
                            <Icon name="chevronRight" className="h-4 w-4 opacity-40" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.label === "Products" && openMenu === "Products" && (
                    <div className="fixed inset-x-0 top-auto pt-3">
                      <div className="container-x">
                        <div className="grid grid-cols-4 gap-0 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/15 animate-fade-up">
                          <div className="col-span-3 grid grid-cols-3 gap-x-6 gap-y-6 p-7">
                            {categories.map((cat) => (
                              <div key={cat.id}>
                                <Link
                                  href={`/products?category=${cat.id}`}
                                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
                                >
                                  {cat.short}
                                </Link>
                                <ul className="space-y-1">
                                  {productsIn(cat.id).map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        href={`/products/${p.slug}`}
                                        className="block py-0.5 text-sm text-ink-600 hover:text-ink-950 hover:underline decoration-brand-600 underline-offset-4"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="relative flex flex-col justify-end overflow-hidden bg-ink-950 p-7 text-white">
                            <div className="absolute inset-0 bg-blueprint" />
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-600/30 blur-2xl" />
                            <div className="relative">
                              <p className="font-display text-xl font-bold text-white">
                                Not sure which pump fits?
                              </p>
                              <p className="mt-2 text-sm text-ink-300">
                                Tell us your vacuum level, flow and process — our engineers
                                will recommend the right model.
                              </p>
                              <Link href="/contact" className="btn btn-primary mt-5 w-full">
                                Ask an Engineer
                              </Link>
                              <Link
                                href="/products"
                                className="mt-3 flex items-center justify-center gap-1 text-sm font-semibold text-ink-200 hover:text-white"
                              >
                                View all products <Icon name="arrow" className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact#enquiry" className="btn btn-primary hidden sm:inline-flex">
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-200 text-ink-900 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/60 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 p-4">
            <Image src="/images/logo.png" alt={site.name} width={500} height={80} className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 hover:bg-ink-50"
              aria-label="Close menu"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
            {nav.map((item) => {
              const sub =
                item.label === "Products"
                  ? categories.map((c) => ({
                      label: c.name,
                      href: `/products?category=${c.id}`,
                    }))
                  : item.children;
              const open = mobileSection === item.label;
              return (
                <div key={item.label} className="border-b border-ink-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`block flex-1 py-3.5 text-base font-semibold ${
                        isActive(item.href) ? "text-brand-600" : "text-ink-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {sub && (
                      <button
                        type="button"
                        onClick={() => setMobileSection(open ? null : item.label)}
                        className="p-2 text-ink-500"
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={open}
                      >
                        <Icon
                          name="chevron"
                          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {sub && open && (
                    <div className="mb-3 space-y-1 border-l-2 border-brand-600 pl-4">
                      {sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block py-1.5 text-sm text-ink-600 hover:text-brand-600"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="space-y-3 border-t border-ink-100 p-4">
            <Link href="/contact#enquiry" className="btn btn-primary w-full">
              Get a Quote
            </Link>
            <a href={`tel:${site.phones[0].tel}`} className="btn btn-outline w-full">
              <Icon name="phone" className="h-4 w-4" /> {site.phones[0].number}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
