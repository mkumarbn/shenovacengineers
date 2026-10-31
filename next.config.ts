import type { NextConfig } from "next";

// Old PHP site URLs → new routes, so existing search rankings and links keep working.
const legacy: Record<string, string> = {
  "/index.php": "/",
  "/about.php": "/about",
  "/profile.php": "/company-profile",
  "/quality.php": "/quality",
  "/contact.php": "/contact",
  "/oilsealed-rataryvacuum-pump.php": "/products/oil-sealed-rotary-high-vacuum-pump",
  "/single-stage-water-ring-vacuum-pump.php": "/products/single-stage-water-ring-vacuum-pump",
  "/two-stage-waterring-vacuum-pump.php": "/products/two-stage-water-ring-vacuum-pump",
  "/oil-lubricated-vacuum-pump.php": "/products/oil-lubricated-vacuum-pump",
  "/direct-drive-oilsealed-rotary-high-vacumm-pump.php":
    "/products/direct-drive-oil-sealed-rotary-high-vacuum-pump",
  "/mono-block-watering-vacuum-pump.php": "/products/monoblock-water-ring-vacuum-pump",
  "/single-stage-side-channel-blower.php": "/products/single-stage-side-channel-blower",
  "/double-stage-side-channel-blower.php": "/products/double-stage-side-channel-blower",
  "/industrial-high-vacuum-pump.php": "/products/industrial-high-vacuum-pump",
  "/oil-free-diaphram-vacuum-pump.php": "/products/oil-free-diaphragm-vacuum-pump",
  "/rotary-vacuum-pressure-pump.php": "/products/rotary-vacuum-pressure-pump",
  "/monoblock-vacuum-pump.php": "/products/monoblock-vacuum-pump",
  "/vacuum-impregnation-plants.php": "/products/vacuum-impregnation-plants",
  "/labourty-vacuum-pump.php": "/products/laboratory-vacuum-pumps",
  "/mehancial-booster.php": "/products/mechanical-booster",
  "/high-vacuum-pump-plants-system.php": "/products/high-vacuum-pump-plants-systems",
  "/vacuum-pump-accesories-components.php": "/products/vacuum-pump-accessories-components",
  "/vacuum-pump-oil.php": "/products/vacuum-pump-oil",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return Object.entries(legacy).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
