# Shenovac Engineers Website — Project Guide

Reference for anyone maintaining or extending this website in the future.
Last updated: 31 October 2026.

---

## 1. Overview

A rebuild of [shenovacengineers.com](https://www.shenovacengineers.com) (originally a PHP site)
as a modern **Next.js** website for Shenovac Engineers, an ISO 9001:2015 certified vacuum pump
manufacturer in New Delhi (est. 1990).

| Item | Value |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Turbopack, Cache Components enabled) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (theme defined in CSS, no `tailwind.config` file) |
| UI library | None. Icons are inline SVGs in `src/components/Icon.tsx` |
| Fonts | Barlow (headings) + Inter (body), loaded via `next/font/google` |
| Node.js | v20+ (built and tested on v20.20.2) |
| Database / CMS | None. All content lives in TypeScript data files |

---

## 2. Commands

```bash
npm install        # install dependencies
npm run dev        # development server → http://localhost:3000
npm run build      # production build (run this before deploying)
npm run start      # serve the production build (add `-- -p 3100` for another port)
npm run lint       # ESLint
```

Always run `npm run build` and `npm run lint` after changes. Both must pass.

---

## 3. Folder structure

```
public/
  images/
    logo.png, logo-white.png        Header / footer logos
    iso-certificate.png             ISO 9001:2015 (Otabu, 2018)
    certificate-2.png               ISO 9001:2008 (SSI, 2014)
    about.png                       Double-head diaphragm pump photo
    products/                       All product photos (white backgrounds)
    clients/                        Client logos (NTPC, BHEL, Tata, …)
src/
  app/
    layout.tsx                      Root layout: fonts, SEO metadata, header/footer, JSON-LD
    globals.css                     Theme colours, fonts, shared utilities (btn, eyebrow, …)
    page.tsx                        Home page
    about/                          About Us
    company-profile/                Fact sheet + certificates
    quality/                        Quality assurance process
    products/page.tsx               Product listing (category filter + search)
    products/[slug]/page.tsx        Product detail template (generates all 19 pages)
    services/                       Repairs, spares, custom systems
    industries/                     Industries served + "find a pump by application"
    contact/                        Contact cards, enquiry form, Google Map
    not-found.tsx                   Custom 404
    sitemap.ts, robots.ts           SEO files (auto-generated from data)
    icon.png                        Favicon
  components/
    Header.tsx                      Sticky header, products mega-menu, mobile drawer
    Footer.tsx                      Footer with CTA strip
    ui.tsx                          SectionHeading, PageHero, ProductCard, CheckList, CtaBand
    HeroSlider.tsx                  Home page rotating product showcase
    ProductBrowser.tsx              Category tabs + search on /products
    ProductGallery.tsx              Image gallery on product pages
    EnquiryForm.tsx                 Enquiry form (email / WhatsApp hand-off)
    ClientsMarquee.tsx              Scrolling client logos
    FloatingActions.tsx             Floating WhatsApp + call buttons
    CurrentYear.tsx                 Copyright year (client-side)
    Icon.tsx                        SVG icon set
  data/
    site.ts                         Company info, navigation, clients, industries
    products.ts                     Categories + all products and spec tables
next.config.ts                      Redirects from old .php URLs
```

---

## 4. How to update content

Content is kept apart from layout, so most changes only touch `src/data/`.

### Company details (phone, email, address, hours, certification)
Edit the `site` object in **`src/data/site.ts`**. The change shows up everywhere: header,
footer, contact page, product sidebars, structured data.

### Add a new product
1. Put the photo in `public/images/products/`. A white or transparent background works best.
2. Add an object to the `products` array in **`src/data/products.ts`**:

```ts
{
  slug: "my-new-pump",                       // URL: /products/my-new-pump
  name: "My New Pump",
  category: "rotary",                        // rotary | liquid-ring | blowers | oil-free | systems | accessories
  summary: "One-line description for cards and SEO.",
  highlights: [                              // 3 key figures (first 2 show on cards)
    { label: "Displacement", value: "100 – 500 LPM" },
    { label: "Vacuum", value: "0.002 mm Hg" },
    { label: "Motor", value: "1 – 3 HP" },
  ],
  intro: ["Paragraph 1", "Paragraph 2"],
  features: ["Feature 1", "Feature 2"],
  applications: ["Application 1", "Application 2"],
  images: ["/images/products/my-new-pump.png"],
  specs: [                                   // optional
    {
      title: "Standard Models",
      columns: ["Model", "Motor (HP)", "F.A.D. (LPM)"],
      rows: [["SV-100", "1", "100"]],
      note: "Optional footnote under the table.",
    },
  ],
  footnote: "Optional highlighted note.",    // optional
}
```

The product page, mega-menu entry, listing card, enquiry dropdown option and sitemap entry
are all generated from this. Nothing else needs editing.

> **Note:** The home page shows "19 product lines" in several places (`src/app/page.tsx`,
> `src/app/products/page.tsx`, and the About timeline). Update those numbers if the count changes.

### Featured products on the home page
Edit the `featured` slug list near the top of `src/app/page.tsx`.

### Clients
Add the logo to `public/images/clients/` and an entry to `clients` in `src/data/site.ts`.

### Industries
Edit `industries` in `src/data/site.ts`. The `icon` must be a name that exists in
`src/components/Icon.tsx`.

### Navigation menu
Edit `nav` in `src/data/site.ts`. The Products mega-menu builds itself from `categories`.

---

## 5. Design system

Defined in **`src/app/globals.css`** under `@theme`.

| Token | Use |
| --- | --- |
| `brand-50 … brand-950` | Logo red. `brand-600` (`#e10f17`) is the primary colour |
| `ink-50 … ink-950` | Neutral charcoal greys. `ink-950` is used for dark sections |
| `font-display` | Barlow, used for headings |
| `font-sans` | Inter, used for body text |

Reusable classes:
- `container-x`: standard page width and padding
- `btn` + `btn-primary` / `btn-dark` / `btn-outline` / `btn-ghost-light`: buttons
- `eyebrow`: small red label above section headings
- `bg-blueprint` / `bg-blueprint-light`: engineering grid backgrounds
- `spec-table`: product specification tables
- `prose-copy`: paragraph spacing for long text

**Important:** base element styles (`h1`–`h4`, `body`) must stay inside `@layer base`.
If they are moved outside a layer, they override Tailwind utilities, and white headings on
dark sections become invisible.

---

## 6. Key technical decisions

- **Static site.** All pages, including the 19 product pages, are pre-rendered at build time
  using `generateStaticParams`. This makes them fast and SEO-friendly.
- **Cache Components is enabled** (`next.config.ts`). Avoid `new Date()`, `Math.random()` or
  other non-deterministic values in server components; they break prerendering. Use a client
  component instead (see `CurrentYear.tsx`).
- **`/products` uses `useSearchParams`**, so `ProductBrowser` is wrapped in `<Suspense>`.
  Keep that wrapper.
- **Legacy redirects.** `next.config.ts` permanently redirects (308) all old `.php` URLs to the
  new routes so search rankings and old links keep working. Do not remove them.
- **Next.js 16 conventions.** `params` is a Promise (`await params`), and the global
  `PageProps<"/route">` / `LayoutProps<"/">` types are used.
- **React lint rule.** Don't call `setState` directly inside `useEffect`. Header resets its
  menus on route change by comparing against the previous pathname during render.

---

## 7. Enquiry form

There is **no backend mail service**. On submit, `EnquiryForm.tsx`:
- opens the visitor's email app to `info@shenovacengineers.com` (cc `shenovacpumps@yahoo.in`)
  with all fields pre-filled, or
- opens WhatsApp (`+91 98183 47008`) with the enquiry text.

**Future upgrade:** to receive submissions directly, add a Next.js route handler
(e.g. `src/app/api/enquiry/route.ts`) using a provider such as Resend, or a form service
(Formspree, Web3Forms). Then change `onSubmit` to `fetch` it.

---

## 8. SEO

- Page titles use the template `%s | Shenovac Engineers` (set in `layout.tsx`).
- Each page exports its own `metadata`. Product pages use `generateMetadata`.
- Organization JSON-LD is in the layout. Product JSON-LD is on each product page.
- `sitemap.xml` and `robots.txt` are generated from the data files.
- The site URL comes from `site.url` in `src/data/site.ts`.

---

## 9. Deployment

Next.js needs a **Node.js host**. XAMPP/Apache cannot run it directly.

| Option | Notes |
| --- | --- |
| **Vercel** (recommended) | Connect the repo; zero configuration. Point the domain's DNS to Vercel |
| VPS / cPanel with Node.js | `npm ci && npm run build && npm run start`, kept alive with PM2, behind Nginx/Apache as a reverse proxy |

A pure static export (`output: "export"`) is possible but would lose the `.php` redirects and
needs extra changes. It is not recommended.

---

## 10. Pending items / to verify with the client

- [ ] **Business hours.** "Mon – Sat, 9:30 AM – 6:30 PM" is a placeholder (`site.hours`).
- [ ] **Blower spec tables.** The original site's data was garbled. Pressure values like
      "14 mba/0 r" were read as 140 mbar, one unreadable row (SVBL-1-210 F) was dropped, and two
      sound values show "—". Confirm against the printed catalogue.
- [ ] **Mechanical Booster, Plants & Systems, Laboratory, Accessories, Oil, Imported Spares.**
      These pages had placeholder text on the old site and were rewritten. Booster and Plants
      have no spec tables. Add real data if available.
- [ ] **Industrial High Vacuum Pump** currently reuses the water-cooled rotary tables. Confirm.
- [ ] **Enquiry form backend** (see section 7).
- [ ] **Social media links.** None existed on the old site. Add them to the footer if wanted.
- [ ] **Downloadable catalogue PDF.** The old site referred to a catalogue. Add it to `public/`
      and link it from product pages if available.
- [ ] **Open Graph image.** It currently uses a product photo. A branded 1200×630 image would
      look better when shared.

---

## 11. Troubleshooting

| Problem | Fix |
| --- | --- |
| `... .node is not a valid Win32 application` or `Cannot find module '../lightningcss...node'` | Native binaries were corrupted by an interrupted install. Delete `node_modules` and `.next`, then `npm install` again |
| `Turbopack is not supported on this platform` | Same cause (corrupt `@next/swc-win32-x64-msvc`). Reinstall as above |
| `npm install` socket timeouts | `npm install --fetch-timeout=600000 --fetch-retries=5` |
| Lint error `Cannot find module '@babel/core'` | It is a dev dependency. Run `npm install` |
| Headings invisible on dark backgrounds | Base styles were moved out of `@layer base` in `globals.css` (see section 5) |
| Build error about `new Date()` / uncached data | A non-deterministic value is in a server component (see section 6) |

---

## 12. Source of original content

Text, spec tables, images, client logos and certificates were taken from the original site
(`shenovacengineers.com`, PHP version, © 2021). Watermarked stock photos from the old site were
deliberately **not** reused.
