import seobg from '../../assets/services/seohero.webp'

export default function SeoHeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white mt-[-130px] pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-black to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="text-center space-y-10 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Award-Winning
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>

            <p className="text-lg md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              As an SEO agency, we can provide you with all aspects of search engine optimisation to help your business reach the next level.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-6 md:pt-10">
              <button
                className="
                  px-8 sm:px-10 py-4 sm:py-5 
                  bg-red-600 hover:bg-red-700 active:bg-red-800
                  text-white font-semibold text-lg rounded-xl 
                  transition-all duration-300 
                  hover:shadow-xl hover:shadow-red-900/40 
                  hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
                  flex items-center gap-2 group
                "
              >
                Book a call
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                className="
                  px-8 sm:px-10 py-4 sm:py-5 
                  border border-gray-700 hover:border-red-600/70 
                  text-gray-300 hover:text-red-400 
                  font-semibold text-lg rounded-xl 
                  transition-all duration-300 
                  hover:bg-red-950/30 active:bg-red-950/50
                  flex items-center gap-2
                "
              >
                I want to grow
                <span className="opacity-80">↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image at bottom */}
        <div className="px-5 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl">
            <img
              src={seobg}
              alt="Team discussing SEO strategy on large screen"
              className="w-full h-50 md:h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}