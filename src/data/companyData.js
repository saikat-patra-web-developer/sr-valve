// Company information from Doc/About Us.docx and Doc/Contact Info.docx
export const companyData = {
  contact: {
    address: "ONGC Road, Dakshin Jhapordha, Domjur, Howrah – 711405, West Bengal, India.",
    email: "info@ssprvalve.com",
    phone: "+91 7044090444",
    hours: "Mon – Sat, 09:00am – 06:00pm",
    closedNotice: "We are closed on Sundays and public holidays.",
  },
  certifications: [
    { code: "ISO 9001:2015", label: "Valid to 10 June 2027", image: "/images/certifications/badge_iso9001.webp", document: "/downloads/SSPR ISO upto 11.05.2027.pdf" },
    { code: "ISO 14001:2015", label: "Valid to 16 April 2028", image: "/images/certifications/badge_iso14001.webp", document: "/downloads/ISO 14001 - Upto 16.04.2028.pdf" },
    { code: "ISO 45001:2018", label: "Valid to 16 April 2028", image: "/images/certifications/badge_iso45001.webp", document: "/downloads/ISO 45001 - Upto 16.04.2028.pdf" },
  ],
  keyMetrics: [
    { value: "20+", label: "Modern Machines", desc: "Advanced manufacturing equipment" },
    { value: "100%", label: "Quality Inspection", desc: "Stringent testing at every stage" },
    { value: "100+", label: "Experienced Team", desc: "Engineers, technicians and skilled workforce" },
    { value: "500+", label: "Projects Delivered", desc: "Trusted by customers globally" },
  ],
  capabilities: [
    {
      id: "machinery",
      title: "Plant & Machinery",
      desc: "CNC machines, VMCs, lathes and specialized equipment for high-precision manufacturing.",
      image: "/images/infra/projects/industrial-valve-installation.webp",
    },
    {
      id: "testing",
      title: "Testing Facilities",
      desc: "Hydrostatic, pneumatic, NDT and performance testing to ensure norms and specifications on quality.",
      image: "/images/infra/projects/installed-butterfly-valves.webp",
    },
    {
      id: "quality",
      title: "Quality Control",
      desc: "In-house inspection and with stringent systems to ensure consistent outcomes.",
      image: "/images/infra/projects/control-room.webp",
    },
    {
      id: "fabrication",
      title: "Fabrication / Machining / Assembly",
      desc: "End-to-end manufacturing from raw material to final assembly under one roof.",
      image: "/images/infra/projects/pipeline-valves-site.webp",
    },
    {
      id: "workforce",
      title: "Skilled Workforce",
      desc: "A dedicated team of experienced engineers, technicians and craftsmen driving excellence.",
      image: "/images/infra/projects/treatment-plant-pump-house.webp",
    },
    {
      id: "rnd",
      title: "R&D / Engineering Support",
      desc: "Continuous innovation, product development and customised solutions for evolving industry needs.",
      image: "/images/infra/projects/clarifier-installation.webp",
    },
  ],
  processSteps: [
    { step: "01", title: "Design & Engineering", desc: "Agile analysis and customized CAD/CAM design" },
    { step: "02", title: "Material Selection", desc: "High-grade raw materials with mill test certification" },
    { step: "03", title: "Machining", desc: "Precision machining with advanced equipment" },
    { step: "04", title: "Assembly", desc: "Skilled assembly with strict process control" },
    { step: "05", title: "Testing & Inspection", desc: "Multiple testing procedures for assured performance" },
    { step: "06", title: "Dispatch", desc: "Secure packaging and on-time delivery globally" },
  ],
  facilityGallery: [
    { title: "Water Treatment Basins", image: "/images/infra/projects/water-treatment-basins.webp" },
    { title: "Clarifier Installation", image: "/images/infra/projects/clarifier-installation.webp" },
    { title: "Pipeline Valve Installation", image: "/images/infra/projects/pipeline-valves-site.webp" },
    { title: "Installed Butterfly Valves", image: "/images/infra/projects/installed-butterfly-valves.webp" },
    { title: "Treatment Plant Overview", image: "/images/infra/projects/treatment-plant-overview.webp" },
  ],
}
