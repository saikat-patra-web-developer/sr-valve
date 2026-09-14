import PageHero from '../components/PageHero'
import React, { useState } from 'react'

import { MapPin, Mail, Phone, Clock, ExternalLink, Plus, Minus, ArrowRight, Headphones, Wrench, ShieldCheck, Users } from 'lucide-react'
import { companyData } from '../data/companyData'
import { faqData } from '../data/faqData'

import InfrastructureStrip from '../components/InfrastructureStrip'

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="site-page page-contact">
      
      {/* 1. HERO BANNER */}
      <PageHero type="contact" />

      {/* 2. CONTACT INFORMATION & LIVE LOCATION */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="contact-details" className="contact-information space-y-6">
              
              <div>
                <h2 className="text-2xl font-extrabold text-[#0d2857]">
                  Our Contact <span className="text-[#f37021]">Information</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Reach out to us through any of the channels below. Our team is ready to help with your valve solutions.
                </p>
              </div>

              {/* Contact details */}
              <div className="contact-details-grid grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="flex items-start gap-4 p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0d2857] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Office / Works Address
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {companyData.contact.address}
                    </p>
                  </div>
                </div>

                <div className="contact-channels-card p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="contact-channel">
                    <div className="contact-channel-icon">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-800">Email Address</h4>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="text-xs font-semibold text-blue-700 hover:text-[#f37021] transition-colors mt-0.5 block break-all"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-channel">
                    <div className="contact-channel-icon">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-800">Mobile Number</h4>
                      <a
                        href={`tel:${companyData.contact.phone}`}
                        className="text-xs font-semibold text-blue-700 hover:text-[#f37021] transition-colors mt-0.5 block"
                      >
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0d2857] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Working Hours
                    </h4>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5">
                      {companyData.contact.hours}
                    </p>
                    <span className="text-[10px] text-slate-500 block">
                      {companyData.contact.closedNotice}
                    </span>
                  </div>
                </div>

              </div>

              {/* Map Card */}
              <div className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-2xs">
                <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0d2857]">
                    <MapPin className="w-4 h-4 text-[#f37021]" />
                    <span>Our Location</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SSPR%20Valve%20manufacturing%20Pvt.%20Ltd.%2C%20Domjur%2C%20Howrah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-[#f37021] transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="contact-map-frame">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.526745983605!2d88.20086777560066!3d22.63414117944802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f88169e6beb04f%3A0xa066de3838f88a7!2sSSPR%20Valve%20manufacturing%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1789290660685!5m2!1sen!2sin"
                    title="SSPR Valve Manufacturing Private Limited location"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
          </div>

        </div>
      </section>

      {/* 3. QUICK CONTACT - GET IN TOUCH FOR SPECIFIC SUPPORT (3 CARDS) */}
      <section className="py-5 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-3 pb-3 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2857]">
              Quick Contact — <span className="text-[#f37021]">Get in Touch for Specific Support</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sales Support */}
            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-2xs hover:border-blue-400 transition-all space-y-2">
              <div className="w-12 h-12 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#0d2857]">
                Sales Support
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                For product inquiries, quotations and order-related queries.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`mailto:${companyData.contact.email}?subject=Sales%20Inquiry`}
                  className="text-xs font-bold text-blue-700 hover:text-[#f37021] transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Technical Assistance */}
            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-2xs hover:border-blue-400 transition-all space-y-2">
              <div className="w-12 h-12 rounded-md bg-amber-50 text-[#f37021] flex items-center justify-center mb-3">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#0d2857]">
                Technical Assistance
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                For technical discussions, product selection and application support.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`mailto:${companyData.contact.email}?subject=Technical%20Assistance`}
                  className="text-xs font-bold text-blue-700 hover:text-[#f37021] transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-2xs hover:border-blue-400 transition-all space-y-2">
              <div className="w-12 h-12 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#0d2857]">
                General Inquiries
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                For any other questions or support, our team is happy to help.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-xs font-bold text-blue-700 hover:text-[#f37021] transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{companyData.contact.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857] mt-1">
                Quick Answers to <span className="text-[#f37021]">Help You</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50 rounded-md border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-[#0d2857] hover:text-[#f37021] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 shrink-0 text-[#f37021]" />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5. HAVE A PROJECT IN MIND CTA BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have a <span className="text-[#f37021]">Project</span> in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Let's discuss how our valve solutions can support your business with high durability and on-time project execution.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${companyData.contact.email}?subject=Project%20Inquiry`}
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <Wrench className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold text-[10px] block">ENGINEERING EXCELLENCE</span>
              </div>
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold text-[10px] block">RELIABLE PRODUCTS</span>
              </div>
              <div className="bg-white/10 p-3 rounded-md border border-white/10">
                <Users className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="font-bold text-[10px] block">LONG-TERM PARTNERSHIPS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE 4-PHOTO STRIP */}
      <InfrastructureStrip />

    </div>
  )
}
