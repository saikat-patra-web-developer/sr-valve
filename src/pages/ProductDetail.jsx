import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ZoomIn, Droplets, Building, Flame, Zap, Wind, Anchor, Factory, Sprout, X } from 'lucide-react'
import { productsData } from '../data/productsData'
import ResponsiveImage from '../components/ResponsiveImage'

export default function ProductDetail() {
  const { id } = useParams()
  const productId = id || 'butterfly-valve'
  const product = productsData.find((p) => p.id === productId) || productsData[0]

  const [selection, setSelection] = useState({ productId: null, index: -1 })
  const [zoomOpen, setZoomOpen] = useState(false)
  const activeThumb = selection.productId === product.id ? selection.index : -1
  const selectedImage = product.thumbnails?.[activeThumb] || product.detailMainImage || product.image

  // Related products
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 6)

  const applicationIcons = [
    <Droplets key="icon-0" className="w-5 h-5 text-blue-600" />,
    <Factory key="icon-1" className="w-5 h-5 text-blue-600" />,
    <Flame key="icon-2" className="w-5 h-5 text-blue-600" />,
    <Zap key="icon-3" className="w-5 h-5 text-blue-600" />,
    <Wind key="icon-4" className="w-5 h-5 text-blue-600" />,
    <Anchor key="icon-5" className="w-5 h-5 text-blue-600" />,
    <Building key="icon-6" className="w-5 h-5 text-blue-600" />,
    <Sprout key="icon-7" className="w-5 h-5 text-blue-600" />,
  ]

  return (
    <div className="site-page page-detail">
      
      <div className="product-banner"><div><h2>Our Products</h2><p>High-Performance Valves for a More Reliable Tomorrow.</p></div></div>
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-6 pb-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="product-breadcrumb text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-900 cursor-pointer">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/products" className="hover:text-blue-900 cursor-pointer">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-700">{product.category}</span>
            <span aria-hidden="true">/</span>
            <span className="product-breadcrumb-current">{product.fullName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Product gallery */}
            <div className="product-gallery lg:col-span-6 space-y-4">
              <div className="flex gap-3">
                {/* Thumbnails */}
                <div className="flex flex-col gap-2.5">
                  {(product.thumbnails || [product.image]).map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelection({ productId: product.id, index: idx })
                      }}
                      className={`w-14 h-14 rounded-lg border-2 p-1 bg-white overflow-hidden transition-all cursor-pointer ${
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

      {/* 3. APPLICATIONS / INDUSTRIES SERVED + PHOTO */}
      <section className="py-5 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 cols: Applications */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-extrabold text-[#0d2857]">
                Applications / Industries Served
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-md border border-slate-200 shadow-2xs flex flex-col items-center text-center group hover:border-blue-400 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 group-hover:scale-110 transition-transform mb-2">
                      {applicationIcons[idx % applicationIcons.length]}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 cols: Plant Photo */}
            <div className="lg:col-span-4 relative rounded-md overflow-hidden shadow-sm border border-slate-200 group">
              <ResponsiveImage
                src="/images/infra/projects/industrial-valve-installation.webp"
                alt="Industrial Piping Applications"
                className="w-full h-48 sm:h-52 object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3 text-white">
                <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block">
                  ENGINEERED FOR A CLEANER
                </span>
                <span className="text-xs font-extrabold block">
                  SAFER TOMORROW
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MATERIALS & STANDARDS SUMMARY */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h3 className="text-xl font-extrabold text-[#0d2857] mb-6">
            Materials & Standards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 p-5 rounded-md border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#0d2857] border-b border-slate-200 pb-2">
                Materials of Construction
              </h4>
              <ul className="text-xs text-slate-600 space-y-1 pt-1">
                <li><strong className="text-slate-800">Body:</strong> {product.materials.body}</li>
                <li><strong className="text-slate-800">Disc/Wedge:</strong> {product.materials.disc}</li>
                <li><strong className="text-slate-800">Seat:</strong> {product.materials.seat}</li>
                <li><strong className="text-slate-800">Shaft/Stem:</strong> {product.materials.shaft}</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#0d2857] border-b border-slate-200 pb-2">
                Manufacturing Standards
              </h4>
              <ul className="text-xs text-slate-600 space-y-1 pt-1">
                <li><strong className="text-slate-800">Design:</strong> {product.standards.design}</li>
                <li><strong className="text-slate-800">Face to Face:</strong> {product.standards.faceToFace}</li>
                <li><strong className="text-slate-800">End Connection:</strong> {product.standards.endConnection}</li>
                <li><strong className="text-slate-800">Pressure Testing:</strong> {product.standards.testing}</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#0d2857] border-b border-slate-200 pb-2">
                Pressure & Temperature
              </h4>
              <ul className="text-xs text-slate-600 space-y-1 pt-1">
                <li><strong className="text-slate-800">Pressure Rating:</strong> {product.quickSpecs.pressureRating}</li>
                <li><strong className="text-slate-800">Temperature Range:</strong> {product.quickSpecs.temperatureRange}</li>
                <li><strong className="text-slate-800">Inspection:</strong> 100% Hydrostatic & Pneumatic Witness</li>
                <li><strong className="text-slate-800">Testing Media:</strong> Water & Air per API 598</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RELATED PRODUCTS */}
      <section className="py-5 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
            <h3 className="text-xl font-extrabold text-[#0d2857]">
              Related <span className="text-[#f37021]">Products</span>
            </h3>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0d2857] hover:text-[#f37021] cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
      {zoomOpen && (
        <div
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-3xl w-full bg-white rounded-md p-6 flex flex-col items-center">
            <button
              aria-label="Close product image"
              onClick={() => setZoomOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-lg bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <ResponsiveImage
              src={selectedImage}
              alt={product.fullName}
              className="max-h-[70vh] max-w-full object-contain"
            />
            <span className="text-xs font-bold text-slate-700 mt-4">
              {product.fullName} - Product View
            </span>
          </div>
        </div>
      )}

    </div>
  )
}
