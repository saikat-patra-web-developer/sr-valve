import React from 'react'
import { Leaf } from 'lucide-react'
import { companyData } from '../data/companyData'
import ResponsiveImage from './ResponsiveImage'

export default function CertificationsStrip({ showQualityBanner = true }) {
  return (
    <section className="certifications-strip py-3 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-2">
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
            COMMITTED TO QUALITY, SAFETY AND SUSTAINABILITY
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2857] mt-1">
            Certifications & <span className="text-[#f37021]">Registrations</span>
          </h3>
        </div>

        <div className={`grid grid-cols-1 ${showQualityBanner ? 'lg:grid-cols-12' : 'lg:grid-cols-6'} gap-6 items-center`}>
          
          {/* Badges Grid (fills 9 cols if banner shown) */}
          <div className={`${showQualityBanner ? 'lg:col-span-9' : 'lg:col-span-6'} grid grid-cols-3 gap-2 sm:gap-4 items-center w-full min-w-0`}>
            {companyData.certifications.slice(0, 5).map((cert, index) => (
              <div
                key={index}
                className="bg-white p-1 sm:p-3 rounded-md border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col items-center text-center group h-28 justify-center min-w-0 w-full"
              >
                <div className="h-12 flex items-center justify-center w-full min-w-0">
                  <ResponsiveImage
                    src={cert.image}
                    alt={cert.code}
                    className="max-h-11 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    loading="lazy"
                    sizes="160px"
                  />
                </div>
                <span className="hidden sm:block text-[10px] font-bold text-slate-600 mt-2 line-clamp-1">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>

          {/* Green Quality Banner (3 cols) */}
          {showQualityBanner && (
            <div className="lg:col-span-3 bg-gradient-to-br from-emerald-50 to-teal-100/70 border border-emerald-200 rounded-md p-4 flex items-center gap-3 shadow-2xs">
              <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-950 leading-tight">
                  Quality Today
                </h4>
                <p className="text-xs font-semibold text-emerald-700">
                  For a Better Tomorrow
                </p>
                <span className="text-[10px] text-emerald-800/80 block mt-0.5">
                  100% Inspected & Assured
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
