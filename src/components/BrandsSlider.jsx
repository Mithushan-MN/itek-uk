// src/components/BrandsSlider.jsx
import brand1 from '../assets/brands/betterway.png';
import brand2 from '../assets/brands/huntsman.png';
import brand3 from '../assets/brands/sagar.png';
import brand4 from '../assets/brands/PINK-AUTO.webp';
import brand5 from '../assets/brands/vncoe.webp';
import brand6 from '../assets/brands/sagar.png'; // duplicate – consider removing if not intentional

export default function BrandsSlider() {
  const brands = [
    { name: 'Betterway', src: brand1 },
    { name: 'Huntsman', src: brand2 },
    { name: 'Sagar', src: brand3 },
    { name: 'Pink Auto', src: brand4 },
    { name: 'VNCOE', src: brand5 },
     { name: 'Betterway2', src: brand1 },
    { name: 'Huntsman2', src: brand2 },
    { name: 'Sagar2', src: brand3 },
    { name: 'Pink Auto2', src: brand4 },
    { name: 'VNCOE2', src: brand5 },
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-medium font-serif text-gray-900 mb-8 md:mb-12">
          WE WORK WITH GLOBAL LEADERS AND AMBITIOUS BRANDS READY TO LEAD
        </h3>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Fade gradients on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Slider track */}
          <div className="flex animate-slide-left-infinite whitespace-nowrap will-change-transform">
            {/* First loop */}
            <div className="flex items-center gap-10 sm:gap-14 md:gap-12 lg:gap-4 px-6 sm:px-8 lg:px-10">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center"
                >
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-10 sm:gap-14 md:gap-12 lg:gap-4 px-6 sm:px-8 lg:px-10">
              {brands.map((brand) => (
                <div
                  key={`${brand.name}-dup`}
                  className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center"
                >
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo duplicate`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}