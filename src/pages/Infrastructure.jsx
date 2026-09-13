import { PencilRuler, Layers, Settings, ClipboardCheck, Truck } from 'lucide-react'
import PageHero from '../components/PageHero'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ArrowRight, Building, ShieldCheck, Users, Globe2, Cpu, Wrench, PhoneCall, X } from 'lucide-react'
import { companyData } from '../data/companyData'

export default function Infrastructure({ onShowToast }) {
  const [activeModalCap, setActiveModalCap] = useState(null)
  const [lightboxImg, setLightboxImg] = useState(null)

  const handleDownloadBrochure = () => {
    const text = `========================================================
SSPR VALVE MANUFACTURING PRIVATE LIMITED
INFRASTRUCTURE & MANUFACTURING CAPABILITY BROCHURE
========================================================
Manufacturing Plant:
ONGC Road, Dakshin Jhapordha, Domjur, Howrah - 711405 (West Bengal)
ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certified
PLANT CAPABILITIES & MACHINERY:
1. CNC & VMC Centers: High precision computerized machining centers for body, disc and flanges.
2. Heavy Lathes: Boring and facing operations for valves up to DN2400 (96").
3. Testing Bay: High-pressure hydrostatic test benches up to 100 bar, pneumatic test stations, and vacuum testing.
4. Metallurgy & NDT: In-house chemical spectrometry, dye-penetrant testing, ultrasonic wall thickness gauging.
5. Assembly Lines: Dedicated bays for clean assembly, rubber seat vulcanizing, and torque calibration.
6. Coating & Painting: Fusion Bonded Epoxy (FBE) electrostatic coating and polyurethane paint systems.

ANNUAL PRODUCTION CAPACITY:
Over 50,000 valves annually across water, irrigation, municipal, desalination and process industries.

Contact: info@ssprvalve.com | +91 7044090444
========================================================`

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `SSPR-Valve-Infrastructure-Brochure.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    if (onShowToast) {
      onShowToast('Downloaded Infrastructure & Plant Capabilities Brochure!')
    }
  }

  return (
    <div className="site-page page-infrastructure">
      
      {/* 1. HERO BANNER */}
      <PageHero type="infrastructure" onDownload={handleDownloadBrochure} />

      {/* 2. A STRONGER FOUNDATION FOR A BRIGHTER TOMORROW */}
      <section className="py-5 bg-white" id="facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Left text & 4 badges */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                OUR INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">
                A Stronger <span className="text-[#f37021]">Foundation</span> <br />
                for a Brighter Tomorrow
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our modern manufacturing unit in Howrah, West Bengal is equipped with advanced machinery, precision testing facilities and a skilled workforce to deliver high-quality industrial valves for critical applications. We combine technology, expertise and robust processes to ensure reliability, safety and customer satisfaction across global markets.
              </p>

              {/* 4 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: <Building className="w-4 h-4 text-blue-600" />, title: "Advanced Manufacturing Facility" },
                  { icon: <ShieldCheck className="w-4 h-4 text-blue-600" />, title: "Stringent Quality Control Systems" },
                  { icon: <Users className="w-4 h-4 text-blue-600" />, title: "Skilled & Experienced Workforce" },
                  { icon: <Globe2 className="w-4 h-4 text-blue-600" />, title: "Global Standards & Compliance" },
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="p-1.5 rounded-md bg-white shadow-2xs shrink-0">
                      {b.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-700 leading-tight">
                      {b.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large Assembly Photo */}
            <div className="lg:col-span-6 relative rounded-md overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/images/infra/valve-assembly.png"
                alt="Large Industrial Valve Assembly & Testing"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-xs text-white p-3 rounded-md border border-white/20 text-right max-w-[200px]">
                <span className="text-xs font-bold text-amber-400 block">INDUSTRIAL VALVES</span>
                <span className="text-[10px] text-slate-200 block">ENGINEERED WITH PURPOSE</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTEGRATED FACILITIES FOR SUPERIOR QUALITY (6 CAPABILITIES) */}
      <section className="py-5 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                OUR MANUFACTURING CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Integrated Facilities for <span className="text-[#f37021]">Superior Quality</span>
              </h2>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d2857] hover:text-[#f37021] transition-colors"
            >
              <span>View Facility Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="capabilities-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {companyData.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-1">
                  <button
                    onClick={() => setActiveModalCap(cap)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-[#f37021] cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FROM DESIGN TO DISPATCH - A SEAMLESS JOURNEY (6-STEP PROCESS) */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 pb-3 border-b border-transparent gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                OUR MANUFACTURING PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                From Design to Dispatch — <span className="text-[#f37021]">A Seamless Journey</span>
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Precision at Every Step | Quality in Every Flow
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyData.processSteps.map((p, idx) => (
              <div
                key={idx}
                className="process-step bg-slate-50 p-4 rounded-md border border-slate-200 shadow-2xs hover:shadow-sm hover:border-[#f37021] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#f37021] text-white flex items-center justify-center font-extrabold text-xs mb-3 shadow-xs">
                    {p.step}
                  </div>
                  <span className="process-icon">{[<PencilRuler key="design"/>,<Layers key="material"/>,<Settings key="machine"/>,<Wrench key="assemble"/>,<ClipboardCheck key="test"/>,<Truck key="dispatch"/>][idx]}</span>
                  <h4 className="text-xs font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INSIDE OUR MANUFACTURING UNIT (GALLERY) */}
      <section className="py-5 bg-slate-50 border-t border-slate-200" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                OUR FACILITY GALLERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Inside Our <span className="text-[#f37021]">Manufacturing Unit</span>
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Howrah, West Bengal
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyData.facilityGallery.map((photo, idx) => (
              <div
                key={idx}
                role="button" tabIndex={0} aria-label={`View ${photo.title}`}
                onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImg(photo) } }}
                onClick={() => setLightboxImg(photo)}
                className="group relative rounded-md overflow-hidden border border-slate-200 shadow-xs cursor-pointer bg-black"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent p-2.5 text-white">
                  <span className="text-[11px] font-bold block line-clamp-1">
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BUILT ON CAPABILITY, DRIVEN BY TRUST (KEY FACTS) */}
      <section className="py-5 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              OUR KEY FACTS & STRENGTHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Built on Capability, <span className="text-[#f37021]">Driven by Trust</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-md border border-slate-200 shadow-2xs text-center hover:border-blue-400 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0d2857] block">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-slate-800 block mt-1">
                  {metric.label}
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CERTIFICATIONS & COMPLIANCE (ALL 6 BADGES) */}
      <section className="py-5 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                CERTIFICATIONS & COMPLIANCE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2857] mt-1">
                Committed to <span className="text-[#f37021]">Global Standards</span>
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Compliant | Reliable | Future Ready
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-md border border-slate-200 shadow-2xs flex flex-col items-center justify-center text-center h-28 hover:shadow-sm transition-all"
              >
                <div className="h-12 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.code}
                    className="max-h-11 max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-700 mt-2 line-clamp-1">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have a Project Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Let's discuss how our infrastructure and manufacturing capabilities can support your next project with assured quality and strict delivery schedules.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <PhoneCall className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold block">Quick Enquiry</span>
              </div>
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <Cpu className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold block">Technical Consultation</span>
              </div>
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <Wrench className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold block">Customized Solutions</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl w-full bg-white rounded-md overflow-hidden p-3 text-center">
            <button
              aria-label="Close photo"
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-black p-2 rounded-lg bg-slate-100 z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg.image}
              alt={lightboxImg.title}
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-md"
            />
            <h4 className="text-base font-extrabold text-[#0d2857] mt-3">
              {lightboxImg.title}
            </h4>
          </div>
        </div>
      )}

      {/* CAPABILITY DETAIL MODAL */}
      {activeModalCap && (
        <div
          onClick={() => setActiveModalCap(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-md max-w-md w-full p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-transparent pb-3">
              <h3 className="text-lg font-bold text-[#0d2857]">
                {activeModalCap.title}
              </h3>
              <button
                aria-label="Close facility details"
                onClick={() => setActiveModalCap(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={activeModalCap.image}
              alt={activeModalCap.title}
              className="w-full h-44 object-cover rounded-md border border-slate-200"
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeModalCap.desc}
            </p>
            <Link
              to="/contact"
              onClick={() => setActiveModalCap(null)}
              className="w-full bg-[#f37021] hover:bg-[#e05f13] text-white font-bold py-2.5 rounded-lg text-xs cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

    </div>
  )
}

