import PageHero from '../components/PageHero'
import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Droplets, Sprout, Building, Cpu, Landmark, FlaskConical, PhoneCall } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { productsData, productCategories, productApplications } from '../data/productsData'

export default function Products({ onOpenQuote }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedApp, setSelectedApp] = useState('All Applications')

  // Filter products dynamically
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.detailedDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory

      const matchesApp =
        selectedApp === 'All Applications' ||
        product.applications.some((app) => app.toLowerCase().includes(selectedApp.toLowerCase()))

      return matchesSearch && matchesCategory && matchesApp
    })
  }, [searchQuery, selectedCategory, selectedApp])

  const industries = [
    {
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      title: "Water Supply",
      desc: "Reliable solutions for clean water distribution.",
    },
    {
      icon: <Sprout className="w-6 h-6 text-blue-600" />,
      title: "Irrigation",
      desc: "Efficient flow control for agricultural growth.",
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: "Infrastructure",
      desc: "Supporting nations with durable infrastructure.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "Industrial Systems",
      desc: "Trusted performance in demanding industrial environments.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-blue-600" />,
      title: "Municipal Projects",
      desc: "Solutions for smarter, cleaner cities.",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      title: "Process Industries",
      desc: "Custom-engineered valves for specialized process needs.",
    },
  ]

  return (
    <div className="site-page page-products">
      
      {/* 1. HERO BANNER */}
      <PageHero type="products" />

      {/* 2. SEARCH & FILTER BAR */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-2xs product-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Search Products
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  aria-label="Search products"
                  type="text"
                  placeholder="Search by product name, keyword or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021]"
                />
              </div>
            </div>

            {/* Category Filter (3 cols) */}
            <div className="md:col-span-3">
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Filter by Product Category
              </label>
              <select
                aria-label="Filter by product category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021]"
              >
                {productCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Application Filter (2 cols) */}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Filter by Application
              </label>
              <select
                aria-label="Filter by application"
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021]"
              >
                {productApplications.map((app, idx) => (
                  <option key={idx} value={app}>
                    {app}
                  </option>
                ))}
              </select>
            </div>

            {/* Action button (2 cols) */}
            <div className="md:col-span-2 pt-4 md:pt-4">
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Categories')
                  setSelectedApp('All Applications')
                }}
                className="w-full bg-[#f37021] hover:bg-[#e05f13] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{searchQuery || selectedCategory !== 'All Categories' || selectedApp !== 'All Applications' ? 'Reset Filters' : 'Search Products'}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-5 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 pb-3 border-b border-slate-200 gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0d2857]">
                Our Product <span className="text-[#f37021]">Range</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Engineered valves and flow control solutions for real-world applications.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              Showing {filteredProducts.length} Products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-md border border-slate-200 p-8 space-y-3">
              <p className="text-base font-bold text-slate-700">No matching valves found</p>
              <p className="text-xs text-slate-500">Try adjusting your keyword search or category filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Categories')
                  setSelectedApp('All Applications')
                }}
                className="mt-2 text-xs font-bold text-[#f37021] underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-5 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 pb-3 border-b border-transparent gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2857]">
                Industries <span className="text-[#f37021]">We Serve</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Our valves are trusted across critical sectors, helping build a stronger and more sustainable tomorrow.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d2857] hover:text-[#f37021] transition-colors cursor-pointer"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-md border border-slate-200 text-center hover:border-blue-400 hover:shadow-sm transition-all flex flex-col items-center justify-center group"
              >
                <div className="p-3 rounded-md bg-white shadow-2xs group-hover:scale-110 transition-transform mb-3">
                  {ind.icon}
                </div>
                <h4 className="text-xs font-bold text-[#0d2857] group-hover:text-[#f37021] transition-colors line-clamp-1">
                  {ind.title}
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEED A CUSTOM VALVE SOLUTION BANNER */}
      <section className="bg-gradient-to-r from-[#0d2857] via-[#123674] to-[#0d2857] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need a Custom Valve Solution?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Our expert team can design and manufacture valves as per your specific requirements. Get in touch for technical support, product selection or custom manufacturing enquiries.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote('Custom Valve Solution')}
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#e05f13] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Send Enquiry Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+917044090444"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-lg border border-white/20 transition-colors text-xs sm:text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Talk to Our Experts</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-5 rounded-md border border-white/15 backdrop-blur-xs text-center">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                ENGINEERED FOR REAL-WORLD CHALLENGES
              </span>
              <p className="text-[11px] text-slate-300">
                Complete setup of system monitoring & control for PHED, water distribution, irrigation & heavy process valves.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
