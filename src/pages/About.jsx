import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage'
import { ArrowRight, Target, Eye, HeartHandshake, CheckCircle } from 'lucide-react'
import ClientsSection from '../components/ClientsSection'
import CertificationsStrip from '../components/CertificationsStrip'

export default function About() {
  return (
    <div className="site-page page-about">
      
      {/* 1. HERO BANNER */}
      <PageHero type="about" />

      {/* 2. ENGINEERING EXCELLENCE IN EVERY FLOW */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">ABOUT COMPANY</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">
                Experience, Quality and <span className="text-[#f37021]">Engineering Excellence</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-[#0d2857]">SSPR Valve Manufacturing Private Limited</strong> has vast manufacturing experience in various types of valves for industrial use. Our state-of-the-art manufacturing unit is located in Howrah, West Bengal, and holds ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certifications, along with NSIC and MSME registrations.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in manufacturing quality products by combining modern technology with the technical expertise of our engineering team. The company supplies its manufactured products to various government projects, private projects and organizations in the valve industry.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under the leadership of <strong className="text-[#0d2857]">Mr. Prasenjit Dey, Managing Director</strong>, and through the dedicated efforts of the entire team, the company continues to achieve new heights in the valve industry. Commitment, quality products and ethical business practices are values we consistently uphold and for which we are applauded by our clients and business associates.
              </p>

              <div className="pt-3">
                <div className="inline-block border-l-3 border-[#f37021] pl-3">
                  <span className="font-signature text-xl text-[#0d2857] italic">
                    Building A Better Tomorrow
                  </span>
                </div>
              </div>
            </div>

            {/* Modern overlapping office gallery (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto h-[390px] max-w-[620px] sm:h-[470px] lg:h-[450px]">
                <div className="absolute left-[3%] top-[6%] h-[58%] w-[70%] rounded-[2rem] bg-blue-50" aria-hidden="true" />
                <div className="absolute bottom-[4%] right-[1%] h-[56%] w-[72%] rounded-[2rem] bg-orange-50" aria-hidden="true" />

                <figure className="group absolute left-0 top-0 z-10 h-[58%] w-[67%] overflow-hidden rounded-[1.35rem] border-[5px] border-white bg-slate-100 shadow-[0_18px_45px_rgba(13,40,87,0.18)] sm:rounded-[1.75rem] sm:border-[7px]">
                  <ResponsiveImage
                    src="/images/about/office-conference-room.webp"
                    sizes="(min-width: 1024px) 34vw, 67vw"
                    alt="SSPR Valve modern conference room"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>

                <figure className="group absolute right-0 top-[20%] z-20 h-[47%] w-[55%] overflow-hidden rounded-[1.35rem] border-[5px] border-white bg-slate-100 shadow-[0_18px_45px_rgba(13,40,87,0.2)] sm:rounded-[1.75rem] sm:border-[7px]">
                  <ResponsiveImage
                    src="/images/about/office-reception.webp"
                    sizes="(min-width: 1024px) 28vw, 55vw"
                    alt="SSPR Group reception area"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>

                <figure className="group absolute bottom-0 left-[9%] z-30 h-[48%] w-[62%] overflow-hidden rounded-[1.35rem] border-[5px] border-white bg-slate-100 shadow-[0_20px_50px_rgba(13,40,87,0.22)] sm:rounded-[1.75rem] sm:border-[7px]">
                  <ResponsiveImage
                    src="/images/about/office-client-lounge.webp"
                    sizes="(min-width: 1024px) 31vw, 62vw"
                    alt="SSPR Valve client lounge"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>

                <div className="absolute bottom-[7%] right-[2%] z-40 rounded-full border border-blue-100 bg-white/95 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#0d2857] shadow-lg backdrop-blur-sm sm:px-4 sm:text-[10px]">
                  Inside SSPR
                </div>
              </div>
            </div>

          </div>

          <div className="mt-7 rounded-md border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With over 15 years of experience in the design and manufacture of valves and penstocks, and many satisfied customers across India, SSPR Valve—together with its overseas technology associates—looks forward with renewed vigour to working with discerning customers, consultants, contracting companies and organizations engaged in:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Treatment, pumping and pipeline conveyance of water',
                'Irrigation pumping and distribution',
                'Desalination and DM water plants',
                'Civil construction involving water',
                'Sea water applications',
                'Complete PHED (West Bengal) monitoring and control systems, including 24×7 water distribution',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. GUIDED BY A CLEAR PURPOSE (MISSION, VISION, CORE VALUES) */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              OUR PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Guided by a <span className="text-[#f37021]">Clear Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission */}
            <div className="bg-slate-50 rounded-md p-6 border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col">
              <div className="w-12 h-12 rounded-md bg-amber-100 text-[#f37021] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0d2857] mb-2">
                Our Mission
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To deliver high-quality industrial valves and flow control solutions that contribute to a safer, cleaner and more sustainable tomorrow.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 rounded-md p-6 border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col">
              <div className="w-12 h-12 rounded-md bg-blue-100 text-[#0d2857] flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0d2857] mb-2">
                Our Vision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be a most trusted and preferred global manufacturer of industrial valves, recognized for quality, innovation and customer-centric solutions.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-slate-50 rounded-md p-6 border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col">
              <div className="w-12 h-12 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0d2857] mb-2">
                Our Core Values
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {[
                  "Quality in Every Product",
                  "Customer First Approach",
                  "Ethical Business Practices",
                  "Innovation and Continuous Improvement",
                  "Commitment to Society and Environment",
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MESSAGE FROM OUR MANAGING DIRECTOR */}
      <section className="about-leadership-section py-10 sm:py-12 bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Message from Our <span className="text-[#f37021]">Managing Director</span>
            </h2>
          </div>

          <div className="leadership-card overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]">
              
              {/* MD Photo & Title */}
              <aside className="leadership-profile bg-[#0d2857] p-6 sm:p-8 text-center text-white flex flex-col items-center justify-center">
                <div className="h-56 w-44 overflow-hidden rounded-lg border-4 border-white/20 bg-white shadow-xl">
                  <ResponsiveImage
                    src="/images/about/md_prasenjit_dey.webp"
                    alt="Mr. Prasenjit Dey, Managing Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-white">
                  Mr. Prasenjit Dey
                </h3>
                <span className="mt-1 text-sm font-bold text-[#ff8a24]">
                  Managing Director
                </span>
                <span className="mt-2 max-w-[220px] text-xs leading-relaxed text-blue-100">
                  SSPR Valve Manufacturing Private Limited
                </span>
              </aside>

              {/* Managing Director's message */}
              <div className="leadership-message p-6 sm:p-8 lg:p-10 space-y-4 text-sm sm:text-[15px] text-slate-600 leading-7">
                <div className="border-l-4 border-[#f37021] bg-orange-50 px-4 py-3 rounded-r-lg">
                  <p className="font-bold text-[#0d2857]">I am pleased to welcome you to the SSPR Valve website.</p>
                </div>
                <p>Whether you are a potential customer with a challenging project ahead, an existing customer checking our latest news, or a partner, supplier or future employee looking for new opportunities, I trust you will find what you are looking for here.</p>
                <p>SSPR Valve Manufacturing Private Limited is a company that is driving progress and, with our customers and partners, building better communities through safe, smart and efficient infrastructure—something we have been doing consistently.</p>
                <p>Our progressive thinking and creative approach make us stand out from the crowd, allowing us to achieve what very few have been able to accomplish.</p>
                <p className="border-t border-slate-200 pt-4">We have a clear vision of what we want to be: leaders in valve manufacturing and infrastructure development. We guide our business using five core values—<strong className="text-[#0d2857]">lead, grow, deliver, sustain and protect</strong>. I am proud of the work we do and give you my personal commitment that we will deliver what we promise, safely and sustainably.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. BUILT ON GLOBAL STANDARDS */}
      <CertificationsStrip showQualityBanner={false} />

      {/* 8. TRUSTED BY LEADING ORGANIZATIONS */}
      <ClientsSection subtitle="PARTNERING FOR PROGRESS ACROSS INDIA" />

      {/* 9. CTA BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Let's Build a <span className="text-[#f37021]">Stronger</span>, Safer Tomorrow
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Partner with SSPR Valve for reliable, high-performance valve solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
