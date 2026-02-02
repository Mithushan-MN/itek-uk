// src/components/ServicesShowcase.jsx
import { motion } from 'framer-motion';

const services = [
  {
    title: "SEO",
    description:
      "Tailored SEO solutions that drive impactful results across search engines, social platforms, and LLMs.",
  },
  {
    title: "PPC",
    description:
      "Smart PPC campaigns leveraging data, AI, and creative thinking to target the right audiences.",
  },
  {
    title: "Paid Social",
    description:
      "Fresh, creatively-led paid social strategies that reach the right users, at the right time.",
  },
  
  {
    title: "GEO/AIO",
    description:
      "Generative Engine/AI Optimisation that puts your brand front and centre in AI answers, summaries, and search alternatives.",
  },
  {
    title: "Programmatic",
    description:
      "Impactful programmatic digital marketing campaigns that connect with your target audience.",
  },
  {
    title: "Strategy",
    description:
      "Audience-first digital marketing strategy to unlock success in a changing world, with AI embedded across planning and performance.",
  },
  {
    title: "Digital PR",
    description:
      "Campaigns that raise brand awareness, educate your audience, earn valuable links and build authority with LLMs.",
  },
  {
    title: "Content Marketing",
    description:
      "Original and authentic content that connects with your audience, builds brand authority, and drives visibility.",
  },
  {
    title: "Creative Production",
    description:
      "Creative that cuts through, shaped by storytelling, guided by strategy, and delivered through AI-enabled production.",
  },
  
  {
    title: "Analytics",
    description:
      "Turn your data into digital currency. Track the metrics that matter and enable action across your business KPIs.",
  },
  {
    title: "Data Science",
    description:
      "Use the power of machine learning to supercharge your decision-making. Don't guess the future; predict it.",
  },
  {
    title: "CRO",
    description:
      "Conversion strategies for a changing web. Built to drive action across AI-led, low-click, and high-intent moments.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesShowcase() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50/70 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative blurred circles – now in red tones */}
      <div className="absolute -top-24 -right-32 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 md:w-[400px] md:h-[400px] bg-gradient-to-tr from-red-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-red-600 font-medium tracking-widest uppercase text-sm sm:text-base mb-3"
          >
            DIGITAL MARKETING AGENCY SERVICES
          </motion.p>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-light italic tracking-tight leading-tight opacity-90"
            >
              We’re pretty proud of
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-1 sm:mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent"
            >
              OUR SERVICES
            </motion.h1>
          </div>
        </div>

        {/* Services Grid – now 2×2 on tablet, 4× on desktop, 1× on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          // Replace the grid className in your motion.div
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white/75 backdrop-blur-xl border border-white/40 rounded-2xl md:rounded-3xl p-7 md:p-9 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-400/50"
            >
              {/* Number badge – now red */}
              <div className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md group-hover:scale-110 transition-transform">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-red-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-base md:text-sm">
                {service.description}
              </p>

              {/* Hover gradient line – red */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            </motion.div>
          ))}

          
        </motion.div>
      </div>
    </section>
  );
}