export default function SeoServicesSection() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Optional subtle red gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-red-500 font-semibold uppercase tracking-wider text-sm md:text-base mb-3">
            TAILORED SEO SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Our SEO{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left column - Main description */}
          <div className="lg:col-span-1 space-y-6 lg:pr-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
              We approach each and every campaign with the same{" "}
              <span className="text-red-400 font-medium">ROI driven</span> mindset,
              but each strategy we create is designed solely with your business in mind.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              Our team are experienced at devising clear SEO strategies for businesses in a range of
              industries including{" "}
              <span className="text-red-400">insurance</span>,{" "}
              <span className="text-red-400">fashion</span> and{" "}
              <span className="text-red-400">ecommerce</span> to help them dominate the industry and
              achieve great results.
            </p>
          </div>

          {/* Middle column - What we do */}
          <div className="bg-gray-950/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">What we do</h3>
            <ul className="space-y-5">
              {[
                "Technical SEO",
                "Content Marketing",
                "Keyword Research",
                "Competitor Analysis",
                "Backlink Analysis",
                "Link Building",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg text-gray-300">
                  <span className="text-red-500 text-2xl leading-none mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Our Values */}
          <div className="bg-gray-950/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Values</h3>
            <ul className="space-y-5 flex-grow">
              {[
                "Monthly Rolling Contract",
                "Personal SEO Roadmap",
                "Regular Reports & Update",
                "ROI Driven Approach",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg text-gray-300">
                  <span className="text-red-500 text-2xl leading-none mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA button at bottom of card */}
            <div className="mt-9">
              <button
                className="
                  w-full sm:w-auto px-10 py-4 
                  bg-red-600 hover:bg-red-700 active:bg-red-800 
                  text-white font-semibold text-lg rounded-xl 
                  transition-all duration-300 
                  hover:shadow-xl hover:shadow-red-900/40 
                  hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
                  flex items-center justify-center gap-2 group
                "
              >
                Book a call
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}