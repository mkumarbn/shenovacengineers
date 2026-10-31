import { site } from "@/data/site";
import { Icon } from "./Icon";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hello Shenovac Engineers, I'd like to enquire about your vacuum pumps.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
      <a
        href={`tel:${site.phones[0].tel}`}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30 transition-transform hover:scale-110"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}
