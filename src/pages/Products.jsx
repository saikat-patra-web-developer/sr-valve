import PageHero from '../components/PageHero'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Sprout, Building, Cpu, Landmark, FlaskConical, PhoneCall } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { productsData } from '../data/productsData'

export default function Products() {
  const industries = [
    {
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      title: "Water Supply",
      desc: "Reliable solutions for clean water distribution.",
    },
    {
      icon: <Sprout className="w-6 h-6 text-blue-600" />,
      title: "Irrigation",
      desc: "Efficient flow control for agricultural growth.",
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: "Infrastructure",
      desc: "Supporting nations with durable infrastructure.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "Industrial Systems",
      desc: "Trusted performance in demanding industrial environments.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-blue-600" />,
      title: "Municipal Projects",
      desc: "Solutions for smarter, cleaner cities.",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      title: "Process Industries",
      desc: "Custom-engineered valves for specialized process needs.",
    },
  ]

  return (
    <div className="site-page page-products">
      
      {/* 1. HERO BANNER */}
      <PageHero type="products" />

      {/* PRODUCT GRID */}
      <section className="py-5 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0d2857]">
                Our Product <span className="text-[#f37021]">Range</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Engineered valves and flow control solutions for real-world applications.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              Showing {productsData.length} Products
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {productsData.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>

        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-5 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857]">
                Industries <span className="text-[#f37021]">We Serve</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Our valves are trusted across critical sectors, helping build a stronger and more sustainable tomorrow.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d2857] hover:text-[#f37021] transition-colors cursor-pointer"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-md border border-slate-200 text-center hover:border-blue-400 hover:shadow-sm transition-all flex flex-col items-center justify-center group"
              >
                <div className="p-3 rounded-md bg-white shadow-2xs group-hover:scale-110 transition-transform mb-3">
                  {ind.icon}
                </div>
                <h4 className="text-xs font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors line-clamp-1">
                  {ind.title}
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEED A CUSTOM VALVE SOLUTION BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need a Custom Valve Solution?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Our expert team can design and manufacture valves as per your specific requirements. Get in touch for technical support, product selection or custom manufacturing enquiries.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+917044090444"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-lg border border-white/20 transition-colors text-xs sm:text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Talk to Our Experts</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-5 rounded-md border border-white/15 backdrop-blur-xs text-center">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                ENGINEERED FOR REAL-WORLD CHALLENGES
              </span>
              <p className="text-[11px] text-slate-300">
                Complete setup of system monitoring & control for PHED, water distribution, irrigation & heavy process valves.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
