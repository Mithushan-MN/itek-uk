export default function SeoSpecialtiesSection() {
  const specialties = [
    {
      title: "SEO for eCommerce",
      description:
        "Growing your business online can be hard, especially when you're trying to do it on a nationwide level, but that's where we can help.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/services/ecommerce-seo", // ← replace with your actual URL
    },
    {
      title: "SEO for Fashion",
      description:
        "In a constantly growing and changing industry like fashion, staying apart and above competition is crucial. SEO is one way to do this.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
      link: "/services/fashion-seo",
    },
    {
      title: "SEO for Insurance",
      description:
        "The insurance industry is growing further and further into the online space, and as it does, the need for SEO grows with it. We can help you stand out from your competitors.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: "/services/insurance-seo",
    },
    {
      title: "SEO for Travel",
      description:
        "When people decide it's finally time for that luxury cruise or Disney trip, we'll make sure it's your site they find when they book it. With the industry constantly growing, it's important to stay ahead of the competition.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/services/travel-seo",
    },
    {
      title: "WordPress",
      description:
        "WordPress is an excellent content management system to base your site on. It also has strong SEO potential, and with our help, we can take your business to the next level.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "/services/wordpress-seo",
    },
    {
      title: "Shopify",
      description:
        "Shopify is a perfect platform for ecommerce businesses with an impressive level of functionality and performance. We can help you to optimise your Shopify site to make sure it's performing well from an SEO perspective.",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/services/shopify-seo",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle red gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Our SEO{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Specialities
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            As a digital marketing agency, we work with businesses in a wide range of industries, and are always up for a new challenge.
          </p>
        </div>

        {/* Cards grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="
                group bg-gray-950/70 backdrop-blur-sm 
                border border-gray-800/60 rounded-2xl 
                p-8 md:p-10 shadow-xl shadow-black/40 
                hover:border-red-800/50 hover:shadow-red-900/30 
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Learn more link */}
              <a
                href={item.link}
                className="
                  inline-flex items-center text-red-500 font-semibold text-lg 
                  hover:text-red-400 transition-colors group-hover:text-red-400
                "
              >
                Learn more
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}