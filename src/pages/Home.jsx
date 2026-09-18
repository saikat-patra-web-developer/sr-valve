import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, Wrench, Headphones, CheckCircle2, Check } from 'lucide-react'
import { motion } from 'motion/react'
import ProductCard from '../components/ProductCard'
import ClientsSection from '../components/ClientsSection'
import CertificationsStrip from '../components/CertificationsStrip'
import InfrastructureStrip from '../components/InfrastructureStrip'
import ResponsiveImage from '../components/ResponsiveImage'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { productsData } from '../data/productsData'

export default function Home() {
  const coreProducts = productsData

  const whyChooseItems = [
    {
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      title: "In-House Manufacturing",
      desc: "Complete manufacturing under one roof with advanced machinery, supervised by qualified and experienced engineers.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "In-House Testing Facility",
      desc: "Our in-house BIS-approved laboratory tests raw materials and helps us maintain consistent product quality.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Certified Systems",
      desc: "Certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 standards.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      title: "Customer Support",
      desc: "Our relationship continues after the sale. Our technical team coordinates with site engineers throughout the project.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "On-Time Delivery",
      desc: "We recognize that dependable, on-time delivery directly supports customer satisfaction and project success.",
    },
  ]

  const mobileWhyChooseItems = [
    { icon: <Wrench />, title: 'Quality Manufacturing', desc: 'Compliant with international standards.' },
    { icon: <CheckCircle2 />, title: 'Innovative Design', desc: 'Valves engineered for reliability.' },
    { icon: <ShieldCheck />, title: 'Global Presence', desc: 'Trusted by clients in multiple countries.' },
    { icon: <Headphones />, title: 'Customer Support', desc: 'Dedicated support for your needs.' },
    { icon: <Clock />, title: 'Cost-Effective', desc: 'High performance at competitive pricing.' },
  ]

  return (
    <div className="site-page page-home">
      
      {/* 1. HERO SECTION */}
      <PageHero type="home" />

      {/* 2. OUR CORE PRODUCT RANGE */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857]">
                Our Core <span className="text-[#f37021]">Product Range</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Robust, Reliable. Built for Real-World Applications.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="home-products grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {coreProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. WHY CHOOSE SSPR VALVE */}
      <section className="py-5 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                ENGINEERING EXCELLENCE IN EVERY FLOW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Why Choose <span className="text-[#f37021]">SSPR Valve</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="why-grid desktop-why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {whyChooseItems.map((item, idx) => (
              <StaggerItem
                key={idx}
                hoverEffect={true}
                className="bg-white p-4 rounded-md border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col items-start gap-2 sm:max-lg:[&:last-child]:col-span-2"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0d2857]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mobile-why-grid" aria-label="Why choose SSPR Valve">
            {mobileWhyChooseItems.map((item) => (
              <StaggerItem key={item.title} as="div">
                <span>{item.icon}</span>
                <div><h4>{item.title}</h4><p>{item.desc}</p></div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 4. TRUSTED BY LEADING ORGANIZATIONS */}
      <ClientsSection subtitle="POWERING NATION BUILDING TOGETHER" />

      {/* 5. ABOUT SSPR VALVE SPLIT SECTION */}
      <section className="home-about-section py-5 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="home-about-panel">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Facility Image (4 cols) */}
              <FadeIn direction="right" className="lg:col-span-4 relative rounded-md overflow-hidden border border-slate-200 shadow-xs group">
                <ResponsiveImage
                  src="/images/hero/factory-client.webp"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  alt="Our Facility - Howrah, West Bengal"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3 text-white">
                  <span className="text-[11px] font-bold block">Our Facility</span>
                  <span className="text-[10px] text-slate-300 block">Howrah, West Bengal</span>
                </div>
              </FadeIn>

              {/* Middle: Content (5 cols) */}
              <FadeIn direction="up" delay={0.1} className="lg:col-span-5 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2857] mt-1 leading-tight">
                    SSPR Valve Manufacturing Private Limited
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  With over 15 years of experience, SSPR Valve manufactures a wide range of industrial valves and penstocks at its state-of-the-art facility in Howrah, West Bengal. We combine modern technology with the technical expertise of our engineering team to deliver reliable, high-quality products.
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the leadership of <strong className="text-[#0d2857]">Mr. Prasenjit Dey, Managing Director</strong>, we supply government and private projects across India. Our commitment to quality and ethical business practices is supported by ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certifications, along with NSIC and MSME registrations.
                </p>

                <div className="pt-2">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 bg-[#0d2857] hover:bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                    >
                      <span>Know More About Us</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </FadeIn>

              {/* Right: Key Highlights (3 cols) */}
              <FadeIn direction="left" delay={0.15} className="lg:col-span-3 bg-slate-50/80 rounded-md p-4 border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-bold text-[#0d2857] uppercase tracking-wider border-b border-slate-200 pb-2">
                  Key Strengths
                </h4>
                
                {[
                  "15+ Years of Manufacturing Experience",
                  "Modern Technology & Engineering Expertise",
                  "ISO, NSIC & MSME Credentials",
                  "Quality & Ethical Business Practices",
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                    Serving Critical Sectors
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Water Treatment | Irrigation | Desalination & DM Water | Civil Construction | Sea Water | PHED Monitoring & Control
                  </p>
                </div>
              </FadeIn>

            </div>
          </div>

        </div>
      </section>

      {/* 6. CERTIFICATIONS & REGISTRATIONS */}
      <CertificationsStrip showQualityBanner={true} />

      {/* 7. OUR INFRASTRUCTURE (4 CARDS) */}
      <InfrastructureStrip />

      {/* 8. CUSTOM VALVE REQUIREMENT CTA BANNER */}
      <FadeIn direction="up" as="section" className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Have a Custom Valve Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Our team is ready to provide the right flow control solution for your project.
              </p>
            </div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </FadeIn>

    </div>
  )
}

