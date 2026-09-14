import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cog,
  DraftingCompass,
  Flame,
  Gauge,
  Layers,
  ShieldCheck,
  Users,
  ZoomIn,
  X,
} from 'lucide-react'
import PageHero from '../components/PageHero'

const manufacturingGallery = [
  {
    id: 'heavy-machining-bay',
    title: 'Heavy Machining & Fabrication Bay',
    category: 'Plant Infrastructure & Crane Bays',
    image: '/images/manufacturing/heavy-machining-bay.webp',
    badge: 'Shop Floor & Overhead Crane Bays',
    icon: Layers,
    description: 'Our primary manufacturing bay equipped with high-capacity overhead gantry hoists, heavy-duty rotary lathes, and structured workstation lines for industrial valves.',
    highlights: ['Overhead crane material handling', 'Integrated machining & assembly bay', 'Heavy-duty workstation layout', 'Continuous production monitoring'],
  },
  {
    id: 'rotary-lathe-machining',
    title: 'Heavy Rotary Faceplate & Lathe Turning',
    category: 'Precision Component Machining',
    image: '/images/manufacturing/heavy-valve-rotary-lathe-machining.webp',
    badge: 'Heavy Bore & Faceplate Machining',
    icon: Cog,
    description: 'Large-diameter rotary faceplate lathes turning massive valve bodies, flanges, and seat rings with micrometer accuracy and tight dimensional tolerances.',
    highlights: ['Large diameter valve body turning', 'Precision flange facing & grooving', 'Rigid vibration-free clamping', 'Continuous operator supervision'],
  },
  {
    id: 'casting-fettling-grinding',
    title: 'Casting Fettling, Dressing & Surface Preparation',
    category: 'Foundry Finishing & Quality Prep',
    image: '/images/manufacturing/valve-casting-fettling-grinding.webp',
    badge: 'Casting Dressing & Edge Grinding',
    icon: Flame,
    description: 'Skilled technicians perform precision pneumatic and electric angle-grinding, riser trimming, and surface deburring on valve castings prior to machining.',
    highlights: ['Thorough surface preparation', 'Flange edge deburring & cleanup', 'Comprehensive PPE safety standards', 'Smooth casting surface readiness'],
  },
]

const capabilities = [
  { icon: Cog, title: 'Advanced Machinery', text: 'Heavy-duty rotary faceplate lathes, vertical borers, and precision turning equipment support accurate, repeatable production.' },
  { icon: DraftingCompass, title: 'Engineering Control', text: 'Qualified engineers supervise every critical stage, from component turning to final hydrostatic testing.' },
  { icon: Boxes, title: 'Integrated Production', text: 'Overhead gantry handling, machining, fabrication, assembly, and finishing are coordinated within one facility.' },
  { icon: ShieldCheck, title: 'Consistent Quality', text: 'Controlled processes and stage-wise dimensional inspections maintain dependable product quality.' },
]

const process = ['Design & planning', 'Material preparation', 'Precision machining', 'Assembly & finishing', 'Inspection & testing']

export default function InHouseManufacturing() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    document.title = 'In-House Manufacturing | SSPR Valve Manufacturing Private Limited'
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
    <div className="site-page page-in-house-manufacturing">
      <PageHero type="inHouseManufacturing" />

      {/* Primary Feature Section with Real Manufacturing Shop Floor Photo */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Complete Manufacturing Under One Roof</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">
                Built in-house. <span className="text-[#f37021]">Built with confidence.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
                Our integrated manufacturing facility brings the complete production process under one roof. Heavy-duty overhead gantry cranes, high-capacity rotary lathes, controlled workflows, and the close supervision of qualified, experienced engineers allow us to manufacture dependable valves with precision and consistency.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-start gap-3">
                  <Users className="w-7 h-7 text-[#f37021] shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-[#0d2857]">Engineer-led production & supervision</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-6">Experienced engineers oversee every critical phase—from component turning and faceplate boring to final hydro-testing and finishing.</p>
                  </div>
                </div>
              </div>

              {/* Quick Facility Photo Switcher */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  View Manufacturing Facilities:
                </span>
                <div className="flex items-center gap-2.5">
                  {manufacturingGallery.map((item, idx) => (
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
                onClick={() => setModalImage(manufacturingGallery[activeImageIndex])}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setModalImage(manufacturingGallery[activeImageIndex])
                }}
                aria-label={`Expand view of ${manufacturingGallery[activeImageIndex].title}`}
              >
                <img
                  src={manufacturingGallery[activeImageIndex].image}
                  alt={manufacturingGallery[activeImageIndex].title}
                  className="w-full h-[360px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top overlay badge */}
                <div className="absolute top-4 left-4 bg-[#0d2857]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20 shadow-sm">
                  {manufacturingGallery[activeImageIndex].category}
                </div>

                {/* Zoom hover indicator */}
                <div className="absolute top-4 right-4 bg-white/90 text-[#0d2857] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ZoomIn size={18} />
                </div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d2857]/95 via-[#0d2857]/70 to-transparent p-4 sm:p-5 text-white">
                  <h3 className="font-bold text-base sm:text-lg">{manufacturingGallery[activeImageIndex].title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 mt-0.5">
                    {manufacturingGallery[activeImageIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Manufacturing Capabilities Showcase Gallery */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Shop Floor & Operations Showcase</span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0d2857]">
              In-House Machining & Fabrication Facilities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Equipped with heavy overhead gantry hoists, large rotary lathes, and dedicated dressing bays to execute critical valve manufacturing operations under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {manufacturingGallery.map((facility) => {
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

      {/* Capabilities */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Our Manufacturing Strength</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Capability at every stage of production</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-white" /></div>
                <h3 className="text-base font-extrabold text-[#0d2857]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">One Integrated Workflow</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">From engineering to a finished valve</h2>
              <p className="mt-4 text-sm text-slate-600 leading-6">Keeping core operations in-house gives our team better visibility, tighter control and clear accountability throughout production.</p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-5 gap-3">
              {process.map((step, index) => (
                <div key={step} className="bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-32">
                  <span className="text-3xl font-black text-slate-200">0{index + 1}</span>
                  <p className="mt-4 text-sm font-bold text-[#0d2857] leading-snug">{step}</p>
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
            <Gauge className="w-9 h-9 text-[#f37021] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-extrabold">Discuss your valve requirement with our engineers</h2>
              <p className="mt-2 text-sm text-slate-300 leading-6">Talk to us about standard products, project specifications or custom manufacturing requirements.</p>
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
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={modalImage.image}
                alt={modalImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
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

