import React from "react";
import { motion } from "framer-motion";

const OurBelief = () => {
  // Animation for the container to orchestrate children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Subtle upward slide for large text blocks
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-40 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Label Side */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              {/* Animated accent line */}
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }} // 8rem
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-teal-500"
              ></motion.span>
              <motion.p 
                variants={fadeInUp}
                className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-500"
              >
                Our Belief
              </motion.p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-8">
            {/* The "Green Oil" Statement */}
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-16"
            >
              OUR BELIEF <br />
              Tourism is Nigeria’s <span className="font-serif italic text-teal-400">Green Oil.</span>
            </motion.h2>

            <div className="max-w-2xl">
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
              >
                When designed intentionally, tourism can:
              </motion.p>

              {/* Minimal List with staggered reveal */}
              <motion.ul className="space-y-6 mb-16">
                {[
                  "Create dignified jobs", 
                  "Strengthen local economies", 
                  "Preserve culture and environment", 
                  "Equip youth with transferable global skills"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={listItemVariants}
                    className="flex items-center gap-6 group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5, backgroundColor: "#2dd4bf" }}
                      className="w-2 h-2 rounded-full border border-teal-500 transition-colors"
                    ></motion.span>
                    <span className="text-lg md:text-xl text-white font-light tracking-wide">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Conclusion Text with a slight reveal delay */}
              <motion.div 
                variants={fadeInUp}
                className="pt-12 border-t border-white/10"
              >
                <p className="text-lg text-gray-500 leading-relaxed italic">
                  But this is only realized when tourism is built around people, 
                  skills, and long-term sustainability rather than short-term gains
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default OurBelief;