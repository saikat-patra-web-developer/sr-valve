import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import ClientsSection from '../components/ClientsSection'

export default function Clients() {
  useEffect(() => {
    document.title = 'Clients | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <div className="site-page page-clients">
      {/* 1. HERO BANNER */}
      <PageHero type="clients" />

      {/* 2. TRUSTED BY LEADING ORGANIZATIONS */}
      <ClientsSection subtitle="POWERING NATION BUILDING TOGETHER" />
    </div>
  )
}
