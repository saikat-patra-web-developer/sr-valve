import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Cpu, Droplets, Factory, Sprout } from 'lucide-react'
import PageHero from '../components/PageHero'

const sectors = [
  { title: 'Water Supply Projects', path: '/experience/water-supply-project', image: '/images/infra/projects/treatment-plant-overview.webp', icon: Droplets, description: 'Valve solutions for intake works, treatment plants, pumping stations, transmission mains and municipal distribution networks.', highlights: ['Urban & rural water schemes', 'Treatment and pumping systems', 'Large-diameter flow control'] },
  { title: 'Wastewater Projects', path: '/experience/waste-water-project', image: '/images/infra/projects/clarifier-installation.webp', icon: Factory, description: 'Reliable isolation, regulation and pump protection across sewage, effluent and water-reuse infrastructure.', highlights: ['Sewage treatment plants', 'Industrial effluent systems', 'Corrosion-resistant solutions'] },
  { title: 'Irrigation Projects', path: '/experience/irrigation-projects', image: '/images/infra/projects/pipeline-valves-site.webp', icon: Sprout, description: 'High-capacity valves engineered for lift irrigation, dams, canal networks and agricultural distribution systems.', highlights: ['Lift irrigation schemes', 'Dams, barrages and canals', 'High-flow pipeline applications'] },
  { title: 'Valve Automation & SCADA', path: '/experience/automation', image: '/images/infra/projects/valve-automation-hero.webp', icon: Cpu, description: 'Electric, pneumatic and electro-hydraulic valve actuation integrated with PLC/SCADA systems for smart, remote flow management.', highlights: ['Electric & pneumatic actuators', 'SCADA & PLC network integration', 'Automated surge & level control'] },
]

export default function Experience() {
  useEffect(() => { document.title = 'Experience | SSPR Valve Manufacturing Private Limited' }, [])
  return (
    <div className="site-page page-experience">
      <PageHero type="experience" />
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-9"><span className="text-[11px] font-bold text-slate-400 tracking-[0.24em] uppercase">Project experience</span><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Supporting essential infrastructure sectors</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map(({ title, path, image, icon: Icon, description, highlights }) => <article key={path} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"><Link to={path} className="block h-56 overflow-hidden bg-slate-100"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></Link><div className="p-6"><div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center -mt-11 relative mb-5 shadow-lg border-4 border-white box-content"><Icon className="w-5 h-5 text-white" /></div><h3 className="text-xl font-extrabold text-[#0d2857]">{title}</h3><p className="mt-3 text-sm text-slate-600 leading-6">{description}</p><div className="mt-4 space-y-2">{highlights.map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#f37021]" />{item}</div>)}</div><Link to={path} className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-[#0d2857] group-hover:text-[#f37021] transition-colors">Explore sector experience <ArrowRight className="w-4 h-4" /></Link></div></article>)}
          </div>
        </div>
      </section>
      <section className="bg-[#0d2857] text-white py-10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6"><div><h2 className="text-2xl font-extrabold">Let our experience support your next project</h2><p className="mt-2 text-sm text-slate-300">Discuss project conditions, valve selection and technical requirements with our engineering team.</p></div><Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#dc5d13] text-white font-bold px-6 py-3 rounded-lg transition-colors shrink-0">Discuss Your Project <ArrowRight className="w-4 h-4" /></Link></div></section>
    </div>
  )
}
