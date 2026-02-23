import React from 'react'
import SeoHeroSection from './SeoHeroSection'
import BrandsSlider from '../BrandsSlider'
import SeoServicesSection from './SeoServicesSection'
import SeoProcessSection from './SeoProcessSection'
import SeoCtaSection from './SeoCtaSection'
import SeoBrandsSection from './SeoBrandsSection'
import SeoWhyChooseSection from './SeoWhyChooseSection'
import SeoSpecialtiesSection from './SeoSpecialtiesSection'
import SeoTestimonialsSection from './SeoTestimonialsSection'

const Seo = () => {
  return (
    <div className='bg-black'>
        <SeoHeroSection/>
        <BrandsSlider/>
        <SeoServicesSection/>
        <SeoProcessSection/>
        <SeoCtaSection/>
        <SeoBrandsSection/>
        <SeoWhyChooseSection/>
        <SeoSpecialtiesSection/>
        <SeoTestimonialsSection/>
    </div>
  )
}

export default Seo