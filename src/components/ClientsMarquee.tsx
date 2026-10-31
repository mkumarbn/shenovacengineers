import Image from "next/image";
import { clients } from "@/data/site";

export function ClientsMarquee() {
  const loop = [...clients, ...clients];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {loop.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-white px-6"
            aria-hidden={i >= clients.length}
          >
            <Image
              src={c.logo}
              alt={c.name}
              width={160}
              height={80}
              className="max-h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
