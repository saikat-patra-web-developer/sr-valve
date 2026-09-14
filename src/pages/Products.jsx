import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Sprout, Building, Cpu, Landmark, FlaskConical, PhoneCall, Ruler, Gauge, PackageCheck } from 'lucide-react'
import ResponsiveImage from '../components/ResponsiveImage'
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

      {/* PRODUCT CATALOGUE */}
      <section className="py-12 sm:py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.22em] uppercase">Engineered flow-control solutions</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0d2857]">
                Our Product <span className="text-[#f37021]">Range</span>
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-2xl leading-6">
                Explore our complete approved range of industrial valves, available in multiple configurations, sizes and pressure ratings for demanding water and infrastructure applications.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              Showing {productsData.length} Products
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {productsData.map((product) => (
              <article key={product.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col sm:flex-row min-w-0">
                <Link to={`/products/${product.id}`} className="relative sm:w-[43%] min-h-[280px] sm:min-h-full bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6 overflow-hidden shrink-0">
                  <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold tracking-[0.16em] text-[#0d2857] bg-white/90 border border-slate-200 rounded-full px-3 py-1.5">{product.tag}</span>
                  <ResponsiveImage src={product.image} alt={product.fullName} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw" loading="lazy" className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500" />
                </Link>

                <div className="p-5 sm:p-6 flex flex-col flex-1 min-w-0">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#f37021]">{product.category}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0d2857] leading-tight">{product.fullName}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-6">{product.shortDesc}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                      <Ruler className="w-4 h-4 text-[#f37021] mb-2" />
                      <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Size range</span>
                      <span className="block mt-1 text-xs font-bold text-[#0d2857] leading-snug">{product.quickSpecs.sizeRange}</span>
                    </div>
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                      <Gauge className="w-4 h-4 text-[#f37021] mb-2" />
                      <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Pressure rating</span>
                      <span className="block mt-1 text-xs font-bold text-[#0d2857] leading-snug line-clamp-2">{product.quickSpecs.pressureRating}</span>
                    </div>
                  </div>

                  {product.thumbnails?.length > 1 && (
                    <div className="mt-4">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Available configurations</span>
                      <div className="mt-2 flex gap-2">
                        {product.thumbnails.slice(0, 4).map((image, index) => (
                          <div key={image} className="w-12 h-12 rounded-lg border border-slate-200 bg-white p-1.5 overflow-hidden">
                            <ResponsiveImage src={image} alt={`${product.name} configuration ${index + 1}`} sizes="48px" loading="lazy" className="w-full h-full object-contain" />
                          </div>
                        ))}
                        {product.thumbnails.length > 4 && <span className="w-12 h-12 rounded-lg bg-[#0d2857] text-white text-xs font-bold flex items-center justify-center">+{product.thumbnails.length - 4}</span>}
                      </div>
                    </div>
                  )}

                  <Link to={`/products/${product.id}`} className="mt-5 inline-flex items-center justify-center gap-2 bg-[#0d2857] hover:bg-[#f37021] text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm">
                    View Product Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
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
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-10">
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
              <PackageCheck className="w-7 h-7 text-amber-400 mx-auto mb-3" />
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
