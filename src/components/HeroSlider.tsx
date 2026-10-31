"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const slides = [
  {
    kicker: "Oil Sealed Rotary",
    title: "High Vacuum Pumps",
    spec: "Down to 0.002 mm Hg",
    image: "/images/products/oil-sealed-rotary.png",
    href: "/products/oil-sealed-rotary-high-vacuum-pump",
  },
  {
    kicker: "Two Stage",
    title: "Water Ring Vacuum Pumps",
    spec: "Up to 720 mm Hg",
    image: "/images/products/two-stage-water-ring.png",
    href: "/products/two-stage-water-ring-vacuum-pump",
  },
  {
    kicker: "Monoblock",
    title: "Water Ring Compressors",
    spec: "22 – 330 m³/hr",
    image: "/images/products/monoblock-water-ring.png",
    href: "/products/monoblock-water-ring-vacuum-pump",
  },
  {
    kicker: "Oil-Free",
    title: "Side Channel Blowers",
    spec: "Up to 2050 m³/hr",
    image: "/images/products/double-stage-blower.png",
    href: "/products/double-stage-side-channel-blower",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const s = slides[i];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative rings */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/40">
        <div className="absolute inset-0 bg-blueprint-light" />
        {slides.map((sl, idx) => (
          <Image
            key={sl.image}
            src={sl.image}
            alt={`${sl.kicker} ${sl.title}`}
            fill
            priority={idx === 0}
            loading={idx === 0 ? undefined : "eager"}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className={`object-contain p-6 mix-blend-multiply transition-all duration-700 ${
              idx === i ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          />
        ))}

        <Link
          href={s.href}
          className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl bg-ink-950/90 p-4 text-white backdrop-blur sm:inset-x-6 sm:bottom-6"
        >
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
              {s.kicker}
            </p>
            <p className="truncate font-display text-lg font-bold">{s.title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold sm:inline">
              {s.spec}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 transition-transform group-hover:translate-x-1">
              <Icon name="arrow" className="h-5 w-5" />
            </span>
          </div>
        </Link>
      </div>

      <div className="relative mt-6 flex justify-center gap-2">
        {slides.map((sl, idx) => (
          <button
            key={sl.image}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show ${sl.title}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-10 bg-brand-500" : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
