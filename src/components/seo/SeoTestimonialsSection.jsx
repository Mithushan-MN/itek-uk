import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SeoTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Would highly recommend Mr SEO. They produce monthly reports detailing the progress over the last month. Mike makes himself available whenever you need him, and the results I have seen since partnering with them are amazing!!! Thank you!",
      name: "Ben Reynold",
      role: "@Cars Under 3000",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80", // Professional man headshot
    },
    {
      quote:
        "Working with this SEO team has been a game-changer. Our organic traffic doubled in just 5 months, and the transparent reporting keeps us fully informed. Highly professional and results-driven!",
      name: "Sarah Thompson",
      role: "Marketing Director, Fashion Retail",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80", // Professional woman
    },
    {
      quote:
        "From page 3 to #1 rankings on our key terms in under 6 months. Leads are up over 300%, and the team is always responsive. Best SEO investment we've made!",
      name: "Michael Torres",
      role: "CEO, Home Services Company",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80", // Confident man
    },
    {
      quote:
        "Excellent communication and real results. They handled our eCommerce SEO perfectly — sales from organic search increased by 180%. Would work with them again in a heartbeat.",
      name: "Emily Chen",
      role: "Owner, Online Store",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80", // Smiling woman
    },
    {
      quote:
        "The monthly updates and competitor analysis are top-notch. We've seen consistent growth in rankings and conversions. Truly a partner, not just a vendor.",
      name: "James Patel",
      role: "Founder, Tech Startup",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80", // Business man
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle red gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from businesses we've helped dominate search and grow online.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            bulletActiveClass: 'bg-red-500',
            bulletClass: 'bg-gray-600 hover:bg-gray-400 w-3 h-3 rounded-full transition-all',
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-950/70 backdrop-blur-md border border-gray-800/60 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/50 mx-auto max-w-4xl">
                <div className="text-center md:text-left space-y-8">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-200 italic">
                    “{item.quote}”
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-red-600/40 shadow-lg shadow-red-900/30 flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-lg text-gray-400 mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev absolute left-0 md:left-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110 z-10 focus:outline-none">
          <FaArrowLeft />
        </button>

        <button className="swiper-button-next absolute right-0 md:right-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110 z-10 focus:outline-none">
         <FaArrowRight />
        </button>

        {/* Pagination Dots */}
        <div className="swiper-pagination flex justify-center mt-10 gap-3" />
      </div>
    </section>
  );
}