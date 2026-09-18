import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Clock3, Factory, FlaskConical, Headphones } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'motion/react'

const strengths = [
  { title: 'In-House Manufacturing', path: '/why-us/in-house-manufacturing', image: '/images/infra/valve-assembly.png', icon: Factory, text: 'Complete manufacturing under one roof with advanced machinery and engineer-led process control.' },
  { title: 'In-House Testing Facility', path: '/why-us/in-house-testing-facility', image: '/images/hero/home-hero-slide-3.webp', icon: FlaskConical, text: 'BIS-approved laboratory facilities for raw-material verification and consistent product quality.' },
  { title: 'Certifications', path: '/why-us/certifications', image: '/images/certifications/certificate-iso-9001.webp', icon: BadgeCheck, text: 'Certified quality, environmental and occupational health-and-safety management systems.' },
  { title: 'Customer Support', path: '/why-us/customer-support', image: '/images/infra/projects/industrial-valve-installation.webp', icon: Headphones, text: 'Technical coordination that continues beyond supply and remains available through project completion.' },
  { title: 'On-Time Delivery', path: '/why-us/on-time-delivery', image: '/images/hero/home-hero-slide-2.webp', icon: Clock3, text: 'Disciplined planning, production monitoring and dispatch coordination focused on customer commitments.' },
]

export default function WhyUs() {
  useEffect(() => { document.title = 'Why Us | SSPR Valve Manufacturing Private Limited' }, [])
  return (
    <div className="site-page page-why-us">
      <PageHero type="whyUs" />
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Why choose SSPR</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Five strengths behind every valve</h2>
            <p className="mt-3 text-sm text-slate-600 leading-6">An integrated approach designed to deliver consistent products and dependable project outcomes.</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
            {strengths.map(({ title, path, image, icon: Icon, text }, index) => (
              <StaggerItem
                key={path}
                hoverEffect={true}
                className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
              >
                <Link to={path} className="block h-52 overflow-hidden bg-slate-100">
                  <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center -mt-11 relative mb-5 border-4 border-white box-content shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d2857]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">{text}</p>
                  <Link to={path} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="rounded-2xl bg-gradient-to-r from-[#0d2857] to-[#16498b] p-7 sm:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-7">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold text-[#f7a267] tracking-[0.22em] uppercase">Built around your project</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">A stronger valve partner from enquiry to completion</h2>
                <p className="mt-3 text-sm text-slate-200 leading-6">Tell us about your application, operating conditions and project schedule. Our team will help identify a dependable solution.</p>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Talk to Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
