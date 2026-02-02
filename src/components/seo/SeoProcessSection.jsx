export default function SeoProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "Book a discovery call with our director and founder Mike to discuss your needs and goals for your SEO campaign. He will design and recommend the best package for you based on what you want to achieve with your business, and to ensure we are the perfect SEO agency for you.",
    },
    {
      number: "02",
      title: "Keyword Research",
      description:
        "We will then conduct our keyword research where we will discover the search terms for your services and products. This is a vital stage in the process as we are building out a campaign that generates the results you want. Drawing on our experience, we will make recommendations on the best keyword strategy for your business.",
    },
    {
      number: "03",
      title: "Presenting Strategy",
      description:
        "Once we have our keyword strategy ready, we will host a call with you to take you through how we're going to achieve your business goals and drive growth. We are also happy to come and visit your business in person!",
    },
    {
      number: "04",
      title: "Campaign Execution",
      description:
        "After we have presented our strategy to you, and you're happy to go ahead, we will get started executing the campaign. Initially, we will implement the sitemap and track all the keywords we want to target before we get into competitor analysis, CRO audits, and backlink audits. With our monthly analysis, updates, and reports, you will always be kept up to date with your campaign.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            An award winning{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              process
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide you with a simple process to ensure that your campaign gets up and running in the most efficient way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-2xl shadow-red-900/30 border-4 border-red-600/40">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="
                    bg-gray-950/70 backdrop-blur-sm border border-gray-800/60 
                    rounded-2xl p-8 md:p-10 shadow-xl shadow-black/40 
                    w-full max-w-xl lg:max-w-2xl
                    hover:border-red-800/50 hover:shadow-red-900/20 transition-all duration-300
                  "
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-red-400">{step.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 md:mt-24">
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
            Start project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}