import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function InfrastructureStrip() {
  const infraItems = [
    {
      title: "Plant & Machinery",
      desc: "Modern equipment for high-precision manufacturing.",
      image: "/images/infra/home_machinery.png",
    },
    {
      title: "Testing Facilities",
      desc: "Comprehensive testing for assured quality.",
      image: "/images/infra/home_testing.png",
    },
    {
      title: "Skilled Team",
      desc: "Experienced professionals driving excellence.",
      image: "/images/infra/home_team.png",
    },
    {
      title: "Manufacturing Process",
      desc: "Streamlined and quality-driven production.",
      image: "/images/infra/home_process.png",
    },
  ]

  return (
    <section className="infrastructure-strip py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-slate-100 gap-2">
          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              BUILT FOR PRECISION, EQUIPPED FOR THE FUTURE.
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Our <span className="text-[#f37021]">Infrastructure</span>
            </h2>
          </div>
          <Link
            to="/infrastructure"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d2857] hover:text-[#f37021] transition-colors cursor-pointer"
          >
            <span>Explore Facilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infraItems.map((item, index) => (
            <Link
              key={index}
              to="/infrastructure"
              className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col cursor-pointer"
            >
              <div className="h-36 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
