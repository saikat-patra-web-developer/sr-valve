// Company information from Doc/About Us.docx and Doc/Contact Info.docx
export const companyData = {
  name: "SSPR Valve Manufacturing Private Limited",
  tagline: "Flowing a Stronger Tomorrow",
  established: "2009",
  experienceYears: "15+",
  md: {
    name: "Mr. Prasenjit Dey",
    designation: "Managing Director",
    company: "SSPR Valve Manufacturing Private Limited",
    image: "/images/about/md_prasenjit_dey.png",
    signatureText: "Building A Better Tomorrow",
    message:
      "I am pleased to welcome you to the SSPR Valve website. Whether you're a potential customer with a challenging project ahead; an existing customer checking up on our latest news; or a partner, supplier or future employee looking for new opportunities, I trust you'll find what you're looking for here. SSPR Valve Manufacturing Private Limited is a company that is Driving Progress and, with our customers and partners, building better communities through safe, smart, efficient infrastructure. Something we have been doing consistently. Our progressive thinking and creative approach is what makes us stand out from the crowd allowing us to achieve what very few have been able to manage. We have a clear vision of what we want to be - leaders in Valve manufacturing and infrastructure development; and we guide our business using five core values - lead, grow, deliver, sustain and protect. I'm proud of the work we do and give you my personal commitment that we will deliver what we promise and do it safely and sustainably.",
    highlightQuote: "Reliable Flow for a Brighter Tomorrow",
    shortQuote:
      "At SSPR Valve, we believe in engineering solutions that make a real difference. Our focus has always been on quality, reliability and long-term value for our customers. With a dedicated team, modern technology and a strong ethical foundation, we continue to work towards a safer and more sustainable future.",
  },
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
  stats: [
    { value: "15+", label: "Years Experience", sublabel: "Trusted Expertise" },
    { value: "ISO Certified", label: "9001, 14001, 45001", sublabel: "Quality Assured" },
    { value: "Pan India", label: "Govt & Private Supply", sublabel: "National Presence" },
    { value: "Howrah (WB)", label: "Manufacturing Unit", sublabel: "Proudly Indian" },
  ],
  keyMetrics: [
    { value: "20+", label: "Modern Machines", desc: "Advanced manufacturing equipment" },
    { value: "100%", label: "Quality Inspection", desc: "Stringent testing at every stage" },
    { value: "100+", label: "Experienced Team", desc: "Engineers, technicians and skilled workforce" },
    { value: "500+", label: "Projects Delivered", desc: "Trusted by customers globally" },
  ],
  timeline: [
    {
      year: "2009",
      title: "The Beginning",
      desc: "Started our manufacturing journey with a vision to serve India's critical infrastructure needs.",
    },
    {
      year: "2012",
      title: "Expanded Capabilities",
      desc: "Invested in modern machinery and skilled team to enhance production capacity.",
    },
    {
      year: "2016",
      title: "Broader Markets",
      desc: "Began supplying to major government and private projects across India.",
    },
    {
      year: "2019",
      title: "Growing Trust",
      desc: "Strengthened our customer base through consistent quality and on-time delivery.",
    },
    {
      year: "2022",
      title: "Advanced Infrastructure",
      desc: "Upgraded facilities with latest technology for enhanced precision and efficiency.",
    },
    {
      year: "Today",
      title: "A Stronger Tomorrow",
      desc: "Continuing to innovate and serve with a focus on a sustainable, water-secure future.",
    },
  ],
  sectors: [
    { name: "Water Treatment Plants", desc: "Reliable solutions for municipal and industrial clean water distribution." },
    { name: "Irrigation Projects", desc: "Efficient flow control systems supporting agricultural growth across states." },
    { name: "Desalination Plants", desc: "Corrosion-resistant high pressure valves for marine water conversion." },
    { name: "Civil Construction", desc: "Heavy-duty valves for dams, channels, reservoirs, and urban plumbing." },
    { name: "Sea Water Applications", desc: "Special metallurgy valves engineered to resist aggressive saline corrosion." },
    { name: "Infrastructure Projects", desc: "Robust valve systems for highways, energy hubs, and smart city networks." },
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
