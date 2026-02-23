// AboutUsPage.jsx
import about from '../../assets/about.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Aboutus() {

  return (
    <div className="bg-black text-white font-sans">
     
      <section className="relative pt-20 pb-28 md:pb-40 bg-gradient-to-b from-black via-black to-red-900 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden mt-[-180px]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
    {/* Small "ABOUT" text */}
    <p className="  pt-30 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider text-white/30 uppercase mb-2 md:mb-4">
      ABOUT
    </p>

    {/* Main brand name with red gradient */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none mb-6 md:mb-8 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent uppercase">
      iTek Solutions
    </h1>

    {/* Subtitle */}
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/70 max-w-5xl mx-auto leading-tight mb-10 md:mb-14">
      Sri Lanka's Proudly Homegrown Leader in Performance Marketing,<br className="hidden sm:inline" />
      SEO & Digital Growth Solutions
    </p>

    {/* Bottom rounded button */}
    <div className="inline-block">
      <button className="
        px-10 py-5 md:px-14 md:py-6 
        bg-gradient-to-r from-red-600 to-red-500 
        hover:from-red-500 hover:to-red-400 
        text-white font-bold text-lg md:text-xl 
        rounded-full shadow-2xl shadow-red-900/50 
        transition-all duration-300 hover:shadow-red-800/70 hover:-translate-y-1
        border border-red-400/30
      ">
        Proudly Made in Sri Lanka
      </button>
    </div>
  </div>

  {/* Optional subtle bottom fade/glow */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
</section>

      {/* Welcome paragraph - black background */}
      <section className="py-16 md:py-24 bg-black border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Welcome to <span className="text-red-500"> iTek Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
            Sri Lanka's proudly homegrown leader in performance marketing, SEO, Google Ads, social media growth and full-funnel digital solutions.  
            Born and built right here in Sri Lanka, we're passionate about helping ambitious businesses capture explosive online growth through high-ROI, transparent strategies.
          </p>
        </div>
      </section>

      
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 uppercase tracking-wide">
            Why Partner With <span className="text-red-500"> iTek Solutions</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: "📈", title: "Proven ROI Results", desc: "Real-world performance with strong revenue growth" },
              { icon: "⚡", title: "Fast Execution", desc: "Quick wins + scalable long-term strategies" },
              { icon: "🔍", title: "Radical Transparency", desc: "Monthly reports, live dashboards, zero black boxes" },
              { icon: "🌏", title: "Sri Lanka Roots – Global Scale", desc: "Local insight with international-level execution" },
              { icon: "🤝", title: "Monthly Rolling", desc: "No long contracts – results keep you here" },
              { icon: "🛡️", title: "Full-Funnel Expertise", desc: "SEO + Paid + CRO + Retention – complete growth stack" },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-gray-900/70 backdrop-blur-md border border-gray-800/60
                  rounded-2xl p-8 md:p-10 text-center
                  hover:border-red-700/60 hover:shadow-red-900/30
                  transition-all duration-300 hover:-translate-y-2
                "
              >
                <div className="text-5xl mb-6 text-red-500">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - light section */}
      <section className="py-20 md:py-32 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-black uppercase tracking-wide">
              Our Story
            </h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-800">
              <p>
                At  iTek Solutions we believe every ambitious Sri Lankan business — and every international brand operating here — deserves world-class digital performance without the usual agency excuses and lock-ins.
              </p>
              <p className="text-2xl font-bold text-red-600">
                We started with one obsession: turn clicks into real revenue.
              </p>
              <p>
                From Jaffna to Colombo we grew into a results-first partner trusted by eCommerce brands, service businesses, startups and global companies — delivering SEO domination, paid media scaling, conversion optimization and customer retention systems that actually compound.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20">
            <img
              src={about} // ← modern office / team in Sri Lanka setting
              alt=" iTek Solutions team in Sri Lanka"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Mission - big gradient block */}
      <section className="py-28 px-6 bg-gradient-to-br from-red-950 via-black to-black">
  <div className="max-w-5xl mx-auto">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{
        nextEl: '.mission-next',
        prevEl: '.mission-prev',
      }}
      pagination={{
        clickable: true,
        el: '.mission-pagination',
        bulletActiveClass: 'bg-red-500 scale-125',
        bulletClass: 'bg-gray-600 w-3 h-3 rounded-full mx-1 transition-all hover:bg-red-400',
      }}
      className="mission-swiper"
    >
      {/* Slide 1: Vision */}
      <SwiperSlide>
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 md:mb-12 uppercase tracking-wider text-white">
            OUR VISION
          </h2>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            TO BECOME THE MOST TRUSTED & RESULTS-OBSESSED DIGITAL GROWTH PARTNER FOR SRI LANKAN BUSINESSES AND GLOBAL BRANDS — TURNING AMBITION INTO MEASURABLE DOMINANCE.
          </p>
        </div>
      </SwiperSlide>

      {/* Slide 2: Mission */}
      <SwiperSlide>
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 md:mb-12 uppercase tracking-wider text-white">
            OUR MISSION
          </h2>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            TO EMPOWER SRI LANKAN BUSINESSES AND GLOBAL BRANDS TO DOMINATE DIGITAL CHANNELS, GROW SUSTAINABLY, AND WIN IN COMPETITIVE MARKETS — WITH COMPLETE TRANSPARENCY AND MEASURABLE ROI.
          </p>
        </div>
      </SwiperSlide>

      {/* Slide 3: Philosophy */}
      <SwiperSlide>
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 md:mb-12 uppercase tracking-wider text-white">
            OUR PHILOSOPHY
          </h2>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            RESULTS OVER REPORTS. TRANSPARENCY OVER PROMISES. GROWTH OVER VANITY. WE BELIEVE IN BUILDING LONG-TERM PARTNERSHIPS BASED ON HONEST DATA, RELENTLESS EXECUTION, AND SHARED SUCCESS — NOT EMPTY METRICS OR LOCK-IN CONTRACTS.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Custom Navigation Arrows */}
    {/* <button className="mission-prev absolute left-4 md:left-12  -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600/80 hover:bg-red-700 text-white flex items-center justify-center text-2xl md:text-3xl shadow-lg transition-all hover:scale-110 z-10 focus:outline-none">
      ←
    </button>

    <button className="mission-next absolute right-4 md:right-12  -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600/80 hover:bg-red-700 text-white flex items-center justify-center text-2xl md:text-3xl shadow-lg transition-all hover:scale-110 z-10 focus:outline-none">
      →
    </button> */}

    {/* Pagination Dots */}
    <div className="mission-pagination flex justify-center mt-10 md:mt-16 gap-3" />
  </div>
</section>

      {/* Join Community */}
      <section className="py-20 md:py-32 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-10 uppercase text-black">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
            We're more than an agency — we're a movement of growth-obsessed Sri Lankan entrepreneurs and marketers. Follow us for real case studies, growth tips and behind-the-scenes wins.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition-all hover:shadow-red-900/50">
              Instagram →
            </button>
            <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition-all hover:shadow-red-900/50">
              TikTok →
            </button>
            <button className="px-10 py-5 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg rounded-full transition-all">
              Facebook →
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
}