export type SpecTable = {
  title: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export type CategoryId =
  | "rotary"
  | "liquid-ring"
  | "blowers"
  | "oil-free"
  | "systems"
  | "accessories";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  highlights: { label: string; value: string }[];
  intro: string[];
  features: string[];
  applications: string[];
  images: string[];
  specs?: SpecTable[];
  footnote?: string;
};

export const categories: {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
  image: string;
}[] = [
  {
    id: "rotary",
    name: "Rotary Vane Vacuum Pumps",
    short: "Rotary Vane",
    description:
      "Oil sealed and oil lubricated rotary vane pumps reaching down to 0.002 mm Hg — single stage, double stage and direct drive.",
    image: "/images/products/oil-sealed-rotary.png",
  },
  {
    id: "liquid-ring",
    name: "Water Ring Vacuum Pumps",
    short: "Water Ring",
    description:
      "Liquid ring vacuum pumps and compressors from 22 to 2030 m³/hr for wet, saturated and solvent-laden gases.",
    image: "/images/products/two-stage-water-ring.png",
  },
  {
    id: "blowers",
    name: "Side Channel Blowers",
    short: "Blowers",
    description:
      "100% oil-free regenerative turbine blowers for vacuum and pressure, from 80 to 2050 m³/hr.",
    image: "/images/products/double-stage-blower.png",
  },
  {
    id: "oil-free",
    name: "Oil-Free & Laboratory Pumps",
    short: "Oil-Free & Lab",
    description:
      "Diaphragm pumps, compressors and compact monoblock pumps for labs, analytical and medical equipment.",
    image: "/images/products/diaphragm.png",
  },
  {
    id: "systems",
    name: "Vacuum Plants & Systems",
    short: "Plants & Systems",
    description:
      "Vacuum impregnation plants, mechanical boosters and complete skid-mounted high vacuum systems.",
    image: "/images/products/impregnation-plant.png",
  },
  {
    id: "accessories",
    name: "Accessories, Spares & Oil",
    short: "Accessories",
    description:
      "Gauges, valves, traps, filters, vanes, spare parts for imported pumps and premium vacuum pump oil.",
    image: "/images/products/accessories.png",
  },
];

const MCLEOD = "Ultimate vacuum measured at the intake with a McLeod gauge.";
const WATER_NOTE =
  "Water circulation under pressure is necessary. If unavailable, connect water at the drainage valve.";

const ROTARY_COLS = [
  "Model",
  "Motor (HP)",
  "F.A.D. (LPM)",
  "Ult. Vacuum (mm Hg)",
  "Oil Charge (L)",
];

const SVMB_TABLE: SpecTable = {
  title: "Monoblock Series",
  columns: ["Model", "Motor (HP)", "Vacuum (mm Hg)", "Displacement (LPM)"],
  rows: [
    ["SVMB-25", "1/4", "710", "25"],
    ["SVMB-50", "1/4", "710", "50"],
    ["SVMB-100", "1/2", "710", "100"],
  ],
  note: MCLEOD,
};

const ROTARY_WATER_COOLED: SpecTable[] = [
  {
    title: "Single Stage — Water Cooled",
    columns: ROTARY_COLS,
    rows: [
      ["SV1/600", "1.5", "600", "0.05", "7"],
      ["SV1/800", "2", "800", "0.05", "8"],
      ["SV1/1000", "3", "1000", "0.05", "9"],
      ["SV1/1500", "3", "1500", "0.05", "8"],
      ["SV1/2000", "5", "2000", "0.01", "15"],
      ["SV1/3000", "5", "3000", "0.01", "16"],
      ["SV1/5000", "7.5", "5000", "0.05", "35"],
      ["SV1/7500", "10", "7500", "0.05", "45"],
    ],
    note: MCLEOD,
  },
  {
    title: "Double Stage — Water Cooled",
    columns: ROTARY_COLS,
    rows: [
      ["SV2/600", "1.5", "600", "0.002", "6"],
      ["SV2/800", "2", "800", "0.002", "8"],
      ["SV2/1000", "3", "1000", "0.002", "9"],
      ["SV2/1500", "3", "1500", "0.002", "11"],
      ["SV2/2000", "5", "2000", "0.002", "15"],
      ["SV2/3000", "5", "3000", "0.002", "18"],
      ["SV2/5000", "7.5", "5000", "0.002", "35"],
      ["SV2/7500", "10", "7500", "0.002", "45"],
    ],
    note: MCLEOD,
  },
];

const WATER_RING_FEATURES = [
  "Trouble-free, low-maintenance performance",
  "Vibration-free and low noise operation",
  "High suction capacity with oil-free compressed air",
  "Handles almost all gases and vapours, even when saturated",
  "Cast iron construction; SS-304, SS-316 and PH Bronze on request",
  "Built to specification within a short lead time",
  "Ready availability of spare parts",
  "Prompt after-sales service",
];

const WATER_RING_APPS = [
  "Solvent & vapour recovery",
  "Breweries & distilleries",
  "Pharmaceuticals & chemicals",
  "Plastics & metallurgy",
  "Power plants & furnaces",
  "Cement, fertilizer & ceramics",
  "Garments & textiles",
  "Extrusion & dehydration",
  "Vacuum impregnation",
  "Conveying & priming",
  "Filtration & sterilization",
];

const BLOWER_APPS = [
  "Aeration & agitation",
  "Bottle drying & filling stations",
  "Vacuum conveying, lifting & feeding",
  "Vacuum packaging",
  "Dust, trim & fume extraction",
  "Air bearings & oil burners",
  "Laminating presses",
  "High-speed labelling machines",
  "China clay crockery casting",
  "Air pollution monitoring",
  "Garment vacuum tables",
  "Priming of centrifugal pumps",
  "Jacuzzis & medical bath tubs",
];

const BLOWER_INTRO = [
  "Shenovac regenerative vacuum / pressure side channel blowers are turbine-type machines manufactured from high-grade die-cast aluminium alloy and mounted directly on single- or three-phase electric motors. They are specially designed for high efficiency and trouble-free operation.",
  "The main assembly is a dynamically balanced, multi-bladed impeller that spins at high speed inside a specially designed stator-cum-compression chamber with very fine clearances. The impeller sits directly on the bearing-mounted shaft of a superior-quality flanged motor.",
  "Because there is no friction between any two parts and no lubrication is required, the pressurised air or vacuum produced is 100% oil-free.",
];

const BLOWER_FEATURES = [
  "100% oil-free air — no internal lubrication",
  "Die-cast aluminium alloy construction",
  "Direct-mounted on flanged electric motor",
  "Dynamically balanced multi-bladed impeller",
  "Works as vacuum pump or pressure blower",
  "Compact, low maintenance and long life",
];

const BLOWER_COLS = [
  "Model",
  "Power",
  "Displacement",
  "Vacuum",
  "Pressure",
  "Sound",
  "Weight",
];

export const products: Product[] = [
  {
    slug: "oil-sealed-rotary-high-vacuum-pump",
    name: "Oil Sealed Rotary High Vacuum Pump",
    category: "rotary",
    summary:
      "Single and double stage rotary vane pumps from 32 to 7500 LPM, reaching an ultimate vacuum of 0.002 mm Hg.",
    highlights: [
      { label: "Displacement", value: "32 – 7500 LPM" },
      { label: "Ultimate vacuum", value: "0.002 mm Hg" },
      { label: "Stages", value: "Single & Double" },
    ],
    intro: [
      "Shenovac pumps are known for their outstanding, trouble-free performance. Each pump is built from high-quality materials and goes through repeated testing at every stage of manufacture in our workshop, so that every unit leaving the factory is accurate, reliable and trouble-free.",
      "The Shenovac oil sealed rotary high vacuum pump is an oil-immersed rotary vane design. A rotor is mounted eccentrically in the main body and carries two opposing spring-loaded vanes that press against the inner wall. As the rotor turns, the vanes slide in and out and sweep the air space twice per revolution.",
      "The range covers single and double stage models with free air displacement from 32 LPM to 7500 LPM. Pumps up to 500 LPM are air cooled; larger capacities, developed specifically for industrial duty, are water cooled.",
    ],
    features: [
      "High efficiency and accuracy",
      "Compact and sturdy design",
      "Reliable and economical to run",
      "Uninterrupted supply of vacuum",
      "Easy maintenance",
      "Supplied with belt guard and effective gas ballast",
      "Optional moisture trap, NRV, regulator, vacuum gauge and air admittance valve",
      "12-month guarantee against manufacturing defects",
    ],
    applications: [
      "De-aeration",
      "Distillation",
      "Drying",
      "Refrigeration & air-conditioning",
      "Vacuum forming",
      "Research work",
      "Evacuation of vacuum systems",
      "Bulb industries",
      "Impregnation",
    ],
    images: [
      "/images/products/oil-sealed-rotary.png",
      "/images/products/oil-sealed-rotary-thumb.png",
    ],
    specs: [
      {
        title: "Single Stage — Air Cooled",
        columns: ROTARY_COLS,
        rows: [
          ["SV1/32", "1/6", "32", "0.02", "2"],
          ["SV1/50", "1/4", "50", "0.02", "2"],
          ["SV1/100", "1/2", "100", "0.02", "2"],
          ["SV1/150", "1/2", "150", "0.02", "2.5"],
          ["SV1/200", "3/4", "200", "0.02", "3"],
          ["SV1/300", "1", "300", "0.02", "4"],
          ["SV1/600", "1.5", "600", "0.05", "7"],
        ],
        note: MCLEOD,
      },
      {
        title: "Double Stage — Air Cooled",
        columns: ROTARY_COLS,
        rows: [
          ["SV2/32", "1/6", "32", "0.002", "1"],
          ["SV2/50", "1/4", "50", "0.002", "1.5"],
          ["SV2/100", "1/2", "100", "0.002", "2"],
          ["SV2/150", "1/2", "150", "0.002", "2.5"],
          ["SV2/200", "3/4", "200", "0.002", "3"],
          ["SV2/300", "1", "300", "0.002", "3.5"],
          ["SV2/600", "1.5", "600", "0.002", "5.5"],
        ],
        note: MCLEOD,
      },
      ...ROTARY_WATER_COOLED,
    ],
  },
  {
    slug: "direct-drive-oil-sealed-rotary-high-vacuum-pump",
    name: "Direct Drive Oil Sealed Rotary High Vacuum Pump",
    category: "rotary",
    summary:
      "Compact SV2 (D) series double stage pumps coupled directly to the motor, reaching 10⁻³ mbar.",
    highlights: [
      { label: "Displacement", value: "100 – 500 LPM" },
      { label: "Ultimate vacuum", value: "10⁻³ mbar" },
      { label: "Drive", value: "Direct coupled" },
    ],
    intro: [
      "The SV2 (D) series is designed to run non-stop for long periods without trouble. These are direct drive, double stage, oil sealed rotary high vacuum pumps in which precise alignment and fine setting of every component is preserved by design.",
      "Main components are made from selected superior-grade raw materials — specially treated grade cast iron and steel. The pump is coupled directly to the motor shaft, which makes it compact and gives a powerful, positive and near-silent drive.",
    ],
    features: [
      "Compact design with minimum weight",
      "High-capacity integral oil pump for reliable running at high gas loads",
      "Low noise and minimum vibration",
      "Oil level window for easy inspection",
      "Easy maintenance of shaft oil seal",
      "Tested on Pirani and McLeod gauges",
      "Anti oil suck-back system fitted",
    ],
    applications: [
      "Leak testing",
      "Evacuation of vacuum systems",
      "TV tubes, bulbs & vacuum flasks",
      "A/C and refrigeration",
      "De-aeration & moulds",
      "Filtration and distillation",
      "Bright annealing",
      "R&D laboratories",
    ],
    images: [
      "/images/products/direct-drive.png",
      "/images/products/direct-drive-2.png",
    ],
    specs: [
      {
        title: "SV2 (D) Series",
        columns: [
          "Model",
          "Motor (HP)",
          "F.A.D. (LPM)",
          "Ult. Pressure (mm Hg)",
          "Oil Charge (L)",
        ],
        rows: [
          ["SV2-100D", "1/2", "100", "0.002", "0.5"],
          ["SV2-150D", "1/2", "150", "0.002", "0.5"],
          ["SV2-250D", "1/2", "250", "0.002", "0.75"],
          ["SV2-350D", "1", "350", "0.002", "1.25"],
          ["SV2-500D", "1.5", "500", "0.002", "2.0"],
        ],
        note: MCLEOD,
      },
    ],
  },
  {
    slug: "oil-lubricated-vacuum-pump",
    name: "Oil Lubricated Vacuum Pump",
    category: "rotary",
    summary:
      "Single stage rotary vane pumps with built-in oil circulation and anti-suckback, 20 to 300 m³/hr.",
    highlights: [
      { label: "Displacement", value: "20 – 300 m³/hr" },
      { label: "Vacuum", value: "0.5 mbar" },
      { label: "Cooling", value: "Air cooled" },
    ],
    intro: [
      "Shenovac rotary vane vacuum pumps are single stage, oil lubricated vane pumps with an in-built oil circulation and anti-suckback system.",
      "A dynamically balanced rotor carries three or four specially treated fibre vanes inside a stator. As the motor turns the rotor, centrifugal force throws the vanes out against the stator wall, pushing trapped air out and drawing fresh air in — producing an unbroken stream of vacuum and pressure.",
      "After lubricating all vital components, the oil travels on without contaminating the air and collects automatically in its chamber for re-circulation.",
    ],
    features: [
      "High pumping speed",
      "High water-vapour tolerance",
      "Dynamically balanced rotor",
      "Built-in oil circulation system",
      "Built-in anti-suckback system",
      "No oil mist or fumes",
      "Low noise and low power consumption",
    ],
    applications: [
      "Distillation, evacuation & filtration",
      "Holding & conveying",
      "Glass blowing & lamination",
      "Labelling & paper feeding",
      "Vacuum forming & blister packing",
      "Bottle filling & vacuum sealing",
      "Food processing",
    ],
    images: ["/images/products/oil-lubricated.png"],
    specs: [
      {
        title: "Standard Models",
        columns: [
          "Model",
          "Displacement (m³/hr)",
          "Vacuum (mbar)",
          "Oil (L)",
          "Motor (HP)",
          "RPM",
        ],
        rows: [
          ["SV-20-OL", "20", "0.5", "0.85", "1", "1440"],
          ["SV-25-OL", "25", "0.5", "0.85", "1", "1440"],
          ["SV-30-OL", "30", "0.5", "1", "1.5", "1440"],
          ["SV-40-OL", "40", "0.5", "2", "2", "1440"],
          ["SV-65-OL", "65", "0.5", "3", "2", "1440"],
          ["SV-100-OL", "100", "0.5", "4", "3", "1440"],
          ["SV-150-OL", "150", "0.5", "5", "5", "1440"],
          ["SV-200-OL", "200", "0.5", "6", "7.5", "1440"],
          ["SV-300-OL", "300", "0.5", "7", "10", "1440"],
        ],
        note: "Figures based on factory testing in Delhi; values may differ slightly with altitude. Test parameters: 1440/2880 RPM, 220/440 V ±5%, ambient temperature.",
      },
    ],
  },
  {
    slug: "rotary-vacuum-pressure-pump",
    name: "Rotary Vacuum Pressure Pump",
    category: "rotary",
    summary:
      "Dual-purpose eight-vane pumps that deliver both suction and pressure from a single unit.",
    highlights: [
      { label: "Displacement", value: "70 – 1500 LPM" },
      { label: "Vacuum", value: "Up to 700 mm Hg" },
      { label: "Pressure", value: "Up to 20 PSI" },
    ],
    intro: [
      "Shenovac rotary vacuum pressure pumps combine suction and pressure in one machine, so the same unit can be used for either duty. They have low oil consumption, are compact, quiet and carefree in operation, and easy to maintain.",
      "A rotor with eight free-sliding vanes is mounted eccentrically in the stator. As it turns, the vanes sweep the air eight times per revolution, creating vacuum and pressure simultaneously. All key points are self-lubricated; the oil is baffled from the exhaust and returned to the oil chamber without contaminating the air.",
      "Every component is machined, drilled and finished on jigs and fixtures, so parts are precisely matched and easily replaceable. Strengthened walls give a long service life even in adverse working conditions.",
    ],
    features: [
      "Vacuum and pressure from one unit",
      "Eight-vane rotor for smooth delivery",
      "Low oil consumption",
      "Self-lubricating design",
      "Jig-machined, interchangeable parts",
      "Compact, quiet and easy to maintain",
    ],
    applications: [
      "Vacuum distillation & extraction",
      "Filtration & drying",
      "Bottle filling",
      "Photo printing & glass blowing",
      "Pharmaceutical & lab work",
      "Food processing",
      "Transfer of liquids",
      "Vacuum forming & blister packing",
    ],
    images: [
      "/images/products/rotary-vacuum-pressure.png",
      "/images/products/rotary-vacuum-pressure-2.png",
    ],
    specs: [
      {
        title: "SVP Series",
        columns: [
          "Model",
          "Motor (HP)",
          "F.A.D. (LPM)",
          "Ult. Vacuum (mm Hg)",
          "Max Pressure (PSI)",
        ],
        rows: [
          ["SVP-70", "1/4", "70", "700", "10"],
          ["SVP-150", "1/2", "150", "700", "15"],
          ["SVP-300", "1", "300", "685", "20"],
          ["SVP-500", "2", "500", "685", "20"],
          ["SVP-1000", "3", "1000", "660", "20"],
          ["SVP-1500", "5", "1500", "660", "20"],
        ],
        note: MCLEOD,
      },
    ],
  },
  {
    slug: "industrial-high-vacuum-pump",
    name: "Industrial High Vacuum Pump",
    category: "rotary",
    summary:
      "Heavy-duty, water cooled rotary high vacuum pumps from 600 to 7500 LPM for continuous process duty.",
    highlights: [
      { label: "Displacement", value: "600 – 7500 LPM" },
      { label: "Ultimate vacuum", value: "0.002 mm Hg" },
      { label: "Cooling", value: "Water cooled" },
    ],
    intro: [
      "Our industrial high vacuum pumps are the large-capacity, water cooled members of the Shenovac rotary vane family — specially designed and developed for round-the-clock industrial applications.",
      "Built from high-grade cast iron and steel in line with industrial standards, they are available in single stage for general process vacuum and double stage where a deeper ultimate vacuum is needed. Each pump is tested before dispatch and can be supplied as a bare pump, a motor-coupled set or part of a complete vacuum system.",
    ],
    features: [
      "Rugged construction for continuous duty",
      "Water cooled for stable temperatures at high loads",
      "Single and double stage options",
      "Gas ballast for condensable vapours",
      "Belt-driven with guard, or as complete skid",
      "Supported by Shenovac spares and service",
    ],
    applications: [
      "Vacuum drying & degassing",
      "Transformer & cable impregnation",
      "Vacuum furnaces & annealing",
      "Distillation & evaporation",
      "Process evacuation",
      "Refrigeration manufacturing",
    ],
    images: [
      "/images/products/industrial-high-vacuum.png",
      "/images/products/plants-systems.png",
    ],
    specs: ROTARY_WATER_COOLED,
  },
  {
    slug: "single-stage-water-ring-vacuum-pump",
    name: "Single Stage Water Ring Vacuum Pump",
    category: "liquid-ring",
    summary:
      "Liquid ring vacuum pumps and compressors from 51 to 2030 m³/hr, operating to 710 mm Hg.",
    highlights: [
      { label: "Capacity", value: "51 – 2030 m³/hr" },
      { label: "Vacuum", value: "Up to 710 mm Hg" },
      { label: "Motor", value: "3 – 90 HP" },
    ],
    intro: [
      "Shenovac water ring (liquid ring) vacuum compressors are rotating positive displacement pumps that can work both as vacuum pumps and as compressors. A vaned impeller, mounted eccentrically in the casing, rotates and throws the sealing water into a moving cylindrical ring that seals each impeller cell.",
      "Gas drawn in through the inlet port is trapped in the impeller cells, compressed by the reducing volume as the impeller turns and discharged through the exhaust port. A portion of the liquid leaves with it, carrying away the heat of compression.",
      "The casing and most components are cast iron; SS-304, SS-316 and PH Bronze are available on request. Single stage pumps are designed for vacuum levels up to 710 mm Hg (with sealant water below 30 °C and site pressure of 760 mm Hg).",
    ],
    features: WATER_RING_FEATURES,
    applications: WATER_RING_APPS,
    images: ["/images/products/single-stage-water-ring.png"],
    specs: [
      {
        title: "SVW Series",
        columns: [
          "Model",
          "Motor (HP)",
          "RPM",
          "F.A.D. (m³/hr)",
          "Water (L/min)",
          "Weight (kg)",
        ],
        rows: [
          ["SVW-30", "3", "2850", "51", "7", "34"],
          ["SVW-50", "5", "2850", "85", "9", "42"],
          ["SVW-75", "7.5", "2850", "125", "14", "50"],
          ["SVW-100", "7.5", "1440", "170", "16", "170"],
          ["SVW-150", "10", "1440", "220", "20", "185"],
          ["SVW-200", "15", "1440", "330", "30", "220"],
          ["SVW-300", "20", "1440", "440", "40", "245"],
          ["SVW-400", "30", "980", "725", "60", "495"],
          ["SVW-500", "40", "980", "1080", "100", "530"],
          ["SVW-700", "60", "725", "1500", "150", "910"],
          ["SVW-900", "90", "725", "2030", "200", "1080"],
        ],
        note: WATER_NOTE,
      },
    ],
  },
  {
    slug: "two-stage-water-ring-vacuum-pump",
    name: "Two Stage Water Ring Vacuum Pump",
    category: "liquid-ring",
    summary:
      "Two stage liquid ring pumps from 81 to 1080 m³/hr for deeper vacuum up to 720 mm Hg.",
    highlights: [
      { label: "Capacity", value: "81 – 1080 m³/hr" },
      { label: "Vacuum", value: "Up to 720 mm Hg" },
      { label: "Motor", value: "5 – 40 HP" },
    ],
    intro: [
      "The two stage Shenovac water ring vacuum compressor works on the same liquid ring principle as the single stage model, but gas compressed in the first stage passes to a second stage where it is compressed again before discharge.",
      "This makes two stage pumps the better choice when handling solvents at higher vacuum — up to 720 mm Hg, with sealant water below 30 °C and site pressure of 760 mm Hg.",
      "Casing and most components are cast iron, except the shaft and impeller. SS-304 / SS-316 construction is available on request for corrosive duties.",
    ],
    features: WATER_RING_FEATURES,
    applications: WATER_RING_APPS,
    images: [
      "/images/products/two-stage-water-ring.png",
      "/images/products/two-stage-water-ring-2.png",
    ],
    specs: [
      {
        title: "SVW-T Series",
        columns: [
          "Model",
          "Motor (HP)",
          "RPM",
          "F.A.D. (m³/hr)",
          "Water (L/min)",
        ],
        rows: [
          ["SVW-50 T", "5", "1450", "81", "7"],
          ["SVW-75 T", "7.5", "1450", "160", "9"],
          ["SVW-100 T", "10", "1450", "220", "14"],
          ["SVW-150 T", "15", "1450", "330", "20"],
          ["SVW-200 T", "20", "1450", "440", "24"],
          ["SVW-250 T", "25", "1450", "580", "30"],
          ["SVW-300 T", "30", "1450", "725", "40"],
          ["SVW-400 T", "40", "1450", "1080", "50"],
        ],
        note: WATER_NOTE,
      },
    ],
  },
  {
    slug: "monoblock-water-ring-vacuum-pump",
    name: "Monoblock Water Ring Vacuum Pump & Compressor",
    category: "liquid-ring",
    summary:
      "Compact, direct-drive water ring pumps mounted on the motor — the OEM's favourite, 22 to 330 m³/hr.",
    highlights: [
      { label: "Capacity", value: "22 – 330 m³/hr" },
      { label: "Motor", value: "1 – 15 HP" },
      { label: "Drive", value: "Monoblock" },
    ],
    intro: [
      "Developed indigenously at Shenovac, the monoblock water ring vacuum compressor is mounted directly on a suitable electric motor. Its working principle and performance match our direct drive water ring pumps, with a number of practical advantages.",
      "It is simple in design yet robust in performance — compact, light, portable, quiet and easy to maintain. Its economy makes it widely used by OEMs (original equipment manufacturers).",
    ],
    features: [
      "Simple design, robust performance",
      "Compact, lightweight and portable",
      "Quiet, smooth operation",
      "Easy to maintain",
      "Most economical in its class",
      "Preferred by OEMs",
    ],
    applications: [
      "Small industrial units & plants",
      "Pharmaceuticals",
      "Food & confectionery",
      "Bottle filling & labelling",
      "Pulp processing",
      "Distillation, filtration & evaporation",
      "Sterilization & degasification",
      "Condensation",
      "Plastic industries",
    ],
    images: [
      "/images/products/monoblock-water-ring.png",
      "/images/products/monoblock-water-ring-2.png",
    ],
    specs: [
      {
        title: "SVMW Series",
        columns: [
          "Model",
          "Motor (HP)",
          "RPM",
          "F.A.D. (m³/hr)",
          "Water (L/min)",
        ],
        rows: [
          ["SVMW-10", "1", "2880", "22", "3"],
          ["SVMW-20", "2", "2880", "30", "5"],
          ["SVMW-30", "3", "1440", "55", "7"],
          ["SVMW-50", "5", "1440", "90", "9"],
          ["SVMW-75", "7.5", "1440", "160", "12"],
          ["SVMW-100", "10", "1440", "220", "15"],
          ["SVMW-150", "15", "1440", "330", "22"],
        ],
        note: WATER_NOTE,
      },
    ],
  },
  {
    slug: "single-stage-side-channel-blower",
    name: "Single Stage Side Channel Blower",
    category: "blowers",
    summary:
      "Oil-free regenerative turbine blowers, 80 to 1050 m³/hr, from 0.5 to 24.5 HP.",
    highlights: [
      { label: "Capacity", value: "80 – 1050 m³/hr" },
      { label: "Power", value: "0.5 – 24.5 HP" },
      { label: "Air", value: "100% oil-free" },
    ],
    intro: BLOWER_INTRO,
    features: BLOWER_FEATURES,
    applications: BLOWER_APPS,
    images: ["/images/products/single-stage-blower.png"],
    specs: [
      {
        title: "SVBL-1 Single Stage Turbine Blowers",
        columns: BLOWER_COLS,
        rows: [
          ["SVBL-1-80", "0.5 HP", "80 m³/hr · 47 CFM", "-130 mbar", "140 mbar", "62 dB", "12 kg"],
          ["SVBL-1-145", "1.0 HP", "145 m³/hr · 85 CFM", "-150 mbar", "160 mbar", "—", "14 kg"],
          ["SVBL-1-210", "2.0 HP", "210 m³/hr · 123 CFM", "-190 mbar", "200 mbar", "70 dB", "23 kg"],
          ["SVBL-1-210 P", "3.0 HP", "210 m³/hr · 123 CFM", "-220 mbar", "270 mbar", "75 dB", "26 kg"],
          ["SVBL-1-320 V", "4.0 HP", "320 m³/hr · 188 CFM", "-270 mbar", "290 mbar", "69 dB", "37 kg"],
          ["SVBL-1-500", "5.0 HP", "400 m³/hr · 235 CFM", "-290 mbar", "330 mbar", "77 dB", "40 kg"],
          ["SVBL-1-530", "7.5 HP", "530 m³/hr · 312 CFM", "-300 mbar", "320 mbar", "80 dB", "62 kg"],
          ["SVBL-1-530 P", "10 HP", "530 m³/hr · 312 CFM", "-320 mbar", "380 mbar", "82 dB", "68 kg"],
          ["SVBL-1-1050", "11 HP", "1050 m³/hr · 618 CFM", "-290 mbar", "330 mbar", "77 dB", "93 kg"],
          ["SVBL-1-1050 P", "16 HP", "1050 m³/hr · 618 CFM", "-300 mbar", "320 mbar", "80 dB", "116 kg"],
          ["SVBL-1-1050 HP", "24.5 HP", "1050 m³/hr · 618 CFM", "-320 mbar", "380 mbar", "82 dB", "126 kg"],
        ],
        note: "Values are nominal. Please confirm your duty point with our team before ordering.",
      },
    ],
  },
  {
    slug: "double-stage-side-channel-blower",
    name: "Double Stage Side Channel Blower",
    category: "blowers",
    summary:
      "Two stage oil-free turbine blowers for higher vacuum and pressure, 88 to 2050 m³/hr.",
    highlights: [
      { label: "Capacity", value: "88 – 2050 m³/hr" },
      { label: "Power", value: "1 – 33 HP" },
      { label: "Pressure", value: "Up to 660 mbar" },
    ],
    intro: BLOWER_INTRO,
    features: [
      ...BLOWER_FEATURES,
      "Two stage design for higher differential pressure",
    ],
    applications: BLOWER_APPS,
    images: ["/images/products/double-stage-blower.png"],
    specs: [
      {
        title: "SVBL-DS Double Stage Turbine Blowers",
        columns: BLOWER_COLS,
        rows: [
          ["SVBL-DS-88", "1.0 HP", "88 m³/hr · 52 CFM", "-130 mbar", "140 mbar", "62 dB", "12 kg"],
          ["SVBL-DS-145", "1.0 HP", "145 m³/hr · 85 CFM", "-210 mbar", "240 mbar", "55 dB", "14 kg"],
          ["SVBL-DS-150", "2.0 HP", "150 m³/hr · 88 CFM", "-280 mbar", "280 mbar", "—", "24 kg"],
          ["SVBL-DS-150 V", "3.0 HP", "150 m³/hr · 88 CFM", "-330 mbar", "440 mbar", "66 dB", "27 kg"],
          ["SVBL-DS-230", "4.0 HP", "230 m³/hr · 135 CFM", "-340 mbar", "410 mbar", "72 dB", "39 kg"],
          ["SVBL-DS-230 P", "5.0 HP", "230 m³/hr · 135 CFM", "-390 mbar", "490 mbar", "72 dB", "45 kg"],
          ["SVBL-DS-320 V", "7.5 HP", "320 m³/hr · 188 CFM", "-440 mbar", "500 mbar", "73 dB", "70 kg"],
          ["SVBL-DS-320 P", "10 HP", "320 m³/hr · 188 CFM", "-440 mbar", "570 mbar", "73 dB", "77 kg"],
          ["SVBL-DS-520", "15 HP", "520 m³/hr · 317 CFM", "-430 mbar", "660 mbar", "74 dB", "123 kg"],
          ["SVBL-DS-1110 P", "27 HP", "1110 m³/hr · 653 CFM", "-440 mbar", "500 mbar", "74 dB", "204 kg"],
          ["SVBL-DS-1110 HP", "33 HP", "1110 m³/hr · 653 CFM", "-440 mbar", "590 mbar", "74 dB", "211 kg"],
          ["SVBL-DS-2050", "27 HP", "2050 m³/hr · 1206 CFM", "-250 mbar", "230 mbar", "75 dB", "230 kg"],
          ["SVBL-DS-2050 P", "33 HP", "2050 m³/hr · 1206 CFM", "-310 mbar", "280 mbar", "75 dB", "235 kg"],
        ],
        note: "Values are nominal. Please confirm your duty point with our team before ordering.",
      },
    ],
  },
  {
    slug: "oil-free-diaphragm-vacuum-pump",
    name: "Oil Free Diaphragm Vacuum Pump & Compressor",
    category: "oil-free",
    summary:
      "Completely oil-less diaphragm pumps with built-in motors — portable, quiet and chemical-resistant options.",
    highlights: [
      { label: "Flow", value: "10 – 75 LPM" },
      { label: "Vacuum", value: "Up to 27 inHg" },
      { label: "Pressure", value: "Up to 60 PSIG" },
    ],
    intro: [
      "Shenovac diaphragm vacuum pumps and compressors are completely oil-less, with a continuously rated built-in motor. They are preferred over sliding vane pumps and reciprocating piston compressors for their minimal maintenance and compact size.",
      "A motor-driven eccentric moves a flexible diaphragm up and down inside a sealed head. On the down-stroke the inlet valve opens and gas is drawn in; on the up-stroke it is pushed out through the outlet valve. Because the diaphragm isolates the gas from the mechanism, no oil ever touches the pumped medium.",
    ],
    features: [
      "No lubrication — completely oil-free",
      "Continuous-rated motor, single or three phase, 110 V / 220 V",
      "Portable and light — die-cast aluminium body",
      "Low noise level",
      "Teflon-coated or PP wetted parts for chemicals (C models)",
      "Double-head models connect in series or parallel",
      "Special diaphragms: Teflon-coated, Viton and more",
      "Stainless steel construction (SS 316 / 316L / 304) available",
      "Receivers, solenoid valves and fitments on demand",
    ],
    applications: [
      "Flame photometers & spectrophotometers",
      "Chemical & gas analysers",
      "Environmental & pollution monitoring",
      "Oxygen & ozone generators",
      "Nebulisers & respirators",
      "Dental equipment",
      "Vacuum filtration in labs",
      "Gold refining & jewellery machines",
      "De-soldering & wave soldering",
      "Labelling machines",
      "Gas charging in A/C",
      "Electroplating agitation",
    ],
    images: [
      "/images/products/diaphragm.png",
      "/images/products/diaphragm-2.png",
      "/images/about.png",
    ],
    specs: [
      {
        title: "SV Diaphragm Series",
        columns: [
          "Model",
          "Max Flow (LPM)",
          "Max Vacuum (inHg)",
          "Max Pressure (PSIG)",
          "Motor (HP)",
          "Dimensions (mm)",
        ],
        rows: [
          ["SV-10", "10", "20", "25", "1/25", "90 × 145 × 85"],
          ["SV-15", "15", "22", "25", "1/20", "175 × 110 × 150"],
          ["SV-25-S", "15", "26", "30", "1/16", "210 × 125 × 125"],
          ["SV-25-P", "25", "23", "20", "1/16", "210 × 125 × 125"],
          ["SV-25-C", "15", "22", "25", "1/16", "210 × 150 × 125"],
          ["SV-45", "45", "23", "40", "1/8", "200 × 130 × 200"],
          ["SV-45-C", "28", "22", "10", "1/8", "235 × 130 × 200"],
          ["SV-75-S", "45", "27", "60", "1/4", "300 × 130 × 200"],
          ["SV-75-P", "75", "23", "40", "1/4", "300 × 130 × 200"],
          ["SV-75-C", "38", "22", "10", "1/4", "300 × 150 × 200"],
        ],
        note: "S = series head, P = parallel head, C = chemical-resistant wetted parts.",
      },
    ],
  },
  {
    slug: "monoblock-vacuum-pump",
    name: "Monoblock Vacuum Pump",
    category: "oil-free",
    summary:
      "Compact monoblock pumps delivering 710 mm Hg for labs, suction machines and light industry.",
    highlights: [
      { label: "Displacement", value: "25 – 100 LPM" },
      { label: "Vacuum", value: "710 mm Hg" },
      { label: "Motor", value: "1/4 – 1/2 HP" },
    ],
    intro: [
      "Shenovac monoblock vacuum pumps are built in line with the latest technology, using only high-grade raw materials in accordance with industrial standards.",
      "The pump and motor form a single compact block, so there are no belts or couplings to align. The result is a light, space-saving unit that is quick to install and simple to service.",
    ],
    features: [
      "Pump and motor in one compact block",
      "No belts or couplings to maintain",
      "Light, portable and space-saving",
      "Quiet, low-vibration running",
      "High-grade materials, factory tested",
    ],
    applications: [
      "Laboratories & research centres",
      "Filtration",
      "Air-conditioning & refrigeration",
      "Suction machines",
      "Name plate making",
      "Label making",
    ],
    images: [
      "/images/products/monoblock-vacuum.png",
      "/images/products/monoblock-vacuum-2.png",
    ],
    specs: [SVMB_TABLE],
  },
  {
    slug: "laboratory-vacuum-pumps",
    name: "Laboratory Vacuum Pumps",
    category: "oil-free",
    summary:
      "Bench-top vacuum pumps for filtration, distillation, rotary evaporators and research work.",
    highlights: [
      { label: "Displacement", value: "25 – 500 LPM" },
      { label: "Types", value: "Rotary · Diaphragm" },
      { label: "Use", value: "Bench-top" },
    ],
    intro: [
      "Laboratories need vacuum that is clean, quiet and dependable. Shenovac laboratory vacuum pumps bring together our compact monoblock, direct drive rotary and oil-free diaphragm technologies so you can choose the right pump for each bench.",
      "For high vacuum work such as freeze drying or leak testing, our direct drive double stage pumps reach 0.002 mm Hg. For filtration, aspiration and solvent work, oil-free diaphragm pumps eliminate oil changes and contamination.",
    ],
    features: [
      "Compact footprint for bench use",
      "Low noise for shared lab spaces",
      "Oil-free options for clean vacuum",
      "High vacuum options to 0.002 mm Hg",
      "Chemical-resistant wetted parts available",
      "Accessories: traps, gauges, regulators",
    ],
    applications: [
      "Vacuum filtration",
      "Rotary evaporators",
      "Vacuum ovens & desiccators",
      "Freeze drying",
      "Distillation",
      "Gel drying & aspiration",
      "Teaching & research labs",
    ],
    images: ["/images/products/laboratory.png", "/images/about.png"],
    specs: [SVMB_TABLE],
    footnote:
      "Looking for higher vacuum? See our Direct Drive Rotary High Vacuum Pumps or Oil Free Diaphragm Pumps.",
  },
  {
    slug: "vacuum-impregnation-plants",
    name: "Vacuum Impregnation Plants",
    category: "systems",
    summary:
      "Double-chambered continuous impregnation plants from 30 to 1000 litres for motors, coils and transformers.",
    highlights: [
      { label: "Capacity", value: "30 – 1000 L" },
      { label: "Chambers", value: "Double" },
      { label: "Pump", value: "Shenovac 2-stage" },
    ],
    intro: [
      "These double-chambered continuous impregnation plants deliver high-quality impregnation much faster than conventional designs. Either chamber can be used for impregnation or as a storage tank, increasing capacity and saving time — effectively doing the job of a bigger plant.",
      "Tanks are fabricated from M.S. plate of suitable thickness with leak-proof lids and handles. Each tank has two viewing ports, a vacuum gauge, vacuum line valve and air leak valve; impregnant admittance, drain and inter-transfer valves sit at the bottom. The whole unit stands on an angle-iron frame for easy operation.",
      "A Shenovac double stage high vacuum pump is supplied with every plant. A liquid trap-cum-filter between pump and chambers prevents backflow of oil and impregnant if the pump stops suddenly. Thermostatically controlled heating can be added to drive out trapped gases and keep impregnant at the right viscosity.",
    ],
    features: [
      "Double chambers — impregnate and store alternately",
      "Two viewing ports per tank",
      "Vacuum gauge, line and air leak valves on each tank",
      "Liquid trap-cum-filter protects the pump",
      "Optional thermostatic heating",
      "Built-in jack system for heavy lids on large models",
    ],
    applications: [
      "Electric motor windings",
      "Transformer coils",
      "Armatures & stators",
      "Capacitors",
      "Castings (porosity sealing)",
      "Wood & composites",
    ],
    images: ["/images/products/impregnation-plant.png"],
    specs: [
      {
        title: "SV-IP Series",
        columns: [
          "Model",
          "Chamber Ø × H (mm)",
          "Capacity (L)",
          "Pump Model",
          "Pump F.A.D. (LPM)",
          "Pump (HP)",
        ],
        rows: [
          ["SV-IP-1", "300 × 400", "30", "SV-2-200", "200", "1"],
          ["SV-IP-2", "350 × 450", "50", "SV-2-200", "200", "1"],
          ["SV-IP-3", "400 × 500", "80", "SV-2-200", "200", "1"],
          ["SV-IP-4", "500 × 600", "120", "SV-2-300", "300", "1"],
          ["SV-IP-5", "550 × 650", "160", "SV-2-300", "300", "1"],
          ["SV-IP-6", "600 × 750", "200", "SV-2-500", "500", "2"],
          ["SV-IP-7", "750 × 1000", "440", "SV-2-800", "800", "3"],
          ["SV-IP-8", "1000 × 1250", "1000", "SV-2-1200", "1200", "3"],
        ],
        note: "Large models are fitted with a built-in jack system to lift and hold heavy lids aside.",
      },
    ],
  },
  {
    slug: "mechanical-booster",
    name: "Mechanical Booster Vacuum Pump",
    category: "systems",
    summary:
      "Roots-type boosters that multiply pumping speed of rotary and water ring backing pumps.",
    highlights: [
      { label: "Type", value: "Roots booster" },
      { label: "Backing", value: "Rotary / Water ring" },
      { label: "Benefit", value: "Higher speed" },
    ],
    intro: [
      "A mechanical (Roots) booster uses two lobed rotors spinning in opposite directions with fine clearances and no contact. Mounted ahead of a rotary vane or water ring backing pump, it dramatically increases pumping speed and improves ultimate vacuum in the medium vacuum range.",
      "Shenovac supplies boosters as complete, skid-mounted combinations matched to the right backing pump, with motor, guards, piping, valves and gauges — ready to connect to your process.",
    ],
    features: [
      "Large increase in pumping speed",
      "Faster pump-down times",
      "Improved ultimate vacuum",
      "Dry, contact-free rotors in the pumping chamber",
      "Matched with Shenovac backing pumps",
      "Supplied as skid-mounted systems",
    ],
    applications: [
      "Vacuum drying & degassing",
      "Transformer oil filtration",
      "Vacuum furnaces & heat treatment",
      "Freeze drying",
      "Vacuum distillation",
      "Coating & metallising",
    ],
    images: ["/images/products/mechanical-booster.png"],
    footnote:
      "Booster systems are sized to your process. Share your chamber volume, target vacuum and pump-down time, and we'll recommend a combination.",
  },
  {
    slug: "high-vacuum-pump-plants-systems",
    name: "High Vacuum Pump Plants & Systems",
    category: "systems",
    summary:
      "Complete, skid-mounted vacuum systems built around Shenovac pumps — engineered to your process.",
    highlights: [
      { label: "Build", value: "Skid-mounted" },
      { label: "Scope", value: "Design to commissioning" },
      { label: "Pumps", value: "Rotary · Water ring · Booster" },
    ],
    intro: [
      "Many processes need more than a pump. Shenovac designs and builds complete high vacuum plants and systems — pumps, motors, receivers, condensers, traps, filters, valves, gauges and controls — integrated on a single frame and tested at our works.",
      "We start from your requirement: chamber volume, gas load, vapour content, target vacuum and duty cycle. From there we select the right combination of rotary vane, water ring and booster pumps and deliver a system that is ready to connect.",
    ],
    features: [
      "Application-specific engineering",
      "Pumps, traps, condensers and receivers integrated",
      "Mobile trolley or fixed skid options",
      "Gauges, valves and controls fitted",
      "Factory tested before dispatch",
      "Commissioning and after-sales support",
    ],
    applications: [
      "Transformer & oil processing",
      "Vacuum drying ovens",
      "Central vacuum for plants",
      "Pharma reactors & dryers",
      "Degassing of resins & oils",
      "Refrigeration production lines",
    ],
    images: [
      "/images/products/plants-systems.png",
      "/images/products/plants-systems-2.png",
      "/images/products/plants-systems-3.png",
    ],
    footnote:
      "Every system is custom. Send us your requirement for a proposal and drawing.",
  },
  {
    slug: "vacuum-pump-accessories-components",
    name: "Vacuum Pump Accessories & Components",
    category: "accessories",
    summary:
      "Gauges, valves, traps, filters, tubes, seals and vanes to complete and maintain your vacuum line.",
    highlights: [
      { label: "Gauges", value: "Dial · Pirani" },
      { label: "Valves", value: "NRV · Regulator" },
      { label: "Spares", value: "Seals · Vanes" },
    ],
    intro: [
      "The right accessories protect your pump and give you control over your process. Shenovac supplies a full range of vacuum components, tested for compatibility with our pumps and suitable for most other makes.",
    ],
    features: [
      "Dial type vacuum gauges",
      "Digital Pirani vacuum gauges",
      "Analog Pirani vacuum gauges",
      "Non-return valves (NRV)",
      "Release valves (regulators)",
      "Vacuum tubes and pipes",
      "Vacuum / air filters",
      "Oil seals",
      "Vacuum flasks (jars)",
      "Moisture traps",
      "Vanes for rotary pumps",
    ],
    applications: [
      "Measuring and controlling vacuum",
      "Protecting pumps from moisture and debris",
      "Preventing oil suck-back",
      "Routine maintenance & overhaul",
    ],
    images: [
      "/images/products/accessories.png",
      "/images/products/accessories-2.png",
      "/images/products/accessories-3.png",
      "/images/products/accessories-4.png",
      "/images/products/accessories-5.png",
      "/images/products/accessories-6.png",
    ],
  },
  {
    slug: "imported-vacuum-pump-spare-parts",
    name: "Imported Vacuum Pump Spare Parts",
    category: "accessories",
    summary:
      "Spares, repairs and overhauls for imported and locally made vacuum pumps.",
    highlights: [
      { label: "Service", value: "Repair & overhaul" },
      { label: "Makes", value: "Imported & local" },
      { label: "Parts", value: "Vanes · Seals · Kits" },
    ],
    intro: [
      "Downtime on an imported pump can be costly when spares are hard to source. Shenovac supplies spare parts for a wide range of imported vacuum pumps and takes up repair of any type of local or imported pump.",
      "Our technicians overhaul pumps with precision so they return to efficient, trouble-free service — often at a fraction of the cost and lead time of a replacement.",
    ],
    features: [
      "Vanes, seals and gasket kits",
      "Rotors, bearings and couplings",
      "Exhaust filters and oil mist eliminators",
      "Complete overhaul kits",
      "Repair of local and imported pumps",
      "Performance testing after repair",
    ],
    applications: [
      "Planned maintenance",
      "Breakdown repairs",
      "Performance restoration",
      "Spare stock for critical pumps",
    ],
    images: [
      "/images/products/accessories-4.png",
      "/images/products/accessories-5.png",
    ],
    footnote:
      "Send us the make, model and nameplate photo of your pump and we'll confirm part availability.",
  },
  {
    slug: "vacuum-pump-oil",
    name: "Vacuum Pump Oil",
    category: "accessories",
    summary:
      "Low vapour pressure mineral oil formulated for rotary vane high vacuum pumps.",
    highlights: [
      { label: "Base", value: "Refined mineral" },
      { label: "For", value: "Rotary vane pumps" },
      { label: "Benefit", value: "Deeper vacuum" },
    ],
    intro: [
      "The oil in a rotary vane pump seals, lubricates and cools — so its quality directly decides the vacuum you can reach and how long your pump lasts.",
      "Shenovac vacuum pump oil is a highly refined mineral oil with low vapour pressure, good thermal stability and resistance to emulsification. It is the recommended oil for all Shenovac rotary high vacuum pumps and suits most other makes.",
    ],
    features: [
      "Low vapour pressure for deeper ultimate vacuum",
      "High thermal and oxidation stability",
      "Resists emulsification with moisture",
      "Reduces wear on vanes and rotors",
      "Clean, low-foam formulation",
      "Available in multiple pack sizes",
    ],
    applications: [
      "Oil sealed rotary high vacuum pumps",
      "Direct drive rotary pumps",
      "Rotary vacuum pressure pumps",
      "Refrigeration & A/C service pumps",
    ],
    images: [
      "/images/products/pump-oil.png",
      "/images/products/pump-oil-2.png",
    ],
    footnote:
      "Tip: change oil regularly and whenever it turns cloudy or dark to maintain performance.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function productsIn(id: CategoryId) {
  return products.filter((p) => p.category === id);
}
