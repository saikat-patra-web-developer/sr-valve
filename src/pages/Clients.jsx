import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import ResponsiveImage from '../components/ResponsiveImage'
import { clientData } from '../data/clientData'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

export default function Clients() {
  useEffect(() => {
    document.title = 'Clients | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-clients">
      {/* 1. HERO BANNER */}
      <PageHero type="clients" />

      {/* 2. STATIC CLIENTS GRID (8 IMAGES IN 2 ROWS) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f37021] tracking-[0.2em] uppercase block mb-1">
              ESTEEMED CLIENTELE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d2857]">
              Trusted by <span className="text-[#f37021]">Leading Organizations</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              Proud to manufacture and supply high-performance valves for India's major water supply, irrigation, and municipal infrastructure projects.
            </p>
          </FadeIn>

          {/* Static organization logo grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {clientData.map((client) => (
              <StaggerItem
                key={client.id}
                hoverEffect={true}
                className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-full h-28 sm:h-32 flex items-center justify-center rounded-lg bg-white p-3 shadow-xs border border-slate-100 group-hover:scale-[1.03] transition-transform duration-300">
                  <ResponsiveImage
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter contrast-105"
                    sizes="120px"
                  />
                </div>
                <h3 className="mt-4 text-xs sm:text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors leading-snug line-clamp-2">
                  {client.name}
                </h3>
                <span className="mt-1 text-[11px] font-semibold text-blue-700">
                  {client.shortName}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {client.state}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>
    </div>
  )
}
