// src/components/ServicesHighlight.jsx
import { useState } from 'react';
import googleLogo from '../assets/serviceicons/g-ads.png';

const services = [
  {
    name: 'Google Ads',
    color: 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600',
    textColor: 'text-white',
    heading: 'Stop wasting budget on clicks that don’t convert.',
    description:
      'Our award-winning strategists use precision targeting to put your brand in front of high-intent buyers, ensuring every dollar works harder for your bottom line.',
    cta: 'More about this Service',
    logo: googleLogo,
  },
  {
    name: 'SEO',
    color: 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700',
    textColor: 'text-white',
    heading: 'Rank higher and drive organic growth.',
    description:
      'Comprehensive SEO strategies to improve visibility, traffic, and conversions without paid ads.',
    cta: 'More about SEO',
    logo: null,
  },
  {
    name: 'Social Media',
    color: 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700',
    textColor: 'text-white',
    heading: 'Build real connections with your audience.',
    description:
      'Targeted social campaigns across platforms to boost engagement and brand loyalty.',
    cta: 'More about Social Media',
    logo: null,
  },
  {
    name: 'Website',
    color: 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700',
    textColor: 'text-white',
    heading: 'Modern websites that convert.',
    description:
      'Responsive, fast-loading sites designed for performance, SEO, and user experience.',
    cta: 'More about Website',
    logo: null,
  },
  {
    name: 'More',
    color: 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700',
    textColor: 'text-white',
    heading: 'Explore all our services',
    description: 'From AI automation to branding and more – we’ve got you covered.',
    cta: 'View All Services',
    logo: null,
  },
];

export default function ServicesHighlight() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <div className="mb-8 md:mb-12">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic leading-tight text-gray-900">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-red-600 leading-tight mt-1 sm:mt-[-10px] md:mt-[-20px]">
            WORLD CLASS MARKETING
          </h2>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto mb-12 font-light px-2 sm:px-0">
          End-to-end creative and technical solutions for modern businesses.
        </p>

        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setActiveService(service)}
              className={`font-semibold px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base ${
                service.name === activeService.name
                  ? `${service.color} ${service.textColor} scale-105`
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Red Gradient Separator */}
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-16 rounded-full"></div>

        {/* Featured Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-left">
          {/* Left: Text + CTA */}
          <div className="px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {activeService.heading}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              {activeService.description}
            </p>

            <a
              href={`/services/${activeService.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:from-red-700 hover:to-red-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              {activeService.cta}
            </a>
          </div>

          {/* Right: Logo / Visual */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-200 shadow-lg flex items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px] hover:shadow-2xl transition-all duration-500">
              {activeService.logo ? (
                <img
                  src={activeService.logo}
                  alt={`${activeService.name} Logo`}
                  className="max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-60 w-auto object-contain"
                />
              ) : (
                <span className="text-gray-400 text-sm sm:text-base">
                  Visual for {activeService.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
