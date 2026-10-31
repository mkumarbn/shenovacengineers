import type { Metadata, Viewport } from "next";
import { Barlow, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/data/site";
import "./globals.css";

const heading = Barlow({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Vacuum Pump Manufacturer in Delhi, India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "vacuum pump manufacturer",
    "oil sealed rotary high vacuum pump",
    "water ring vacuum pump",
    "side channel blower",
    "diaphragm vacuum pump",
    "vacuum impregnation plant",
    "vacuum pump Delhi",
    "Shenovac",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    images: ["/images/products/oil-sealed-rotary.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e10f17",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  foundingDate: String(site.established),
  email: site.emails[0],
  telephone: site.phones[0].tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/3, New Daya Basti, Anand Parbat Industrial Area, New Rohtak Road",
    addressLocality: "New Delhi",
    postalCode: "110005",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
