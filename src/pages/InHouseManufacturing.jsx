import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, CheckCircle2, Cog, DraftingCompass, Gauge, ShieldCheck, Users } from 'lucide-react'
import PageHero from '../components/PageHero'

const capabilities = [
  { icon: Cog, title: 'Advanced Machinery', text: 'Modern CNC, VMC and precision machining equipment support accurate, repeatable production.' },
  { icon: DraftingCompass, title: 'Engineering Control', text: 'Qualified engineers supervise every critical stage, from design review to final assembly.' },
  { icon: Boxes, title: 'Integrated Production', text: 'Machining, fabrication, assembly and finishing are coordinated within one manufacturing facility.' },
  { icon: ShieldCheck, title: 'Consistent Quality', text: 'Controlled processes and stage-wise inspection help maintain dependable product quality.' },
]

const process = ['Design & planning', 'Material preparation', 'Precision machining', 'Assembly & finishing', 'Inspection & testing']

export default function InHouseManufacturing() {
  useEffect(() => {
    document.title = 'In-House Manufacturing | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-in-house-manufacturing">
      <PageHero type="inHouseManufacturing" />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Complete Manufacturing Under One Roof</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">
                Built in-house. <span className="text-[#f37021]">Built with confidence.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
                Our integrated manufacturing facility brings the complete production process under one roof. Advanced machinery, controlled workflows and the close supervision of qualified, experienced engineers allow us to manufacture dependable valves with precision and consistency.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {['Closer process control', 'Faster coordination', 'Consistent workmanship', 'Reliable project execution'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-slate-100">
                <img src="/images/infra/valve-assembly.png" alt="SSPR engineers assembling an industrial valve inside the manufacturing facility" className="w-full h-[360px] sm:h-[460px] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-4 sm:left-8 bg-[#0d2857] text-white rounded-xl px-5 py-4 shadow-xl max-w-[260px]">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#f37021] shrink-0" />
                  <p className="text-sm font-bold leading-snug">Engineer-led production at every critical stage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  )
}
