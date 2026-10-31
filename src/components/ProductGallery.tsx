"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100">
        <div className="absolute inset-0 bg-blueprint-light" />
        <Image
          key={images[active]}
          src={images[active]}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-6 mix-blend-multiply animate-fade-up"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-lg bg-white ring-2 transition ${
                i === active ? "ring-brand-600" : "ring-ink-100 hover:ring-ink-300"
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-contain p-1.5 mix-blend-multiply" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
