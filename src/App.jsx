import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import Toast from './components/Toast'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Infrastructure from './pages/Infrastructure'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [quoteInitialProduct, setQuoteInitialProduct] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const handleOpenQuote = (productName = '') => {
    setQuoteInitialProduct(productName)
    setQuoteModalOpen(true)
  }

  const handleShowToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 4500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#f37021] selection:text-white">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Area */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/about"
            element={<About onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/products"
            element={<Products onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetail
                key={window.location.pathname}
                onOpenQuote={handleOpenQuote}
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                onOpenQuote={handleOpenQuote}
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/infrastructure"
            element={
              <Infrastructure
                onOpenQuote={handleOpenQuote}
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/certifications"
            element={
              <Certifications
                onOpenQuote={handleOpenQuote}
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                onOpenQuote={handleOpenQuote}
                onShowToast={handleShowToast}
              />
            }
          />
          {/* Catch-all fallback route */}
          <Route
            path="*"
            element={<Home onOpenQuote={handleOpenQuote} />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteInitialProduct}
        onShowToast={handleShowToast}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  )
}
