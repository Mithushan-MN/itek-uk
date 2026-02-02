// src/components/FaqSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How quickly can I see results from Google Ads?",
    answer:
      "Google Ads can start driving traffic immediately after launch. However, meaningful performance improvements usually appear within the first 2–4 weeks as data is collected, bids are optimised, and ads are refined for better conversions.",
  },
  {
    question: "Do you manage my Google Ads budget or just the campaigns?",
    answer:
      "We offer full-service management, including budget allocation, daily optimisation, bid adjustments, and performance reporting. You retain full control and transparency — we never lock your budget or spend without your approval.",
  },
  {
    question: "What types of Google Ads do you manage?",
    answer:
      "We manage the full suite: Search Ads, Display Network, Performance Max, Shopping Ads, Video (YouTube), App campaigns, Discovery Ads, and Local Services Ads — tailored to your goals, audience, and industry.",
  },
  {
    question: "How do you track conversions and ROI?",
    answer:
      "We use Google Analytics 4 + Google Tag Manager for accurate conversion tracking (leads, sales, form submissions, calls, etc.). We set up enhanced conversions, offline conversion import, and custom ROI dashboards so you always see real business impact — not just clicks.",
  },
  {
    question: "Why should I hire a Google Ads agency instead of running ads myself?",
    answer:
      "Google Ads is deceptively simple but extremely competitive. Agencies bring years of data, advanced bidding strategies, creative testing frameworks, negative keyword mining, audience layering, and constant algorithm updates — most in-house efforts lose money due to wasted spend. We typically deliver 2–5× better ROI than self-managed campaigns.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white text-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            DON'T STRESS, WE'VE GOT
            <br className="hidden sm:block" />
            <span className="text-red-600">ANSWERS</span>
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-6 md:py-8 flex justify-between items-center group focus:outline-none"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors pr-8">
                  {faq.question}
                </h3>

                <span className="text-3xl md:text-4xl font-light text-gray-500 group-hover:text-red-600 transition-colors flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 md:pb-10 pr-8">
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
