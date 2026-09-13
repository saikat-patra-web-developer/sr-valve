import { Settings, Users, ChartNoAxesCombined, Cpu, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import React from 'react'
import { Link } from 'react-router-dom'

import { ArrowRight, Target, Eye, HeartHandshake, CheckCircle, Quote, Droplets, Waves, Building2, Anchor, Factory } from 'lucide-react'
import ClientsSection from '../components/ClientsSection'
import CertificationsStrip from '../components/CertificationsStrip'
import { companyData } from '../data/companyData'

export default function About() {
  const sectorsIcons = [
    <Droplets key="icon-0" className="w-6 h-6 text-blue-600" />,
    <Waves key="icon-1" className="w-6 h-6 text-blue-600" />,
    <Droplets key="icon-2" className="w-6 h-6 text-blue-600" />,
    <Building2 key="icon-3" className="w-6 h-6 text-blue-600" />,
    <Anchor key="icon-4" className="w-6 h-6 text-blue-600" />,
    <Factory key="icon-5" className="w-6 h-6 text-blue-600" />,
  ]

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
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                OUR COMPANY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">
                Engineering Excellence in <span className="text-[#f37021]">Every Flow</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                SSPR Valve Manufacturing Private Limited is an experienced manufacturer of industrial valves, serving critical applications across government and private projects. Based in Howrah, West Bengal, we specialize in delivering high-quality industrial valves, penstocks and flow control solutions for water treatment, irrigation, desalination, civil construction, sea water applications and infrastructure projects.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With modern manufacturing technology, strong engineering expertise and a commitment to ethical business practices, we build products that stand the test of time. Our focus on quality, reliability and customer satisfaction has made us a trusted partner for government bodies and leading private organizations across India.
              </p>

              <div className="pt-3">
                <div className="inline-block border-l-3 border-[#f37021] pl-3">
                  <span className="font-signature text-xl text-[#0d2857] italic">
                    Building A Better Tomorrow
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo with Badge (6 cols) */}
            <div className="lg:col-span-6 relative rounded-md overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/images/about/engineering_excellence.png"
                alt="Engineering Excellence in Every Flow"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-xs text-white p-3.5 rounded-md border border-white/20 max-w-[170px] text-right">
                <span className="text-[11px] font-extrabold block text-amber-400">RELIABLE</span>
                <span className="text-[11px] font-extrabold block">DURABLE</span>
                <span className="text-[9px] font-medium text-slate-300 block mt-1">HIGH PERFORMANCE BUILT FOR INDIA</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d2857]/90 to-transparent py-2.5 px-4 text-center text-[10px] font-extrabold tracking-wider text-white uppercase">
                INDUSTRIAL VALVES | FLOW CONTROL SOLUTIONS | MADE FOR A BETTER TOMORROW
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. A JOURNEY OF GROWTH & TRUST (TIMELINE) */}
      <section className="py-5 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              OUR JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              A Journey of <span className="text-[#f37021]">Growth & Trust</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              From a focused beginning to a trusted name in industrial valves, our journey is built on quality, innovation and long-term partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {companyData.timeline.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-4 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0d2857] group-hover:bg-[#f37021] group-hover:text-white transition-colors flex items-center justify-center font-extrabold text-sm mb-3">
                    {[<Factory key="factory"/>,<Settings key="settings"/>,<Users key="people"/>,<ChartNoAxesCombined key="growth"/>,<Cpu key="tech"/>,<Trophy key="today"/>][idx]}
                  </div>
                  <strong className="timeline-year">{step.year}</strong>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
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
      <section className="py-5 bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
              LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
              Message from Our <span className="text-[#f37021]">Managing Director</span>
            </h2>
          </div>

          <div className="bg-white rounded-md border border-slate-200 shadow-xs p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* MD Photo & Title (3 cols) */}
              <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="w-36 h-36 rounded-md overflow-hidden border-2 border-blue-900/20 shadow-md">
                  <img
                    src="/images/about/md_prasenjit_dey.png"
                    alt="Mr. Prasenjit Dey, Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-extrabold text-[#0d2857] mt-3">
                  Mr. Prasenjit Dey
                </h3>
                <span className="text-xs font-bold text-[#f37021]">
                  Managing Director
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  SSPR Valve Manufacturing Private Limited
                </span>
              </div>

              {/* MD Quote Text (6 cols) */}
              <div className="lg:col-span-6 space-y-3 relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-4 -left-2 -z-0" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative z-10">
                  "{companyData.md.shortQuote}"
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  We guide our business using five core values — <strong className="text-blue-900">lead, grow, deliver, sustain and protect</strong>. I give you my personal commitment that we will deliver what we promise and do it safely and sustainably.
                </p>
              </div>

              {/* MD Side Callout Card (3 cols) */}
              <div className="lg:col-span-3 bg-gradient-to-br from-[#0d2857] to-[#1a3d7c] rounded-md p-5 text-white flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-amber-400 font-serif text-3xl leading-none">“</span>
                  <h4 className="text-sm font-extrabold text-white leading-snug">
                    Reliable Flow for a Brighter Tomorrow
                  </h4>
                  <p className="text-[11px] text-slate-300 pt-1">
                    — Mr. Prasenjit Dey <br />
                    <span className="text-[10px] text-amber-300">Managing Director</span>
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                  <img
                    src="/images/about/refinery_art.png"
                    alt="Refinery graphics"
                    className="h-16 w-auto object-contain opacity-75"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. SUPPORTING CRITICAL SECTORS */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Supporting <span className="text-[#f37021]">Critical Sectors</span>
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-xs">
              Reliable Valves for a Stronger, More Sustainable Tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyData.sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-slate-50 p-4 rounded-md border border-slate-200 text-center hover:border-blue-400 hover:shadow-sm transition-all flex flex-col items-center justify-center group"
              >
                <div className="p-3 rounded-md bg-white shadow-2xs group-hover:scale-110 transition-transform mb-3">
                  {sectorsIcons[index]}
                </div>
                <h4 className="text-xs font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors line-clamp-2">
                  {sector.name}
                </h4>
              </div>
            ))}
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
