import React from 'react'
import SeoHeroSection from './SeoHeroSection'
import BrandsSlider from '../BrandsSlider'
import SeoServicesSection from './SeoServicesSection'
import SeoProcessSection from './SeoProcessSection'
import SeoCtaSection from './SeoCtaSection'
import SeoBrandsSection from './SeoBrandsSection'

const Seo = () => {
  return (
    <div className='bg-black'>
        <SeoHeroSection/>
        <BrandsSlider/>
        <SeoServicesSection/>
        <SeoProcessSection/>
        <SeoCtaSection/>
        <SeoBrandsSection/>
    </div>
  )
}

export default Seo