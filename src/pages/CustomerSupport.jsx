import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ClipboardList, Headphones, MessagesSquare, PhoneCall, Users, Wrench } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'motion/react'

const supportServices = [
  { icon: MessagesSquare, title: 'Direct Coordination', text: 'Our technical team communicates with your site in-charge or project engineer whenever support is required.' },
  { icon: ClipboardList, title: 'Scheduled Follow-ups', text: 'We stay connected at important project intervals to review progress and help address technical concerns.' },
  { icon: Wrench, title: 'Technical Guidance', text: 'Practical product, installation and application guidance helps your team move forward with confidence.' },
  { icon: Headphones, title: 'Continued Assistance', text: 'Our relationship continues beyond supply, with responsive support through project completion.' },
]

const journey = [
  { number: '01', title: 'Understand', text: 'We review your project, application and technical requirements.' },
  { number: '02', title: 'Coordinate', text: 'Our experts connect directly with your responsible site team.' },
  { number: '03', title: 'Support', text: 'We provide guidance at key stages as the project progresses.' },
  { number: '04', title: 'Complete', text: 'We remain involved until your project reaches completion.' },
]

export default function CustomerSupport() {
  useEffect(() => {
    document.title = 'Customer Support | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-customer-support">
      <PageHero type="customerSupport" />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Support beyond the sale</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">
                With you until the <span className="text-[#f37021]">project is complete.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
                Our relationship with you does not end when we supply the product. We stay involved throughout the project, with technical experts coordinating directly with your site in-charge or engineer at important intervals.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
                When you choose SSPR Valve Manufacturing, you gain a dependable partner committed to helping your team carry the project through with confidence.
              </p>
              <div className="mt-6 space-y-3">
                {['Responsive technical communication', 'Project-stage coordination', 'Support through completion'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />{item}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-7 grid grid-cols-12 gap-3 sm:gap-4 relative pb-5">
              <div className="col-span-8 overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100">
                <img src="/images/infra/projects/industrial-valve-installation.webp" alt="Industrial valve installation supported by the SSPR technical team" className="w-full h-[400px] sm:h-[470px] object-cover" />
              </div>
              <div className="col-span-4 overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-slate-100 mt-10">
                <img src="/images/infra/projects/clarifier-installation.webp" alt="Water infrastructure project receiving ongoing technical support" className="w-full h-[320px] sm:h-[390px] object-cover" />
              </div>
              <div className="absolute bottom-0 left-4 sm:left-8 bg-[#0d2857] text-white rounded-xl px-5 py-4 shadow-xl max-w-[280px]">
                <div className="flex items-center gap-3"><Users className="w-8 h-8 text-[#f37021] shrink-0" /><p className="text-sm font-bold leading-snug">Technical experts connected to your site team</p></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">How we support you</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Practical support throughout your project</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportServices.map(({ icon: Icon, title, text }) => (
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
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">A committed partnership</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">One team from requirement to completion</h2>
              <p className="mt-4 text-sm text-slate-600 leading-6">Clear communication and timely technical involvement help keep responsibilities aligned throughout the project lifecycle.</p>
            </FadeIn>
            <StaggerContainer className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {journey.map((stage) => (
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
                <PhoneCall className="w-9 h-9 text-[#f37021] shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-extrabold">Need support for your project?</h2>
                  <p className="mt-2 text-sm text-slate-300 leading-6">Connect your site in-charge or engineer with our technical team for product and project assistance.</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Contact Support <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
