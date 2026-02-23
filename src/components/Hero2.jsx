import React from 'react'
import AnimatedShaderHero from './AnimatedShaderHero'

const Hero2 = () => {
  return (
    <AnimatedShaderHero
     headline={{  line2: "Innovating Your Digital Future" }}
  subtitle="SEO • Web • Marketing • Technology • Innovation"
  primaryButton={{ text: "Start Your Project", onClick: () => window.location = "/contact" }}
  secondaryButton={{ text: "Learn More", onClick: () => window.location = "/about" }}
    />
  )
}

export default Hero2