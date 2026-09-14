import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

export default function InfrastructureStrip() {
  const infraItems = [
    {
      title: "Industrial Valve Installation",
      desc: "Heavy-duty valve systems installed for critical water infrastructure.",
      image: "/images/infra/projects/industrial-valve-installation.webp",
    },
    {
      title: "Installed Valve Systems",
      desc: "Field-proven flow-control equipment operating at project sites.",
      image: "/images/infra/projects/installed-butterfly-valves.webp",
    },
    {
      title: "Pump House Equipment",
      desc: "Reliable pumping and pipeline equipment for continuous operation.",
      image: "/images/infra/projects/treatment-plant-pump-house.webp",
    },
    {
      title: "Plant Control Room",
      desc: "Integrated electrical controls supporting treatment operations.",
      image: "/images/infra/projects/control-room.webp",
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
        <div className="infrastructure-showcase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infraItems.map((item, index) => (
            <Link
              key={index}
              to="/infrastructure"
              className="infra-showcase-card group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="infra-showcase-image w-full overflow-hidden bg-slate-100 relative">
                <ResponsiveImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061f4f]/95 via-[#08275d]/30 to-transparent" />
              </div>
              <div className="infra-showcase-copy absolute inset-x-0 bottom-0 p-5 text-white">
                <div>
                  <h4 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-blue-50/90 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-amber-300 mt-3 inline-flex items-center gap-1.5">
                  Explore Infrastructure <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
