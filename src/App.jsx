import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
import WhyUs from './pages/WhyUs'
import Experience from './pages/Experience'
import Clients from './pages/Clients'
import NotFound from './pages/NotFound'

export default function App() {
  const [toastMessage, setToastMessage] = useState('')

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
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetail
                key={window.location.pathname}
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/infrastructure"
            element={
              <Infrastructure
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/certifications"
            element={
              <Certifications
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/why-us"
            element={<WhyUs />}
          />
          <Route
            path="/whyus"
            element={<WhyUs />}
          />
          <Route
            path="/experience"
            element={<Experience />}
          />
          <Route
            path="/clients"
            element={<Clients />}
          />
          {/* 404 / Catch-all fallback route */}
          <Route
            path="/404"
            element={<NotFound />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  )
}
