import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import darkBgSvg from '../assets/light-birds-bg.svg';

import project1 from '../assets/casestudy.jpg';
import project2 from '../assets/blog/seo.png';

const caseStudies = [
  {
    title: "SEO for Advanced Information Technology Company",
    description:
      "Supermicro and Content Protection Studios and Filmmakers Studios and AMD. Accelerated-To-Delivery Time of Proven Quality.",
    image: project1,
    link: "/case-studies/supermicro",
  },
  {
    title: "Rack Scale Solutions",
    description:
      "Empowering the future of content production with accelerated delivery times and proven quality for studios and filmmakers.",
    image: project2,
    link: "/case-studies/rack-scale",
  },
  {
    title: "Rack Scale Solutions",
    description:
      "Empowering the future of content production with accelerated delivery times and proven quality for studios and filmmakers.",
    image: project2,
    link: "/case-studies/rack-scale",
  },
  {
    title: "Rack Scale Solutions",
    description:
      "Empowering the future of content production with accelerated delivery times and proven quality for studios and filmmakers.",
    image: project2,
    link: "/case-studies/rack-scale",
  },
  
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  // Page-level scroll
  const { scrollYProgress } = useScroll();

  // Desktop parallax values
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [40, -220]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-50 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32 lg:pt-48 lg:pb-0"
    >

      <div className="absolute inset-0 z-0">
              <img
                src={darkBgSvg}
                alt=""
                className="w-full h-full object-cover opacity-100 mix-blend-multiply"
              />
            </div>


      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-40 lg:h-screen flex flex-col justify-top lg:pr-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
              OUR WORKS<span className="text-gray-400">.</span>
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Case Studies, a selection of
              <br className="hidden sm:block" />
              <span className="bg-red-500 text-black px-3 py-1 rounded-md inline-block mt-2">
                successful projects.
              </span>
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              We always put our clients first to deliver our best time after time.
            </p>

           <a
  href="/case-studies"
  className="inline-flex self-start bg-red-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 text-base sm:text-lg hover:-translate-y-0.5 whitespace-nowrap"
>
  View all Case Studies
</a>

          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="space-y-10 sm:space-y-14 md:space-y-14 lg:space-y-32 pt-8 lg:pt-0">
              {caseStudies.map((study, index) => (
  <a
    key={study.title}
    href={study.link}
    className="block"
  >
    <motion.div
      style={{
        y:
          typeof window !== "undefined" && window.innerWidth >= 1024
            ? index % 2 === 0
              ? ySlow
              : yFast
            : 0,
      }}
      className="group relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl will-change-transform"
    >
      <img
        src={study.image}
        alt={study.title}
        className="w-full object-cover aspect-[4/3] sm:aspect-[16/9] transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-5 sm:p-8 lg:p-12">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
            {study.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/90 line-clamp-3">
            {study.description}
          </p>
        </div>
      </div>
    </motion.div>
  </a>
))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
