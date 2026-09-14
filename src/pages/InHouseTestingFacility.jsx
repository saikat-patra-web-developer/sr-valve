import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Gauge,
  Microscope,
  ZoomIn,
  X,
  Sparkles,
  Layers,
  Flame,
} from 'lucide-react'
import PageHero from '../components/PageHero'

const testingCapabilities = [
  { icon: FlaskConical, title: 'Raw Material Testing', text: 'Incoming materials are evaluated in our in-house BIS-approved laboratory before they enter production.' },
  { icon: Microscope, title: 'Material Verification', text: 'Defined inspection procedures help verify material properties and suitability for the intended application.' },
  { icon: Gauge, title: 'Product Testing', text: 'Finished valves undergo relevant dimensional, pressure and performance checks before approval.' },
  { icon: FileCheck2, title: 'Quality Documentation', text: 'Inspection and testing records support traceability and consistent quality across every production batch.' },
]

const facilityGallery = [
  {
    id: 'analytical-center',
    title: 'Integrated Inspection & Quality Station',
    category: 'BIS-Approved Testing Laboratory',
    image: '/images/testing/in-house-testing-laboratory.webp',
    badge: 'On-Site Testing Facility',
    icon: Layers,
    description: 'Our primary in-house testing laboratory equipped with electronic control consoles, heating ovens, certified laboratory glassware, and precision measurement apparatus.',
    highlights: ['On-site BIS-approved laboratory', 'Stage-wise quality verification', 'Electronic parameter monitoring', 'Certified glassware & apparatus'],
  },
  {
    id: 'utm',
    title: 'Universal Testing Machine (UTM)',
    category: 'Mechanical & Tensile Testing',
    image: '/images/testing/universal-testing-machine.webp',
    badge: 'Tensile & Proof Stress Testing',
    icon: Sparkles,
    description: 'High-precision Universal Testing Machine (UTM) dedicated to measuring tensile strength, proof stress, yield point, and elongation of cast iron, ductile iron (SG iron), and steel specimens.',
    highlights: ['Microprocessor digital readout', 'Tensile, compression & bend checks', 'Foundry test bar verification', 'Meets IS 210, IS 1865 & ASTM standards'],
  },
  {
    id: 'chemical-lab',
    title: 'Chemical & Metallurgical Analysis Lab',
    category: 'Raw Material Composition',
    image: '/images/testing/chemical-testing-laboratory.webp',
    badge: 'Chemical Composition Verification',
    icon: Flame,
    description: 'Analytical chemical testing station featuring high-temperature muffle furnaces, chemical reagent benches, and titration burettes to verify exact Carbon, Silicon, Manganese, and alloying content.',
    highlights: ['Wet-chemical analysis setup', 'Carbon & Silicon verification', 'High-temperature muffle furnace', '100% heat traceability assurance'],
  },
]

const qualityStages = [
  { number: '01', title: 'Incoming material', text: 'Raw materials are received, identified and checked.' },
  { number: '02', title: 'Laboratory verification', text: 'Materials are tested against defined requirements.' },
  { number: '03', title: 'In-process inspection', text: 'Quality is monitored throughout manufacturing.' },
  { number: '04', title: 'Final product testing', text: 'Completed valves are inspected before release.' },
]

export default function InHouseTestingFacility() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    document.title = 'In-House Testing Facility | SSPR Valve Manufacturing Private Limited'
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalImage(null)
    }
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [modalImage])

  return (
    <div className="site-page page-in-house-testing-facility">
      <PageHero type="inHouseTestingFacility" />

      {/* Primary Feature Section with Real Testing Facility Photo */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Tested for quality. Built for confidence.</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">
                Quality begins with the <span className="text-[#f37021]">right material.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
                Our in-house BIS-approved laboratory provides comprehensive testing facilities for incoming raw materials and metallurgical specimens. By checking quality at the source and maintaining rigorous control throughout production, we remain committed to delivering dependable valves of consistently high quality.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="w-7 h-7 text-[#f37021] shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-[#0d2857]">BIS-approved in-house laboratory</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-6">On-site testing supports faster verification, tighter metallurgical control and dependable manufacturing outcomes.</p>
                  </div>
                </div>
              </div>

              {/* Quick Facility Photo Switcher */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  View Laboratory Facilities:
                </span>
                <div className="flex items-center gap-2.5">
                  {facilityGallery.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all p-0.5 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#0635b8] ring-2 ring-[#0635b8]/20 scale-105'
                          : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Show ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div
                className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100 cursor-pointer"
                onClick={() => setModalImage(facilityGallery[activeImageIndex])}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setModalImage(facilityGallery[activeImageIndex])
                }}
                aria-label={`Expand view of ${facilityGallery[activeImageIndex].title}`}
              >
                <img
                  src={facilityGallery[activeImageIndex].image}
                  alt={facilityGallery[activeImageIndex].title}
                  className="w-full h-[360px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top overlay badge */}
                <div className="absolute top-4 left-4 bg-[#0d2857]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20">
                  {facilityGallery[activeImageIndex].category}
                </div>

                {/* Zoom hover indicator */}
                <div className="absolute top-4 right-4 bg-white/90 text-[#0d2857] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ZoomIn size={18} />
                </div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d2857]/95 via-[#0d2857]/70 to-transparent p-4 sm:p-5 text-white">
                  <h3 className="font-bold text-base sm:text-lg">{facilityGallery[activeImageIndex].title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 mt-0.5">
                    {facilityGallery[activeImageIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Testing Equipment & Laboratory Showcase Gallery */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Facility & Equipment Showcase</span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0d2857]">
              Advanced In-House Testing Equipment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every production batch undergoes comprehensive chemical analysis, mechanical property verification, and hydrostatic pressure testing within our facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {facilityGallery.map((facility) => {
              const FacilityIcon = facility.icon
              return (
                <div
                  key={facility.id}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div
                    className="relative overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer"
                    onClick={() => setModalImage(facility)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setModalImage(facility)
                    }}
                    aria-label={`View photo of ${facility.title}`}
                  >
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0d2857]/85 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {facility.badge}
                    </div>
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-[#0d2857] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <ZoomIn size={14} /> View Full Photo
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#f37021] uppercase tracking-wider mb-2">
                      <FacilityIcon size={15} />
                      <span>{facility.category}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0d2857] group-hover:text-[#0635b8] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-6 flex-1">
                      {facility.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {facility.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={14} className="text-[#0635b8] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Testing Capabilities Cards */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Testing & Inspection</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">A controlled approach to product quality</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testingCapabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-white" /></div>
                <h3 className="text-base font-extrabold text-[#0d2857]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Stages */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Quality at every stage</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">From raw material to final approval</h2>
              <p className="mt-4 text-sm text-slate-600 leading-6">Our quality process is designed to identify issues early, preserve traceability and deliver consistent performance from one product to the next.</p>
              <div className="mt-5 space-y-2">
                {['Defined inspection checkpoints', 'Engineer-led quality review', 'Product consistency across batches'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#f37021]" />{item}</div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {qualityStages.map((stage) => (
                <div key={stage.number} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl font-black text-[#f37021]">{stage.number}</span>
                  <div><h3 className="font-extrabold text-[#0d2857]">{stage.title}</h3><p className="mt-1 text-sm text-slate-600 leading-6">{stage.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d2857] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <ClipboardCheck className="w-9 h-9 text-[#f37021] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-extrabold">Need quality documents or testing details?</h2>
              <p className="mt-2 text-sm text-slate-300 leading-6">Speak with our team about inspection requirements, product standards or project-specific testing.</p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors shrink-0">
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={modalImage.image}
                alt={modalImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#f37021] uppercase tracking-wider">
                  {modalImage.category}
                </span>
                <h3 className="text-xl font-extrabold text-[#0d2857] mt-0.5">
                  {modalImage.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  {modalImage.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0d2857] font-bold text-sm transition-colors cursor-pointer self-start sm:self-auto shrink-0"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

