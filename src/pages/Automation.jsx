import { useEffect } from 'react'
import { Cpu, Network, Gauge, Sliders, Radio, ShieldCheck, Zap, Server } from 'lucide-react'
import ProjectSectorPage from '../components/ProjectSectorPage'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

const automationFeatures = [
  {
    icon: Zap,
    title: 'Actuator Technologies',
    description: 'Quarter-turn and multi-turn intelligent electric actuators, heavy-duty pneumatic scotch-yoke actuators, and electro-hydraulic actuators for penstocks and large valves.',
    details: ['Integral motor starters & solid-state relays', 'Local LCD display with non-intrusive setup', 'Manual handwheel override with auto-declutch', 'Torque and position limit sensing']
  },
  {
    icon: Radio,
    title: 'Telemetry & Protocols',
    description: 'Universal industrial connectivity enabling direct plug-and-play communication between field valves and central SCADA or DCS supervisory systems.',
    details: ['Modbus RTU / TCP & Profibus DP', '4–20 mA analog feedback with HART protocol', 'Ethernet/IP & Foundation Fieldbus', 'Solar-powered GSM/4G RTU for remote sites']
  },
  {
    icon: ShieldCheck,
    title: 'Fail-Safe Protection',
    description: 'Guaranteed emergency shutdown and surge suppression to protect vital pumps, treatment assets, and transmission pipelines during power interruptions.',
    details: ['Internal battery backup for emergency stroke', 'Spring-return mechanical fail-safe closure', 'Hydraulic accumulator power assist', 'Emergency Shutdown (ESD) interlock circuits']
  },
  {
    icon: Server,
    title: 'Harsh Environment Duty',
    description: 'Engineered for extreme operating environments across submerged chambers, chemical atmospheres, and outdoor remote installations.',
    details: ['IP68 submersible enclosure rating (up to 10m/72h)', 'ATEX / PESO explosion-proof certifications', 'C5-M marine heavy corrosion barrier coating', 'SIL-2 / SIL-3 functional safety rating']
  },
]

export default function Automation() {
  useEffect(() => {
    document.title = 'Valve Automation & SCADA | SSPR Valve Manufacturing Private Limited'
  }, [])

  return (
    <ProjectSectorPage
      heroType="automation"
      eyebrow="Smart Flow Control & Telemetry"
      title="Precision valve automation for"
      highlight="smart infrastructure."
      introduction="SSPR Valve delivers complete valve automation solutions combining rugged, high-performance industrial valves with electric, pneumatic, and electro-hydraulic actuators. Engineered for seamless integration into modern SCADA, PLC, and telemetry networks, our automated systems enable remote monitoring, scheduled modulation, emergency fail-safe shutoff, and automated surge management across water supply grids, wastewater treatment plants, and irrigation networks."
      image="/images/infra/projects/valve-automation-hero.webp"
      imageAlt="Automated industrial valve station with electric actuators and PLC control panel"
      badge="Turnkey valve actuation & SCADA connectivity"
      benefits={[
        'Multi-turn & quarter-turn electric actuation',
        'Seamless Modbus, Profibus & Ethernet integration',
        'Fail-safe battery & spring-return emergency shutoff',
        'Precision modulating control with digital telemetry',
      ]}
      applications={[
        {
          icon: Cpu,
          title: 'SCADA & Remote Telemetry',
          text: 'Centralized control room supervision with real-time valve position feedback, torque monitoring, and automated alarm diagnostics.',
        },
        {
          icon: Network,
          title: 'Smart Water Grids & DMA',
          text: 'District Metered Area flow regulation, automated pressure control, and non-revenue water (NRW) reduction schemes.',
        },
        {
          icon: Gauge,
          title: 'Pumping & Surge Protection',
          text: 'Automated pump discharge valves with synchronized opening and closing cycles to prevent destructive water hammer.',
        },
        {
          icon: Sliders,
          title: 'Treatment Plant Sequencing',
          text: 'Automated filter backwash, inlet isolation, chemical dosing, and clarifier discharge control in modern WTP and STP facilities.',
        },
      ]}
      products={[
        {
          id: 'butterfly-valve',
          name: 'Motorized Butterfly Valves',
          use: 'High-capacity quarter-turn automated flow regulation and pump discharge control.',
          image: '/images/products/butterfly_valve_flange.webp',
        },
        {
          id: 'sluice-valve',
          name: 'Motorized Sluice Valves',
          use: 'Heavy-duty multi-turn electric actuation for raw water and transmission mains.',
          image: '/images/products/sluice_valve_rising_gear.webp',
        },
        {
          id: 'check-valve',
          name: 'Hydraulic Non Return Valves',
          use: 'Counterweight and hydraulic cylinder assisted non-slam pump check valves.',
          image: '/images/products/check_valve_single_door.webp',
        },
        {
          id: 'air-valve',
          name: 'Surge Protection Air Valves',
          use: 'Critical vacuum protection and air management on automated transmission pipelines.',
          image: '/images/products/air_valve_s1.webp',
        },
      ]}
      gallery={[
        {
          image: '/images/infra/projects/valve-automation-hero.webp',
          alt: 'Automated valve manifold with PLC panel',
          caption: 'Motorized valve station & PLC controls',
        },
        {
          image: '/images/infra/projects/smart-valve-actuator.webp',
          alt: 'Intelligent electric actuator with digital display',
          caption: 'Intelligent actuator & digital positioning',
        },
        {
          image: '/images/infra/projects/scada-control-room.webp',
          alt: 'SCADA control room for municipal water network',
          caption: 'Centralized SCADA telemetry & monitoring',
        },
      ]}
      ctaTitle="Planning an automated valve installation or retrofit?"
      ctaText="Discuss actuator sizing, operating torque, communication protocols and control panel requirements with our automation specialists."
    >
      <section className="bg-white py-12 sm:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold text-[#f37021] tracking-[0.24em] uppercase">Control Architecture</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0d2857]">Engineered for complete automation & telemetry</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Our automated packages integrate directly with standard industrial protocols, providing plant operators and field engineers with total remote visibility and actuation reliability.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <StaggerItem
                  key={feat.title}
                  hoverEffect={true}
                  as="div"
                  className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#0d2857] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#f37021]" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0d2857]">{feat.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                  <ul className="mt-4 pt-4 border-t border-slate-200/80 space-y-2">
                    {feat.details.map((item) => (
                      <li key={item} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f37021] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </ProjectSectorPage>
  )
}
