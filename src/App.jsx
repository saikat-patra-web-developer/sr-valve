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
import InHouseManufacturing from './pages/InHouseManufacturing'
import InHouseTestingFacility from './pages/InHouseTestingFacility'
import CustomerSupport from './pages/CustomerSupport'
import OnTimeDelivery from './pages/OnTimeDelivery'
import Experience from './pages/Experience'
import WaterSupplyProject from './pages/WaterSupplyProject'
import WasteWaterProject from './pages/WasteWaterProject'
import IrrigationProjects from './pages/IrrigationProjects'
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
            path="/why-us/in-house-manufacturing"
            element={<InHouseManufacturing />}
          />
          <Route
            path="/why-us/in-house-testing-facility"
            element={<InHouseTestingFacility />}
          />
          <Route
            path="/why-us/certifications"
            element={
              <Certifications
                onShowToast={handleShowToast}
              />
            }
          />
          <Route
            path="/why-us/customer-support"
            element={<CustomerSupport />}
          />
          <Route
            path="/why-us/on-time-delivery"
            element={<OnTimeDelivery />}
          />
          <Route
            path="/experience"
            element={<Experience />}
          />
          <Route
            path="/experience/water-supply-project"
            element={<WaterSupplyProject />}
          />
          <Route
            path="/experience/waste-water-project"
            element={<WasteWaterProject />}
          />
          <Route
            path="/experience/irrigation-projects"
            element={<IrrigationProjects />}
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
