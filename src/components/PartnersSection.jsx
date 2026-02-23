// src/components/PartnersSection.jsx
import { motion } from 'framer-motion';

import googlePartner from '../assets/partners/google-partner.webp';
import googleRating from '../assets/partners/google-partner.webp';
import facebook from '../assets/partners/facebook.png';
import linkedin from '../assets/partners/linkedin.png';
import microsoft from '../assets/partners/microsoft.png';
import youtube from '../assets/partners/youtube.png';
import semrush from '../assets/partners/semrush.png';

const partners = [
  { name: "Google Partner", image: googlePartner },
  // { name: "Google Rating 5.0 ★★★★★", image: googleRating },
  { name: "The Drum Recommended", image: facebook },
  { name: "HubSpot Certified Partner", image: linkedin },
  { name: "Forbes Agency Council Official Member 2026", image: microsoft },
  { name: "Semrush Certified Agency Partner", image: youtube },
  { name: "Meta Business Partner", image: semrush },
];

export default function PartnersSection() {
  return (
    <section className="relative w-full bg-black py-8 sm:py-10 md:py-12 lg:py-16 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional heading (can remove if not needed) */}
        <p className="text-center text-gray-500 text-xs sm:text-sm md:text-base mb-6 md:mb-8 uppercase tracking-wider">
          Trusted Partners & Certifications
        </p>

        {/* Responsive layout */}
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex flex-nowrap lg:grid lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-start lg:justify-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 bg-gray-900/70 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 border border-gray-800/50 shadow-md hover:shadow-lg hover:border-red-600/30 transition-all duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain mx-auto"
                  title={partner.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar but allow swipe */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}