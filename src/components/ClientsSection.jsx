import React from 'react'
import { clientData } from '../data/clientData'
import ResponsiveImage from './ResponsiveImage'

export default function ClientsSection({ subtitle = "POWERING NATION BUILDING TOGETHER" }) {
  const carouselClients = [...clientData, ...clientData]

  return (
    <section className="clients-section py-4 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 pb-4 border-b border-slate-100 gap-2">
          <div>
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase block">
              {subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Trusted by <span className="text-[#f37021]">Leading Organizations</span>
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Supplying critical valves for premier central and state government infrastructure projects
          </p>
        </div>

        {/* Continuously moving client logos: six visible on desktop */}
        <div className="clients-carousel" aria-label="Client organizations">
          <div className="clients-carousel-track">
          {carouselClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="client-carousel-item group flex flex-col items-center justify-center p-3 rounded-md bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center"
              title={`${client.name} (${client.state})`}
              aria-hidden={index >= clientData.length}
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-full bg-white p-1.5 shadow-xs border border-slate-100 group-hover:scale-105 transition-transform">
                <ResponsiveImage
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter contrast-105"
                  loading="lazy"
                  sizes="96px"
                />
              </div>
              <span className="mt-2 text-[11px] font-bold text-slate-700 group-hover:text-blue-900 transition-colors line-clamp-1">
                {client.shortName}
              </span>
              <span className="text-[9px] text-slate-400 line-clamp-1">
                {client.state}
              </span>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  )
}
