import { useEffect } from 'react'
import PageHero from '../components/PageHero'

export default function Clients() {
  useEffect(() => {
    document.title = 'Clients | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-clients">
      {/* 1. HERO BANNER */}
      <PageHero type="clients" />

      {/* 2. BLANK CONTENT SECTION */}
      <section className="py-20 bg-white min-h-[400px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p className="text-base font-medium">Clients content coming soon.</p>
        </div>
      </section>
    </div>
  )
}
