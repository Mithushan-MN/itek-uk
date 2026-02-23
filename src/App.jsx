// src/App.jsx
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/ServicesShowcase'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import ServicesOverview from './components/ServicesOverview'
import BrandsSlider from './components/BrandsSlider'
import AboutUs from './components/AboutUs'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import PartnersSection from './components/PartnersSection'
import ContactCTA from './components/ContactCTA'
import FaqSection from './components/FaqSection'
import Seo from './components/seo/Seo'
import Hero2 from './components/Hero2'
import Aboutus from './components/pages/Aboutus'
// Import others: About, Sectors, Blog (placeholder for Blog)

function Home() {
  return (
    <>
      <Hero />
      <Hero2/>
      <BrandsSlider />
      <ServicesOverview/>
      <AboutUs/>
      <Services />
      <BlogSection />

      <CaseStudies />
      <FaqSection />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* Or full pages if needed */}
        <Route path="/about" element={<Aboutus />} /> 
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/seo" element={<Seo />} />

        {/* Add routes for sectors, blog */}
      </Routes>
      <ContactCTA/>
      <PartnersSection/>
     <Footer/> 
    </div>
  )
}

export default App