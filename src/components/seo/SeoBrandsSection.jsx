import seobrand from '../../assets/services/seohero.webp';

export default function SeoBrandsSection() {
  const cases = [
    {
      brand: "Crosstown Doughnuts",
      stat: "96% Increase In Organic Revenue",
      image: seobrand,
      alt: "Crosstown Doughnuts mobile experience with organic growth",
      link: "https://www.crosstown.co.uk/", // ← replace with your actual case study URL
    },
    {
      brand: "Devitt Insurance",
      stat: "292 New Keywords In The Top 10 Positions",
      image: seobrand, // replace with real image
      alt: "Devitt Insurance results with keyword rankings",
      link: "https://www.crosstown.co.uk/", // ← replace with your actual case study URL
    },
    {
      brand: "Ocean Florida",
      stat: "Over 25,000 Extra Organic Conversions",
      image: seobrand, // replace with real image
      alt: "Ocean Florida couple enjoying organic traffic success",
      link: "https://www.ocean-florida.co.uk/", // ← replace with your actual case study URL
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle red gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Brands We{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We collaborate with brands who want to grow their business and generate a strong ROI from their SEO. Our team works closely
            <br className="hidden sm:inline" />
            with them to take their business to the next level, and below are some cases where we've achieved this.
          </p>
        </div>

        {/* Case cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="
                group bg-gray-950/70 backdrop-blur-sm 
                border border-gray-800/60 rounded-2xl 
                overflow-hidden shadow-xl shadow-black/40 
                hover:border-red-800/50 hover:shadow-red-900/30 
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Image at top */}
              <div className="aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content below image */}
              <div className="p-6 md:p-8 text-center md:text-left">
                <h3 className="text-xl md:text-xl font-bold text-white mb-3">
                  {item.brand}
                </h3>
                <p className="text-lg md:text-lg font-medium text-gray-200 mb-6">
                  {item.stat}
                </p>

                {/* Hyperlink - opens in new tab */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center md:justify-start 
                    text-red-500 font-semibold text-lg 
                    hover:text-red-400 transition-colors group-hover:text-red-400
                  "
                >
                  View case study
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Case Studies CTA (you can also make this link to /case-studies) */}
        <div className="text-center mt-16 md:mt-20">
          <button
            className="
              px-10 py-5 bg-red-600 hover:bg-red-700 active:bg-red-800 
              text-white font-semibold text-lg rounded-xl 
              transition-all duration-300 
              hover:shadow-xl hover:shadow-red-900/40 
              hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
              flex items-center justify-center gap-2 mx-auto group
            "
          >
            All Case Studies
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}