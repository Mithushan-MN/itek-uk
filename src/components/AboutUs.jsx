// src/components/AboutUs.jsx
import teamMain from '../assets/002.jpg';      // main group photo (diverse team in red shirts)
import team1 from '../assets/serviceicons/seo.png';            // top-right small overlapping photo (e.g. two people talking)
import team2 from '../assets/serviceicons/web.png';            // bottom-left overlapping (e.g. high-five)
import team3 from '../assets/serviceicons/g-ads.png';            // bottom-right overlapping (e.g. whiteboard discussion)

export default function AboutUs() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background collage with overlapping images */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-40">
        {/* Main large photo - spans most area */}
        <div className="col-span-10 row-span-5 col-start-2 row-start-1">
          <img
            src={teamMain}
            alt="Diverse iTek team collaborating"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Overlapping small photos */}
        {/* <div className="col-span-4 row-span-3 col-start-1 row-start-1 z-10 transform rotate-[-6deg] translate-x-[-10%] translate-y-[15%]">
          <img
            src={team1}
            alt="Team discussion"
            className="w-full h-full object-cover rounded-xl shadow-xl border-8 border-white"
          />
        </div> */}

        <div className="col-span-4 row-span-3 col-start-9 row-start-4 z-10 transform rotate-[8deg] translate-x-[5%] translate-y-[-10%]">
          <img
            src={team2}
            alt="High-five celebration"
            className="w-full h-full object-cover rounded-xl shadow-xl border-8 border-white"
          />
        </div>

        {/* <div className="col-span-5 row-span-4 col-start-7 row-start-2 z-10 transform rotate-[-4deg]">
          <img
            src={team3}
            alt="Whiteboard brainstorming"
            className="w-full h-full object-cover rounded-xl shadow-xl border-8 border-white"
          />
        </div> */}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
          ABOUT US
        </h2>

        <div className="w-48 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
          DIVERSITY IN
          <br className="sm:hidden" />
          <span className="text-red-400 font-serif italic"> Creativity</span>
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 md:mb-12">
          At iTek Solutions, we believe digital marketing is more than just clicks and impressions. It's about creating meaningful connections between brands and their audiences. With a diverse team well versed in SEO to social media management and paid advertising, we combine creativity with analytics to drive real business growth.
        </p>

        <a
          href="/about"
          className="inline-block bg-red-600 text-white font-semibold px-10 py-5 rounded-full shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-2 text-lg md:text-xl"
        >
          More About Us
        </a>
      </div>

      
    </section>
  );
}