export const site = {
  name: "Shenovac Engineers",
  shortName: "Shenovac",
  url: "https://www.shenovacengineers.com",
  tagline: "Vacuum Technology, Engineered in India Since 1990",
  description:
    "Shenovac Engineers is an ISO 9001:2015 certified manufacturer, exporter and supplier of oil sealed rotary high vacuum pumps, water ring vacuum pumps, side channel blowers, diaphragm pumps, vacuum impregnation plants and vacuum accessories — based in New Delhi, India.",
  established: 1990,
  certification: "ISO 9001:2015",
  certificateNumber: "303030718",
  ceo: "Mr. Ashok Kumar",
  ceoTitle: "CEO & Technical Director",
  employees: "10–15",
  warrantyMonths: 12,
  customers: "1000+",
  headOffice:
    "2/3, New Daya Basti, Anand Parbat Industrial Area, New Rohtak Road, New Delhi – 110005",
  works: "D-133, Sector-5, Bawana Industrial Area, Delhi – 110039",
  phones: [
    { label: "Adarsh Kumar", number: "+91 98183 47008", tel: "+919818347008" },
    { label: "Ashok Kumar", number: "+91 98104 80220", tel: "+919810480220" },
  ],
  emails: ["info@shenovacengineers.com", "shenovacpumps@yahoo.in"],
  whatsapp: "919818347008",
  hours: "Mon – Sat, 9:30 AM – 6:30 PM",
  mapQuery: "Anand Parbat Industrial Area, New Rohtak Road, New Delhi 110005",
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Company Profile", href: "/company-profile" },
      { label: "Quality Assurance", href: "/quality" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const clients = [
  { name: "NTPC", logo: "/images/clients/ntpc.png" },
  { name: "HMEL", logo: "/images/clients/hmel.png" },
  { name: "JSW", logo: "/images/clients/jsw.png" },
  { name: "BHEL", logo: "/images/clients/bhel.png" },
  { name: "Aditya Birla", logo: "/images/clients/aditya.png" },
  { name: "Himalaya", logo: "/images/clients/himalaya.png" },
  { name: "Parle", logo: "/images/clients/parle.png" },
  { name: "Tata", logo: "/images/clients/tata.png" },
  { name: "Dabur", logo: "/images/clients/dabur.png" },
  { name: "Saint-Gobain", logo: "/images/clients/gobain.png" },
  { name: "AIS", logo: "/images/clients/ais.png" },
  { name: "Dairy", logo: "/images/clients/dairy.png" },
  { name: "SRF", logo: "/images/clients/srf.png" },
  { name: "Mankind", logo: "/images/clients/mankind.png" },
  { name: "Essar", logo: "/images/clients/essar.png" },
  { name: "Patanjali", logo: "/images/clients/patanjali.png" },
  { name: "Pentair", logo: "/images/clients/pentair.png" },
  { name: "Reliance", logo: "/images/clients/reliance.png" },
];

export const industries = [
  {
    name: "Pharmaceuticals",
    icon: "flask",
    text: "Distillation, drying, filtration and solvent recovery under controlled vacuum.",
  },
  {
    name: "Chemicals & Refining",
    icon: "beaker",
    text: "Corrosion-resistant liquid ring pumps in SS-304/316 for aggressive vapours.",
  },
  {
    name: "Power Plants",
    icon: "bolt",
    text: "Condenser exhausting, priming and vacuum service for thermal stations.",
  },
  {
    name: "Food & Dairy",
    icon: "leaf",
    text: "Vacuum packing, bottle filling, evaporation and de-aeration lines.",
  },
  {
    name: "Plastics & Packaging",
    icon: "box",
    text: "Vacuum forming, blister packing, extrusion and conveying.",
  },
  {
    name: "Electrical & Transformers",
    icon: "cpu",
    text: "Vacuum impregnation of windings, motors and transformer coils.",
  },
  {
    name: "Textiles & Printing",
    icon: "layers",
    text: "Web printing, paper feeding, garment vacuum tables and dryers.",
  },
  {
    name: "Laboratories & R&D",
    icon: "microscope",
    text: "Compact, oil-free and direct-drive pumps for research benches.",
  },
  {
    name: "Refrigeration & HVAC",
    icon: "snow",
    text: "Evacuation and gas charging of A/C and refrigeration systems.",
  },
  {
    name: "Sugar, Cement & Fertilizer",
    icon: "factory",
    text: "Heavy-duty water ring pumps for filtration and process vacuum.",
  },
  {
    name: "Breweries & Distilleries",
    icon: "drop",
    text: "Solvent and vapour recovery with saturated gas handling.",
  },
  {
    name: "Electroplating",
    icon: "spark",
    text: "Oil-free blowers and compressors for tank agitation.",
  },
];
