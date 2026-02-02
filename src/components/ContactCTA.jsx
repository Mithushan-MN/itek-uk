// src/components/ContactCTA.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import yourBgImage from '../assets/008-.png';

export default function ContactCTA() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={yourBgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glassmorphic Content Container */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl bg-white/20 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-red-500 mb-6 md:mb-8 leading-tight drop-shadow-2xl"
        >
          Let's Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <Link
            to="/contact"
            className="inline-block bg-white/90 text-black font-bold text-lg sm:text-xl md:text-2xl px-12 py-6 md:px-16 md:py-8 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:bg-white/100 transition-all duration-500 transform hover:-translate-y-2 active:scale-95"
          >
            Let’s talk
          </Link>
        </motion.div>
      </div>

      {/* Optional bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" /> */}
    </section>
  );
}
