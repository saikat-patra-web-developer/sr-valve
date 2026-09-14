import { useEffect } from 'react'
import PageHero from '../components/PageHero'

export default function CustomerSupport() {
  useEffect(() => {
    document.title = 'Customer Support | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-customer-support">
      {/* 1. HERO BANNER */}
      <PageHero type="customerSupport" />

      {/* 2. BLANK CONTENT SECTION */}
      <section className="py-20 bg-white min-h-[400px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p className="text-base font-medium">Customer Support content coming soon.</p>
        </div>
      </section>
    </div>
  )
}
