// src/components/BlogSection.jsx
import { motion } from 'framer-motion';

import darkBgSvg from '../assets/dark-birds-bg.svg'; // ← your dark black SVG file
import blog1 from '../assets/blog/seo.png';
import blog2 from '../assets/blog/seo.png';
import blog3 from '../assets/blog/seo.png';
import blog4 from '../assets/blog/seo.png';

const blogPosts = [
  {
    category: "Agency",
    date: "Nov 18, 2025",
    author: "Mithushan",
    title: "How SEO Audit Help You Fix Hidden Issues",
    image: blog1,
    link: "/blog/seo-audit",
  },
  {
    category: "Branding",
    date: "Nov 18, 2025",
    author: "Mithushan",
    title: "Why Your Business Needs a Strong Brand",
    image: blog2,
    link: "/blog/strong-brand",
  },
  {
    category: "Business Tips",
    date: "Nov 18, 2025",
    author: "Mithushan",
    title: "Why Local SEO Matters for UK Businesses",
    image: blog3,
    link: "/blog/local-seo-uk",
  },
  {
    category: "Agency",
    date: "Nov 20, 2025",
    author: "Mithushan",
    title: "The Future of Digital Marketing in 2026",
    image: blog4,
    link: "/blog/future-marketing",
  },
  // You can add more — grid auto-adjusts
];

export default function BlogSection() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-black">
      {/* Dark SVG background - subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={darkBgSvg}
          alt=""
          className="w-full h-full object-cover opacity-100 mix-blend-multiply"
        />
      </div>

      {/* Optional deeper dark gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0" /> */}

      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8">
        {/* Stylish Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            Latest from our <span className="text-red-500">Blog</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Insights, tips, and strategies to help your brand grow in the digital world.
          </motion.p>

          {/* Underline accent */}
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Blog Grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 flex flex-col h-full hover:border-red-500/50"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Content - light text for dark theme */}
              <div className="flex flex-col flex-grow p-6 md:p-7">
                <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>@{post.author}</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 line-clamp-3 group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>

                <div className="mt-auto pt-4">
                  <span className="text-red-400 font-medium group-hover:text-red-300 transition-colors text-sm sm:text-base">
                    Read More →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* More Blogs Button */}
        <div className="text-center mt-12 md:mt-16">
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 text-white font-bold px-10 py-5 rounded-full shadow-xl hover:bg-red-700 transition-all duration-300 text-lg md:text-xl"
          >
            More Blogs
          </motion.button>
        </div>
      </div>
    </section>
  );
}