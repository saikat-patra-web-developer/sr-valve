import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react'
import PageHero from './PageHero'

export default function ProjectSectorPage({ heroType, eyebrow, title, highlight, introduction, image, imageAlt, badge, applications, products, benefits, gallery, ctaTitle, ctaText, children }) {
  return (
    <div className={`site-page page-${heroType}`}>
      <PageHero type={heroType} />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">{eyebrow}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0d2857] leading-tight">{title} <span className="text-[#f37021]">{highlight}</span></h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">{introduction}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />{benefit}</div>)}
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100">
                <img src={image} alt={imageAlt} className="w-full h-[360px] sm:h-[460px] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-4 sm:left-8 bg-[#0d2857] text-white rounded-xl px-5 py-4 shadow-xl max-w-[300px]">
                <p className="text-sm font-bold leading-snug">{badge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-9">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Project applications</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Solutions across critical infrastructure</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map(({ icon: Icon, title: appTitle, text }) => (
              <article key={appTitle} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-white" /></div>
                <h3 className="text-base font-extrabold text-[#0d2857]">{appTitle}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Recommended valve range</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight">Engineered for the application</h2>
              <p className="mt-4 text-sm text-slate-600 leading-6">Our team helps select the appropriate valve type, size, pressure rating, materials and operating arrangement for each project duty.</p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d2857] hover:text-[#f37021] transition-colors">Explore all products <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="group flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="w-24 h-24 rounded-lg bg-white border border-slate-200 p-2 shrink-0"><img src={product.image} alt={product.name} className="w-full h-full object-contain" /></div>
                  <div className="min-w-0"><h3 className="font-extrabold text-[#0d2857] group-hover:text-[#f37021] transition-colors">{product.name}</h3><p className="mt-1 text-sm text-slate-600 leading-5">{product.use}</p><span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0d2857]">View details <ArrowRight className="w-3 h-3" /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7"><span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Project environments</span><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Built for real operating conditions</h2></div>
          <div className="grid sm:grid-cols-3 gap-4">
            {gallery.map((photo) => <figure key={photo.image} className="relative overflow-hidden rounded-xl bg-slate-900 shadow-md h-64 sm:h-72"><img src={photo.image} alt={photo.alt} className="w-full h-full object-cover opacity-90 hover:scale-105 hover:opacity-100 transition-all duration-500" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-4 pt-12 pb-4 text-sm font-bold text-white">{photo.caption}</figcaption></figure>)}
          </div>
        </div>
      </section>
      {children}

      <section className="bg-[#0d2857] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl"><PhoneCall className="w-9 h-9 text-[#f37021] shrink-0 mt-1" /><div><h2 className="text-2xl font-extrabold">{ctaTitle}</h2><p className="mt-2 text-sm text-slate-300 leading-6">{ctaText}</p></div></div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors shrink-0">Discuss Your Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  )
}
