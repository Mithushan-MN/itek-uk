import { FaPhone, FaPhoneAlt } from "react-icons/fa";

export default function SeoCtaSection() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle red glow overlay for energy */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className="
            bg-gray-950/70 backdrop-blur-md 
            border border-gray-800/60 rounded-3xl 
            p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/60
            hover:shadow-red-900/20 transition-all duration-500
          "
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left: Avatar + Text */}
            <div className="flex items-center gap-6 md:gap-8 flex-col sm:flex-row text-center sm:text-left">
              {/* <div className="relative flex-shrink-0">
                <div className="w-24 h-24 sm:w-18 sm:h-18 rounded-full overflow-hidden border-4 border-red-600/50 shadow-xl shadow-red-900/30">
                  <img
                    src="/images/team-member-avatar.jpg" // Replace with actual photo (e.g. circular crop of a smiling team member)
                    alt="SEO Consultant"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-3 border-black shadow-md" />
              </div> */}

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                  Start a project{" "}
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                    today!
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  Let's talk about how we can maximise your ROI from Digital Marketing & SEO Consultancy...
                </p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 w-full sm:w-auto">
              <button
                className="
                  flex-1 sm:flex-none px-8 sm:px-10 py-5 
                  bg-red-600 hover:bg-red-700 active:bg-red-800 
                  text-white font-semibold text-lg rounded-xl 
                  transition-all duration-300 
                  hover:shadow-xl hover:shadow-red-900/40 
                  hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
                  flex items-center justify-center gap-2 group
                "
              >
                Book a Service
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                className="
                  flex-1 sm:flex-none px-8 sm:px-10 py-5 
                  bg-gray-800/80 hover:bg-gray-700 border border-gray-700 hover:border-red-600/60 
                  text-gray-200 hover:text-white font-semibold text-lg rounded-xl 
                  transition-all duration-300 
                  hover:shadow-lg hover:shadow-red-900/20
                  flex items-center justify-center gap-2 group
                "
              >
                <FaPhoneAlt/> (020) 341 147 89
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}