# Shenovac Engineers — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 rebuild of
[shenovacengineers.com](https://www.shenovacengineers.com).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Where to edit content

| What | File |
| --- | --- |
| Company details, phones, emails, address, hours, clients, industries | `src/data/site.ts` |
| Products, categories, features, applications, spec tables | `src/data/products.ts` |
| Theme colours, fonts, shared styles | `src/app/globals.css` |
| Images | `public/images/` (products in `products/`, client logos in `clients/`) |

Adding a product = adding one object to the `products` array; its page, menu entry,
sitemap entry and listing card are generated automatically.

## Pages

- `/` Home · `/about` · `/company-profile` · `/quality` · `/services` · `/industries` · `/contact`
- `/products` (filterable by category + search) and `/products/[slug]` for all 19 products
- `sitemap.xml`, `robots.txt`, custom 404

Old PHP URLs (e.g. `/about.php`, `/oilsealed-rataryvacuum-pump.php`) permanently
redirect to the new pages — see `next.config.ts`.

## Enquiry form

There is no mail server configured, so the form opens the visitor's email app
(to info@ / cc yahoo address) or WhatsApp with all details pre-filled. To receive
submissions directly, add an API route or a form service (e.g. Resend, Formspree)
in `src/components/EnquiryForm.tsx`.

## Deployment

Any Node.js host works (Vercel is the simplest). XAMPP/Apache cannot run Next.js
server features on its own.
