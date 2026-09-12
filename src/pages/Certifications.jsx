import PageHero from '../components/PageHero'
import React from 'react'

import { Check, ArrowRight } from 'lucide-react'
import ClientsSection from '../components/ClientsSection'
import ResponsiveImage from '../components/ResponsiveImage'

export default function Certifications({ onOpenQuote }) {
  const detailedCerts = [
    {
      code: "ISO 9001:2015",
      title: "Quality Management System (QMS)",
      scope: "Design, Manufacture, Testing and Supply of Industrial Sluice Valves, Butterfly Valves, Check Valves, Air Valves, Gate Valves, Penstocks and Flow Control Equipment.",
      certifyingBody: "International Organization for Standardization (Accredited Certification)",
      validity: "Valid to 10 June 2027",
      document: "/downloads/SSPR ISO upto 11.05.2027.pdf",
      image: "/images/certifications/badge_iso9001.webp",
      keyPoints: [
        "Stringent incoming raw material inspection with 100% mill test traceability",
        "Calibrated in-process dimensional tolerance checks",
        "Documented hydrostatic shell and seat pressure testing for every valve",
        "Continuous customer feedback and corrective quality cycles",
      ],
    },
    {
      code: "ISO 14001:2015",
      title: "Environmental Management System (EMS)",
      scope: "Environmentally Responsible Valve Manufacturing, Scrap Recycling, Resource Conservation and Sustainable Industrial Operations at Howrah Plant.",
      certifyingBody: "International Environmental Accreditation",
      validity: "Valid to 16 April 2028",
      document: "/downloads/ISO 14001 - Upto 16.04.2028.pdf",
      image: "/images/certifications/badge_iso14001.webp",
      keyPoints: [
        "100% non-toxic, eco-friendly epoxy and powder coating systems",
        "Systematic metallic machining scrap separation and recycling",
        "Energy-efficient CNC and heavy electrical foundry management",
        "Water conservation across hydrostatic test collection recirculation pits",
      ],
    },
    {
      code: "ISO 45001:2018",
      title: "Occupational Health & Safety Management (OHSMS)",
      scope: "Workplace Safety, Safe Handling of Heavy Castings, Ergonomics and Industrial Hygiene for Engineers and Skilled Workforce.",
      certifyingBody: "International Safety Accreditation",
      validity: "Valid to 16 April 2028",
      document: "/downloads/ISO 45001 - Upto 16.04.2028.pdf",
      image: "/images/certifications/badge_iso45001.webp",
      keyPoints: [
        "Comprehensive PPE compliance across foundry, machining & testing bays",
        "Heavy crane and hoist safety interlocks inspected regularly",
        "Rigorous hazard identification and risk assessment (HIRA) protocols",
        "Zero lost-time injury (LTI) target proactively maintained",
      ],
    },
  ]

  return (
    <div className="site-page page-certifications">
      
      {/* 1. HERO BANNER */}
      <PageHero type="certifications" />

      {/* 2. DETAILED CERTIFICATIONS CARDS */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              ACCREDITATIONS & STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Built on <span className="text-[#f37021]">Global Standards</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              Certified by premier national and international accreditation bodies for precision, safety and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedCerts.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-md border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="h-12 w-28 flex items-center justify-start">
                      <ResponsiveImage
                        src={cert.image}
                        alt={cert.code}
                        className="max-h-12 max-w-full object-contain"
                        sizes="160px"
                      />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">
                      {cert.validity}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                    {cert.code}
                  </h3>
                  <h4 className="text-xs font-bold text-slate-700 mt-0.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {cert.scope}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
                    {cert.keyPoints.map((kp, kidx) => (
                      <div key={kidx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{kp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <span className="text-[10px] font-semibold text-slate-400 block">
                    Issued to / Authority: {cert.certifyingBody}
                  </span>
                  {cert.document && <a href={cert.document} target="_blank" rel="noreferrer" className="inline-flex mt-3 text-xs font-bold text-blue-700 hover:text-[#f37021]">View certificate PDF</a>}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. QUALITY TESTING PROTOCOLS */}
      <section className="py-5 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857]">
              Rigorous <span className="text-[#f37021]">Inspection & Testing</span> Protocols
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every valve leaving our Howrah facility undergoes comprehensive physical and non-destructive examination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Hydrostatic Shell Test",
                desc: "Tested at 1.5x working pressure for 5 minutes with zero porosity or structural distortion.",
              },
              {
                title: "Hydrostatic Seat Test",
                desc: "Tested at 1.1x working pressure with bubble-tight sealing per API 598 and ISO 5208 Rate A.",
              },
              {
                title: "Pneumatic Air Test",
                desc: "Low-pressure air seat test at 6 bar to identify micro-fissures and ensure perfect elastomer seat integrity.",
              },
              {
                title: "NDT & Metallurgy",
                desc: "Dye-penetrant, ultrasonic wall thickness, and chemical spectrometer verification with 3.1 MTC.",
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-5 rounded-md border border-slate-200 shadow-2xs">
                <span className="text-xl font-extrabold text-[#f37021] block mb-2">0{idx + 1}</span>
                <h4 className="text-sm font-bold text-[#0d2857]">{p.title}</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLIENT ORGANIZATIONS */}
      <ClientsSection subtitle="VERIFIED BY PREMIER GOVERNMENT & PRIVATE CLIENTS" />

      {/* 5. CTA */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Need Certified Valves for Your Government Tender or Private Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Our team provides complete pre-qualification documentation, ISO audit certificates, and test credentials.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenQuote('Certified Valve Requirement')}
                className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Send Enquiry Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
