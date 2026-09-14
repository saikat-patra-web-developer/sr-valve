import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ZoomIn, X } from 'lucide-react'
import { productsData } from '../data/productsData'
import ResponsiveImage from '../components/ResponsiveImage'
import NotFound from './NotFound'

const sluiceValveSections = [
  {
    id: "metal-seated",
    sectionTitle: "Metal Seated Sluice Valve",
    subItems: [
      {
        title: "Non Rising Stem Sluice Valve",
        images: [
          "/images/products/sluice_valve_non_rising_1.webp",
          "/images/products/sluice_valve_non_rising_2.webp",
        ],
        rows: [
          { label: "Size Range", value: "50 mm to 2000 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6, PN 2.0, PN 2.5, Class 150, Class 300" },
          { label: "Design Standard", value: "IS: 14846" },
          { label: "Testing Standard", value: "IS: 14846 : 2000 Clause 10" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "Gear, actuator, by-pass arrangement, shoe & channel, head stock" },
        ],
      },
      {
        title: "Rising Stem Sluice Valve",
        images: [
          "/images/products/sluice_valve_rising_gear.webp",
          "/images/products/sluice_valve_rising_handwheel.webp",
        ],
        rows: [
          { label: "Size Range", value: "50 mm to 1200 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6" },
          { label: "Design Standard", value: "IS: 14846" },
          { label: "Testing Standard", value: "IS: 14846 : 2000 Clause 10" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "Gear, actuator, by-pass arrangement, shoe & channel, head stock" },
        ],
      },
    ],
  },
  {
    id: "resilient-seated",
    sectionTitle: "Resilient Seated Sluice Valve",
    subItems: [
      {
        title: null,
        images: [
          "/images/products/sluice_valve_resilient_1.webp",
          "/images/products/sluice_valve_resilient_2.webp",
        ],
        rows: [
          { label: "Size Range", value: "50 mm to 1200 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6" },
          { label: "Design Standard", value: "BS 5163" },
          { label: "Testing Standard", value: "BS 5163" },
          { label: "Flange Standard", value: "BS / IS" },
          { label: "Material", value: "DI" },
          { label: "Accessories", value: "Gear, actuator" },
        ],
      },
    ],
  },
]

const butterflyValveSections = [
  {
    id: "flange-end",
    sectionTitle: "Flange End Butterfly Valve",
    subItems: [
      {
        title: null,
        image: "/images/products/butterfly_valve_flange.webp",
        rows: [
          { label: "Size Range", value: "100 mm to 2000 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6, PN 2.0, 2.5" },
          { label: "Design Standard", value: "IS 13095" },
          { label: "Testing Standard", value: "IS: 13095" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "Gear, actuator" },
        ],
      },
    ],
  },
  {
    id: "wafer-type",
    sectionTitle: "Wafer Type Butterfly Valve",
    subItems: [
      {
        title: null,
        image: "/images/products/butterfly_valve_wafer.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 400 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6" },
          { label: "Design Standard", value: "BS 5155, IS 13095, AWWA C-504" },
          { label: "Testing Standard", value: "IS: 13095" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "Gear, actuator, lever" },
        ],
      },
    ],
  },
]

const checkValveSections = [
  {
    id: "single-door",
    sectionTitle: "Single Door Non Return Valve",
    subItems: [
      {
        title: null,
        image: "/images/products/check_valve_single_door.webp",
        rows: [
          { label: "Size Range", value: "50 mm to 600 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6, PN 2.0, PN 2.5, Class 150, Class 300" },
          { label: "Design Standard", value: "IS 5312 Part-I, BS 1868, AWWA C-508" },
          { label: "Testing Standard", value: "IS 5312" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "By-pass arrangement, Hydraulic" },
        ],
      },
    ],
  },
  {
    id: "multi-door",
    sectionTitle: "Multi Door Non Return Valve",
    subItems: [
      {
        title: null,
        image: "/images/products/check_valve_multi_door.webp",
        rows: [
          { label: "Size Range", value: "700 mm to 1500 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6 & PN 2.0" },
          { label: "Design Standard", value: "IS 5312, Part-II" },
          { label: "Testing Standard", value: "IS 5312" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
          { label: "Accessories", value: "By-pass arrangement" },
        ],
      },
    ],
  },
  {
    id: "dual-plate",
    sectionTitle: "Dual Plate Check Valve",
    subItems: [
      {
        title: null,
        image: "/images/products/check_valve_dual_plate.webp",
        rows: [
          { label: "Size Range", value: "50 mm to 2000 mm" },
          { label: "Pressure Rating", value: "PN 1.0, PN 1.6, PN 2.0, PN 2.5, Class 150, Class 300" },
          { label: "Design Standard", value: "API 594 / API 6D" },
          { label: "Testing Standard", value: "API 598" },
          { label: "Flange Standard", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
    ],
  },
]

const airValveSections = [
  {
    id: "single-air-valve",
    sectionTitle: "Single Air Valve",
    subItems: [
      {
        id: "s1",
        title: "Small Orifice - S1",
        image: "/images/products/air_valve_s1.webp",
        rows: [
          { label: "Size Range", value: "15 mm to 40 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "IS: 14845 (S1)" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Ends", value: "Screwed" },
          { label: "Material", value: "CI / DI" },
        ],
      },
      {
        id: "s2",
        title: "Large Orifice - S2",
        image: "/images/products/air_valve_s2.webp",
        rows: [
          { label: "Size Range", value: "25 mm to 50 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "IS: 14845 (S2) / G&K (H-4)" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Ends", value: "Screwed / Flange" },
          { label: "Material", value: "CI / DI" },
        ],
      },
    ],
  },
  {
    id: "double-acting",
    sectionTitle: "Double Acting Air Valve",
    subItems: [
      {
        id: "ds1",
        title: "Inbuilt Isolating Valve – DS1",
        image: "/images/products/air_valve_ds1.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 200 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "IS: 14845" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Flange Ends", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
      {
        id: "ds2",
        title: "Double Air Valve – DS2",
        image: "/images/products/air_valve_ds2.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 200 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "IS: 14845 (DS2) / G&K (H-7)" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Flange Ends", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
    ],
  },
  {
    id: "kinetic-double-acting",
    sectionTitle: "Kinetic Double Acting Air Valve",
    subItems: [
      {
        id: "dk",
        title: "Kinetic Double Acting - DK",
        image: "/images/products/air_valve_dk.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 300 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "IS: 14845 (DK) / G&K (H-42K)" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Flange Ends", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
    ],
  },
  {
    id: "tamper-proof",
    sectionTitle: "Tamper Proof Air Valve",
    subItems: [
      {
        id: "single-chamber",
        title: "Double Acting Triple Function (Single Chamber)",
        image: "/images/products/air_valve_single_chamber.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 400 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "AWWA C-512" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Flange Ends", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
      {
        id: "double-chamber",
        title: "Double Acting Triple Function (Double Chamber)",
        image: "/images/products/air_valve_double_chamber.webp",
        rows: [
          { label: "Size Range", value: "40 mm to 400 mm" },
          { label: "Pressure Rating", value: "PN 1.0 & PN 1.6" },
          { label: "Design Standard", value: "AWWA C-512" },
          { label: "Testing Standard", value: "IS: 14845" },
          { label: "Flange Ends", value: "BS / IS / ANSI / DIN" },
          { label: "Material", value: "CI / DI / CS" },
        ],
      },
    ],
  },
]

export default function ProductDetail() {
  const { id } = useParams()

  const isMetalSeated = id === 'metal-seated-sluice-valve' || id === 'sluice-valve'
  const isResilientSeated = id === 'resilient-seated-sluice-valve'
  const isSluiceFamily = isMetalSeated || isResilientSeated

  const isFlangeEnd = id === 'flange-end-butterfly-valve' || id === 'butterfly-valve'
  const isWaferType = id === 'wafer-type-butterfly-valve' || id === 'wafer-end-butterfly-valve'
  const isButterflyFamily = isFlangeEnd || isWaferType

  const isSingleDoor = id === 'single-door-check-valve' || id === 'single-door-non-return-valve' || id === 'check-valve'
  const isMultiDoor = id === 'multi-door-check-valve' || id === 'multi-door-non-return-valve'
  const isDualPlate = id === 'dual-plate-check-valve' || id === 'dual-plate-non-return-valve'
  const isCheckFamily = isSingleDoor || isMultiDoor || isDualPlate

  const isSingleAir =
    id === 'single-air-valve' || id === 'air-valve' || id === 's1' || id === 's2'
  const isDoubleActing =
    id === 'double-acting-air-valve' || id === 'double-acting' || id === 'ds1' || id === 'ds2'
  const isKinetic =
    id === 'kinetic-double-acting-air-valve' || id === 'kinetic-double-acting' || id === 'dk'
  const isTamperProof =
    id === 'tamper-proof-air-valve' ||
    id === 'tamper-proof' ||
    id === 'single-chamber' ||
    id === 'double-chamber'

  const isAirFamily = isSingleAir || isDoubleActing || isKinetic || isTamperProof

  const baseProduct = productsData.find(
    (p) =>
      p.id ===
      (isSluiceFamily
        ? 'sluice-valve'
        : isButterflyFamily
        ? 'butterfly-valve'
        : isCheckFamily
        ? 'check-valve'
        : isAirFamily
        ? 'air-valve'
        : id)
  )

  const product = isResilientSeated && baseProduct
    ? {
        ...baseProduct,
        id: 'resilient-seated-sluice-valve',
        name: 'Resilient Seated Sluice Valve',
        fullName: 'Resilient Seated Sluice Valve',
        tagline: 'Resilient Seated Gate Valve (BS 5163)',
        image: '/images/products/sluice_valve_resilient_1.webp',
        detailMainImage: '/images/products/sluice_valve_resilient_1.webp',
        thumbnails: ['/images/products/sluice_valve_resilient_1.webp', '/images/products/sluice_valve_resilient_2.webp'],
      }
    : isMetalSeated && baseProduct
    ? {
        ...baseProduct,
        id: 'metal-seated-sluice-valve',
        name: 'Metal Seated Sluice Valve',
        fullName: 'Metal Seated Sluice Valve',
        tagline: 'Metal Seated Gate Valve (IS: 14846)',
        image: '/images/products/sluice_valve_non_rising_1.webp',
        detailMainImage: '/images/products/sluice_valve_non_rising_1.webp',
        thumbnails: ['/images/products/sluice_valve_non_rising_1.webp', '/images/products/sluice_valve_non_rising_2.webp', '/images/products/sluice_valve_rising_gear.webp', '/images/products/sluice_valve_rising_handwheel.webp'],
      }
    : isFlangeEnd && baseProduct
    ? {
        ...baseProduct,
        id: 'flange-end-butterfly-valve',
        name: 'Flange End Butterfly Valve',
        fullName: 'Flange End Butterfly Valve',
        tagline: 'Double Flanged Butterfly Valve (IS 13095)',
        image: '/images/products/butterfly_valve_flange.webp',
        detailMainImage: '/images/products/butterfly_valve_flange.webp',
        thumbnails: ['/images/products/butterfly_valve_flange.webp'],
      }
    : isWaferType && baseProduct
    ? {
        ...baseProduct,
        id: 'wafer-type-butterfly-valve',
        name: 'Wafer Type Butterfly Valve',
        fullName: 'Wafer Type Butterfly Valve',
        tagline: 'Wafer Type Butterfly Valve (BS 5155 / IS 13095 / AWWA C-504)',
        image: '/images/products/butterfly_valve_wafer.webp',
        detailMainImage: '/images/products/butterfly_valve_wafer.webp',
        thumbnails: ['/images/products/butterfly_valve_wafer.webp'],
      }
    : isSingleDoor && baseProduct
    ? {
        ...baseProduct,
        id: 'single-door-check-valve',
        name: 'Single Door Non Return Valve',
        fullName: 'Single Door Non Return Valve',
        tagline: 'Single Door Swing Check Valve (IS 5312 Part-I / BS 1868)',
        image: '/images/products/check_valve_single_door.webp',
        detailMainImage: '/images/products/check_valve_single_door.webp',
        thumbnails: ['/images/products/check_valve_single_door.webp'],
      }
    : isMultiDoor && baseProduct
    ? {
        ...baseProduct,
        id: 'multi-door-check-valve',
        name: 'Multi Door Non Return Valve',
        fullName: 'Multi Door Non Return Valve',
        tagline: 'Multi Door Swing Check Valve (IS 5312 Part-II)',
        image: '/images/products/check_valve_multi_door.webp',
        detailMainImage: '/images/products/check_valve_multi_door.webp',
        thumbnails: ['/images/products/check_valve_multi_door.webp'],
      }
    : isDualPlate && baseProduct
    ? {
        ...baseProduct,
        id: 'dual-plate-check-valve',
        name: 'Dual Plate Check Valve',
        fullName: 'Dual Plate Check Valve',
        tagline: 'Dual Plate Wafer / Flanged Check Valve (API 594 / API 6D)',
        image: '/images/products/check_valve_dual_plate.webp',
        detailMainImage: '/images/products/check_valve_dual_plate.webp',
        thumbnails: ['/images/products/check_valve_dual_plate.webp'],
      }
    : isSingleAir && baseProduct
    ? {
        ...baseProduct,
        id: 'single-air-valve',
        name: 'Single Air Valve',
        fullName: 'Single Air Valve (S1 / S2)',
        tagline: 'Single Orifice Air Release Valve (IS: 14845)',
        image: '/images/products/air_valve_s1.webp',
        detailMainImage: '/images/products/air_valve_s1.webp',
        thumbnails: ['/images/products/air_valve_s1.webp', '/images/products/air_valve_s2.webp'],
      }
    : isDoubleActing && baseProduct
    ? {
        ...baseProduct,
        id: 'double-acting-air-valve',
        name: 'Double Acting Air Valve',
        fullName: 'Double Acting Air Valve (DS1 / DS2)',
        tagline: 'Double Acting Air Valve with Isolating Valve (IS: 14845)',
        image: '/images/products/air_valve_ds1.webp',
        detailMainImage: '/images/products/air_valve_ds1.webp',
        thumbnails: ['/images/products/air_valve_ds1.webp', '/images/products/air_valve_ds2.webp'],
      }
    : isKinetic && baseProduct
    ? {
        ...baseProduct,
        id: 'kinetic-double-acting-air-valve',
        name: 'Kinetic Double Acting Air Valve',
        fullName: 'Kinetic Double Acting Air Valve (DK)',
        tagline: 'Kinetic Double Acting Air Release Valve (IS: 14845 / G&K)',
        image: '/images/products/air_valve_dk.webp',
        detailMainImage: '/images/products/air_valve_dk.webp',
        thumbnails: ['/images/products/air_valve_dk.webp'],
      }
    : isTamperProof && baseProduct
    ? {
        ...baseProduct,
        id: 'tamper-proof-air-valve',
        name: 'Tamper Proof Air Valve',
        fullName: 'Tamper Proof Air Valve',
        tagline: 'Double Acting Triple Function Tamper Proof Air Valve (AWWA C-512)',
        image: '/images/products/air_valve_single_chamber.webp',
        detailMainImage: '/images/products/air_valve_single_chamber.webp',
        thumbnails: ['/images/products/air_valve_single_chamber.webp', '/images/products/air_valve_double_chamber.webp'],
      }
    : baseProduct

  const [selection, setSelection] = useState({ productId: null, index: -1 })
  const [zoomOpen, setZoomOpen] = useState(false)
  const [zoomModalImage, setZoomModalImage] = useState(null)

  if (!product) {
    return <NotFound />
  }

  const activeThumb = selection.productId === product.id ? selection.index : -1
  const selectedImage = product.thumbnails?.[activeThumb] || product.detailMainImage || product.image

  const displayedSluiceSections = isResilientSeated
    ? sluiceValveSections.filter((s) => s.id === 'resilient-seated')
    : isMetalSeated
    ? sluiceValveSections.filter((s) => s.id === 'metal-seated')
    : sluiceValveSections

  const displayedButterflySections = isWaferType
    ? butterflyValveSections.filter((s) => s.id === 'wafer-type')
    : isFlangeEnd
    ? butterflyValveSections.filter((s) => s.id === 'flange-end')
    : butterflyValveSections

  const displayedCheckSections = isSingleDoor
    ? checkValveSections.filter((s) => s.id === 'single-door')
    : isMultiDoor
    ? checkValveSections.filter((s) => s.id === 'multi-door')
    : isDualPlate
    ? checkValveSections.filter((s) => s.id === 'dual-plate')
    : checkValveSections

  const displayedAirSections = isSingleAir
    ? airValveSections.filter((s) => s.id === 'single-air-valve')
    : isDoubleActing
    ? airValveSections.filter((s) => s.id === 'double-acting')
    : isKinetic
    ? airValveSections.filter((s) => s.id === 'kinetic-double-acting')
    : isTamperProof
    ? airValveSections.filter((s) => s.id === 'tamper-proof')
    : airValveSections

  const isThemeSpecPage = isSluiceFamily || isButterflyFamily || isCheckFamily || isAirFamily
  const themeSpecSections = isSluiceFamily
    ? displayedSluiceSections
    : isButterflyFamily
    ? displayedButterflySections
    : isCheckFamily
    ? displayedCheckSections
    : displayedAirSections

  // Related products
  const allCatalogProducts = [
    {
      id: 'metal-seated-sluice-valve',
      name: 'Metal Seated Sluice Valve',
      image: '/images/products/sluice_valve_non_rising_1.webp',
    },
    {
      id: 'resilient-seated-sluice-valve',
      name: 'Resilient Seated Sluice Valve',
      image: '/images/products/sluice_valve_resilient_1.webp',
    },
    {
      id: 'flange-end-butterfly-valve',
      name: 'Flange End Butterfly Valve',
      image: '/images/products/butterfly_valve_flange.webp',
    },
    {
      id: 'wafer-type-butterfly-valve',
      name: 'Wafer Type Butterfly Valve',
      image: '/images/products/butterfly_valve_wafer.webp',
    },
    {
      id: 'single-door-check-valve',
      name: 'Single Door Non Return Valve',
      image: '/images/products/check_valve_single_door.webp',
    },
    {
      id: 'multi-door-check-valve',
      name: 'Multi Door Non Return Valve',
      image: '/images/products/check_valve_multi_door.webp',
    },
    {
      id: 'dual-plate-check-valve',
      name: 'Dual Plate Check Valve',
      image: '/images/products/check_valve_dual_plate.webp',
    },
    {
      id: 'single-air-valve',
      name: 'Single Air Valve',
      image: '/images/products/air_valve_s1.webp',
    },
    {
      id: 'double-acting-air-valve',
      name: 'Double Acting Air Valve',
      image: '/images/products/air_valve_ds1.webp',
    },
    {
      id: 'kinetic-double-acting-air-valve',
      name: 'Kinetic Double Acting Air Valve',
      image: '/images/products/air_valve_dk.webp',
    },
    {
      id: 'tamper-proof-air-valve',
      name: 'Tamper Proof Air Valve',
      image: '/images/products/air_valve_single_chamber.webp',
    },
  ]

  const currentEffectiveId = isResilientSeated
    ? 'resilient-seated-sluice-valve'
    : isMetalSeated
    ? 'metal-seated-sluice-valve'
    : isWaferType
    ? 'wafer-type-butterfly-valve'
    : isFlangeEnd
    ? 'flange-end-butterfly-valve'
    : isSingleDoor
    ? 'single-door-check-valve'
    : isMultiDoor
    ? 'multi-door-check-valve'
    : isDualPlate
    ? 'dual-plate-check-valve'
    : isSingleAir
    ? 'single-air-valve'
    : isDoubleActing
    ? 'double-acting-air-valve'
    : isKinetic
    ? 'kinetic-double-acting-air-valve'
    : isTamperProof
    ? 'tamper-proof-air-valve'
    : product.id

  const relatedProducts = allCatalogProducts.filter((p) => p.id !== currentEffectiveId).slice(0, 6)

  return (
    <div className="site-page page-detail">
      
      <div className="product-banner"><div><h2>Our Products</h2><p>High-Performance Valves for a More Reliable Tomorrow.</p></div></div>
      {isThemeSpecPage ? (
        <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-6 pb-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Theme Specification Layout */}
            <div className="space-y-12">
              {themeSpecSections.map((section, sIdx) => (
                <div key={sIdx} id={section.id} className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm scroll-mt-24">
                  {/* Section Title (Centered & Underlined in Theme Style) */}
                  <h2 className="theme-doc-title">
                    {section.sectionTitle}
                  </h2>

                  <div className="space-y-12">
                    {section.subItems.map((item, iIdx) => (
                      <div key={iIdx} id={item.id} className="scroll-mt-28">
                        {/* 2-Column Grid: Picture on Left, Table on Right - perfectly aligned */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                          {/* Left Column: Picture */}
                          <div className="lg:col-span-5 flex flex-col">
                            {item.title && (
                              <div className="theme-doc-subtitle invisible select-none hidden lg:block" aria-hidden="true">
                                {item.title}
                              </div>
                            )}
                            <div className="relative flex-1 bg-gradient-to-b from-slate-50/50 to-white rounded-xl border border-slate-200/90 p-4 flex flex-col items-center justify-center w-full shadow-2xs group hover:border-blue-300 hover:shadow-sm transition-all duration-200 min-h-[310px]">
                              <div className={`w-full grid ${(item.images || [item.image]).length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                                {(item.images || [item.image]).map((image, imageIdx) => (
                                  <button
                                    key={image}
                                    type="button"
                                    onClick={() => setZoomModalImage(image)}
                                    className="min-w-0 rounded-lg border border-slate-200 bg-white p-2 cursor-zoom-in hover:border-blue-300 transition-colors"
                                    aria-label={`Zoom ${item.title || section.sectionTitle} view ${imageIdx + 1}`}
                                  >
                                    <ResponsiveImage
                                      src={image}
                                      alt={`${item.title || section.sectionTitle}${(item.images || []).length > 1 ? ` - view ${imageIdx + 1}` : ''}`}
                                      className="h-56 w-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                                    />
                                  </button>
                                ))}
                              </div>
                              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                                <ZoomIn className="w-3.5 h-3.5 text-[#f37021]" />
                                Click an image to zoom
                              </span>
                            </div>
                          </div>

                          {/* Right Column: Title + Specification Table */}
                          <div className="lg:col-span-7 flex flex-col">
                            {/* Sub-item Title (Positioned directly above Table) */}
                            {item.title && (
                              <h3 className="theme-doc-subtitle">
                                {item.title}
                              </h3>
                            )}
                            <div className="theme-spec-wrapper overflow-x-auto flex-1 flex flex-col rounded-xl">
                              <table className="theme-spec-table w-full h-full">
                                <tbody>
                                  {item.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                      <td className="param-label">{row.label}</td>
                                      <td className="param-value">{row.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ) : (
        <>
          <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-6 pb-10 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Product gallery */}
                <div className="product-gallery lg:col-span-6 space-y-4">
                  <div className="flex flex-col-reverse sm:flex-row gap-3">
                    {/* Thumbnails */}
                    <div className="flex flex-row sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
                      {(product.thumbnails || [product.image]).map((thumb, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelection({ productId: product.id, index: idx })
                          }}
                          className={`w-14 h-14 shrink-0 rounded-lg border-2 p-1 bg-white overflow-hidden transition-all cursor-pointer ${
                            activeThumb === idx
                              ? 'border-[#f37021] shadow-xs'
                              : 'border-slate-200 hover:border-blue-300'
                          }`}
                        >
                          <ResponsiveImage
                            src={thumb}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>

                    {/* Main View Area */}
                    <div className="flex-1 relative bg-white rounded-md border border-slate-200 shadow-sm p-4 flex flex-col items-center justify-center min-h-[340px] group">
                      <ResponsiveImage
                        src={selectedImage}
                        alt={product.fullName}
                        className="max-h-72 max-w-full object-contain"
                      />
                      
                      <button
                        onClick={() => setZoomOpen(true)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-900 cursor-pointer bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to zoom</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product information */}
                <div className="lg:col-span-6 space-y-4 lg:pl-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase block">
                      {product.tag}
                    </span>
                    <h1 className="product-title text-2xl sm:text-3xl font-extrabold text-[#0d2857] leading-tight mt-1">
                      {product.fullName.includes('Butterfly') ? <>Resilient Seated <span>Butterfly Valve</span></> : product.fullName}
                    </h1>
                    <p className="text-xs font-bold text-[#f37021] mt-1">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.detailedDesc}
                  </p>

                  {/* 4 quick badges */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {product.quickFeatures.map((feat, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <span className="text-xs font-bold text-[#0d2857] block">
                          {feat.title}
                        </span>
                        <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                          {feat.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Quick Specs 4 Cards Bar */}
              <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-md border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Size Range</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0d2857] block mt-1">
                    {product.quickSpecs.sizeRange}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Pressure Rating</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0d2857] block mt-1">
                    {product.quickSpecs.pressureRating}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">End Connection</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0d2857] block mt-1">
                    {product.quickSpecs.endConnection}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Temperature Range</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0d2857] block mt-1">
                    {product.quickSpecs.temperatureRange}
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* 2. TECHNICAL SPECIFICATIONS & KEY FEATURES & BENEFITS */}
          <section className="py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Technical Specifications Table (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl font-extrabold text-[#0d2857] border-b border-slate-200 pb-2">
                    Technical Specifications
                  </h3>

                  <div className="overflow-hidden border border-slate-200 rounded-md shadow-2xs">
                    <table className="min-w-full text-xs divide-y divide-slate-200">
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {Object.entries(product.specsTable).map(([specKey, specVal], idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                            <td className="px-4 py-2.5 font-bold text-slate-700 w-1/3">
                              {specKey}
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">
                              {specVal}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Features & Benefits (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-xl font-extrabold text-[#0d2857] border-b border-slate-200 pb-2">
                    Key Features & Benefits
                  </h3>

                  <div className="space-y-3">
                    {product.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-[#0d2857]">
                            {feat.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}


      {/* 5. RELATED PRODUCTS */}
      <section className="py-5 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
            <h3 className="text-xl font-extrabold text-[#0d2857]">
              Related <span className="text-[#f37021]">Products</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                to={`/products/${rel.id}`}
                className="group bg-white rounded-md border border-slate-200 p-3 hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="h-28 w-full flex items-center justify-center bg-slate-50 rounded-lg p-2 group-hover:bg-blue-50/40">
                  <ResponsiveImage
                    src={rel.image}
                    alt={rel.name}
                    className="max-h-24 max-w-full object-contain group-hover:scale-108 transition-transform"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-bold text-[#0d2857] group-hover:text-[#f37021] line-clamp-1">
                    {rel.name}
                  </h4>
                  <span className="text-[10px] text-blue-700 font-semibold mt-1 inline-flex items-center gap-0.5">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Need a Customized Valve Solution?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Our experts are ready to help you find the right valve for your application.
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

      {/* ZOOM MODAL */}
      {(zoomOpen || Boolean(zoomModalImage)) && (
        <div
          onClick={() => {
            setZoomOpen(false)
            setZoomModalImage(null)
          }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-3xl w-full bg-white rounded-md p-6 flex flex-col items-center">
            <button
              aria-label="Close product image"
              onClick={() => {
                setZoomOpen(false)
                setZoomModalImage(null)
              }}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-lg bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <ResponsiveImage
              src={zoomModalImage || selectedImage}
              alt={product.fullName}
              className="max-h-[70vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}

    </div>
  )
}
