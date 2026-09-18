import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck2, CheckCircle2, ClipboardCheck, Clock3, PackageCheck, Route, Truck } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'motion/react'

const deliveryStrengths = [
  { icon: CalendarCheck2, title: 'Production Planning', text: 'Project requirements and delivery milestones are mapped into a clear manufacturing schedule.' },
  { icon: Clock3, title: 'Progress Monitoring', text: 'Teams track each critical production stage to identify risks early and keep work moving forward.' },
  { icon: ClipboardCheck, title: 'Quality Clearance', text: 'Inspection and documentation are coordinated before dispatch to avoid last-minute delays.' },
  { icon: Truck, title: 'Dispatch Coordination', text: 'Secure packing and planned logistics help products reach the project site as committed.' },
]

const deliveryFlow = [
  { number: '01', title: 'Confirm', text: 'Order scope, specifications and required delivery date.' },
  { number: '02', title: 'Plan', text: 'Materials, production stages and resources are scheduled.' },
  { number: '03', title: 'Track', text: 'Progress and quality checkpoints are monitored closely.' },
  { number: '04', title: 'Dispatch', text: 'Products are packed, documented and released on time.' },
]

export default function OnTimeDelivery() {
  useEffect(() => {
    document.title = 'On-Time Delivery | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-on-time-delivery">
      <PageHero type="onTimeDelivery" />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Commitment delivered on schedule</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">
                Your timeline matters <span className="text-[#f37021]">to your success.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
                We believe on-time delivery is a critical performance measure that directly influences customer satisfaction and project success. That is why delivery commitments are supported by disciplined planning, close production monitoring and coordinated dispatch.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
                From order confirmation to final shipment, our teams work together to deliver the right product, with the right documentation, at the agreed time.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {['Clear delivery commitments', 'Coordinated production', 'Dispatch-ready documentation', 'Reliable project support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />{item}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-7 relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100">
                <img src="/images/hero/home-hero-slide-2.webp" alt="Completed SSPR valves organized and ready for scheduled dispatch" className="w-full h-[360px] sm:h-[460px] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-4 sm:left-8 bg-[#0d2857] text-white rounded-xl px-5 py-4 shadow-xl max-w-[280px]">
                <div className="flex items-center gap-3"><PackageCheck className="w-8 h-8 text-[#f37021] shrink-0" /><p className="text-sm font-bold leading-snug">Prepared, checked and ready when promised</p></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Delivery discipline</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">How we protect your project schedule</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryStrengths.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} hoverEffect={true} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-white" /></div>
                <h3 className="text-base font-extrabold text-[#0d2857]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <FadeIn direction="right" className="lg:col-span-4">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Order to dispatch</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">A coordinated delivery workflow</h2>
              <p className="mt-4 text-sm text-slate-600 leading-6">Clear ownership at each stage helps maintain momentum, supports predictable delivery and keeps customers informed.</p>
            </FadeIn>
            <StaggerContainer className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {deliveryFlow.map((stage) => (
                <StaggerItem key={stage.number} hoverEffect={true} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl font-black text-[#f37021]">{stage.number}</span>
                  <div><h3 className="font-extrabold text-[#0d2857]">{stage.title}</h3><p className="mt-1 text-sm text-slate-600 leading-6">{stage.text}</p></div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2857] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-2xl">
                <Route className="w-9 h-9 text-[#f37021] shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-extrabold">Planning a time-sensitive project?</h2>
                  <p className="mt-2 text-sm text-slate-300 leading-6">Share your product requirements and expected schedule so our team can help plan a dependable delivery.</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Discuss Your Schedule <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
