import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { categories } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Company profile of Shenovac Engineers: established 1990, ISO 9001:2015 certified manufacturer of vacuum pumps, vacuum pressure pumps and chemical process pumps in Delhi.",
};

const facts: [string, string][] = [
  ["Company Name", site.name],
  ["Nature of Business", "Manufacturer, Exporter, Supplier & Wholesaler"],
  ["Year of Establishment", String(site.established)],
  ["CEO & Technical Director", site.ceo],
  ["Number of Employees", site.employees],
  ["Certification", `${site.certification} (Cert. No. ${site.certificateNumber})`],
  ["Registered Office", site.headOffice],
  ["Works", site.works],
  ["Market", "Pan-India, with exports to international markets"],
  ["Warranty", `${site.warrantyMonths} months on all products`],
];

const certificates = [
  {
    src: "/images/iso-certificate.png",
    title: "ISO 9001:2015",
    by: "Otabu Certification Limited (UK)",
    scope: "Manufacturer of various types of vacuum pumps, vacuum pressure pumps, chemical process pumps, vacuum pump accessories and components.",
  },
  {
    src: "/images/certificate-2.png",
    title: "ISO 9001:2008",
    by: "SSI Management Pvt. Ltd. (JAS-ANZ accredited)",
    scope: "Manufacturers of all types of vacuum pumps, chemical pumps and pressure pumps. Certified since 2014.",
  },
];

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        title="Company Profile"
        text="Key facts, capabilities and certifications at a glance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about" },
          { label: "Company Profile" },
        ]}
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-5 lg:py-24">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Fact Sheet" title="Shenovac Engineers at a glance" />
          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-ink-100">
            <dl className="divide-y divide-ink-100">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-6 py-4 odd:bg-ink-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-semibold text-ink-500">{k}</dt>
                  <dd className="text-ink-900 sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-8 text-white">
            <div className="absolute inset-0 bg-blueprint" />
            <div className="relative">
              <h2 className="text-xl font-bold text-white">Product Portfolio</h2>
              <ul className="mt-5 space-y-3">
                {categories.map((c) => (
                  <li key={c.id} className="flex items-center gap-3 text-ink-200">
                    <Icon name="check" className="h-4 w-4 text-brand-500" strokeWidth={3} />
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-brand-50 p-8 ring-1 ring-brand-100">
            <h2 className="text-xl font-bold">Services</h2>
            <p className="mt-3 text-ink-600">
              Besides manufacturing pumps in various standards and designs, we repair any type of
              local or imported pump — returning it to efficient, trouble-free operation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certifications"
            title="Independently assessed quality"
            text="Our quality management system has been certified by accredited bodies for over a decade."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {certificates.map((c) => (
              <figure key={c.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100">
                <div className="bg-ink-100 p-6">
                  <Image src={c.src} alt={`${c.title} certificate`} width={635} height={832} className="mx-auto w-full max-w-xs rounded shadow-xl" />
                </div>
                <figcaption className="p-6">
                  <p className="font-display text-xl font-bold text-ink-900">{c.title}</p>
                  <p className="text-sm font-semibold text-brand-600">{c.by}</p>
                  <p className="mt-2 text-sm text-ink-500">{c.scope}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
