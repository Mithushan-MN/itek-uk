export default function SeoWhyChooseSection() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              iTek Solutions
            </span>
          </h2>
        </div>

        {/* 2-column main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-16">
          {/* Left column - Main intro text (wider) */}
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-950/50 border border-red-800/50 mx-auto lg:mx-0 mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* <h3 className="text-3xl md:text-4xl font-bold text-red-400">
              Tailored to your business
            </h3> */}

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We believe we stand out as a London SEO company as unlike other SEO agencies, we tailor everything to your business. There are no set deliverables for each campaign, as your strategy will be designed to align with your business goals. With a combined experience of over 30 years in{" "}
              <span className="text-red-400 font-medium">digital marketing</span>, we are well equipped to help you and your business grow.
            </p>
          </div>

          {/* Right column - 2 sub-columns with the other 4 points */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Point 1 */}
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-800/50 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-xl font-bold text-red-400">
                Award-winning agency
              </h4>
              <p className="text-base md:text-md text-gray-300 leading-relaxed">
                We are very proud of our awards and achievements, and are thrilled to have been nominated for various awards.
              </p>
            </div>

            {/* Point 2 */}
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-800/50 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl md:text-xl font-bold text-red-400">
                Practice what we preach
              </h4>
              <p className="text-base md:text-md text-gray-300 leading-relaxed">
                We know what success looks like as we've built our own website from the ground up, and we work to apply SEO best practices to it everyday.
              </p>
            </div>

            {/* Point 3 */}
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-800/50 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-xl md:text-xl font-bold text-red-400">
                Transparent workflow
              </h4>
              <p className="text-base md:text-md text-gray-300 leading-relaxed">
                Our team of SEO experts implement and track your strategy, and unlike a lot of SEO agencies, we provide full transparency throughout the campaign.
              </p>
            </div>

            {/* Point 4 */}
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-800/50 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-xl font-bold text-red-400">
                Proven client results
              </h4>
              <p className="text-base md:text-md text-gray-300 leading-relaxed">
                Our clients testimonials and case studies allow our results to speak for themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}