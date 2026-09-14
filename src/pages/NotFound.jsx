import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Building, ShieldCheck, PhoneCall, HelpCircle, Mail, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { productsData } from '../data/productsData'
import { companyData } from '../data/companyData'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | SSPR Valve Manufacturing Private Limited'
  }, [])

  const quickLinks = [
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: 'Our Products',
      desc: 'Browse our complete catalog of sluice, butterfly, non-return, and kinetic air valves.',
      to: '/products',
      cta: 'View Catalog',
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: 'About Company',
      desc: 'Learn about our 15+ years of valve manufacturing experience and leadership.',
      to: '/about',
      cta: 'About SSPR Valve',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      title: 'Infrastructure',
      desc: 'Explore our modern Howrah manufacturing plant, CNC machines, and testing bays.',
      to: '/infrastructure',
      cta: 'Explore Facilities',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Certifications',
      desc: 'View our ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 accreditations.',
      to: '/certifications',
      cta: 'View Standards',
    },
  ]

  return (
    <div className="site-page page-not-found">
      {/* 1. HERO BANNER */}
      <PageHero type="notFound" />

      {/* 2. SUGGESTED SECTIONS */}
      <section className="py-5 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                HELPFUL NAVIGATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Where Would You <span className="text-[#f37021]">Like to Go?</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Explore key areas of our website to find what you are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="group bg-slate-50 p-5 rounded-md border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-lg bg-white shadow-2xs w-fit mb-3 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-[#f37021] transition-colors">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PRODUCTS SHOWCASE */}
      <section className="py-5 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                EXPLORE OUR PRODUCTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857]">
                Our Core <span className="text-[#f37021]">Product Range</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Engineered for water, irrigation, desalination and critical infrastructure applications.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d2857] hover:text-[#f37021] transition-colors cursor-pointer shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRECT CONTACT HELP BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Need Help Finding a Specific Valve Specification?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Our technical engineering team in Howrah is ready to provide datasheets, tender documentation, and quotation support for your project requirements.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-lg border border-white/20 transition-colors text-xs sm:text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>{companyData.contact.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-4 rounded-md border border-white/15 backdrop-blur-xs space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Direct Contact
              </span>
              <div className="text-xs text-slate-200 space-y-1.5">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Howrah, West Bengal, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
