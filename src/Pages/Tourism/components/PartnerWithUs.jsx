import React from "react";
import { motion } from "framer-motion";

const PartnerWithUs = () => {
  // Animation for the main blocks
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Stagger container for the lists
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation for individual list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-600 mb-6">
            PARTNER WITH SHERPAVERSE LTD
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-black tracking-tight leading-none mb-8">
            Collaboration for <br className="hidden md:block" /> Sustainable Impact
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Sherpaverse works with a wide range of partners to design and implement
            tourism solutions that are inclusive, practical, and sustainable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Partners List */}
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="text-xs uppercase tracking-widest font-bold text-black mb-10 pb-4 border-b border-gray-100">
              We collaborate with:
            </motion.h3>
            <ul className="space-y-6 text-lg md:text-xl text-gray-800 font-light">
              {[
                "Government agencies",
                "Local communities",
                "NGOs and development organizations",
                "Corporates and CSR programmes",
                "Educational institutions"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={listItemVariants}
                  whileHover={{ x: 8, color: "#0d9488" }} // teal-600
                  className="flex items-center gap-4 cursor-default transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Opportunities List */}
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="text-xs uppercase tracking-widest font-bold text-black mb-10 pb-4 border-b border-gray-100">
              Our partnership opportunities include:
            </motion.h3>
            <ul className="space-y-6 text-lg md:text-xl text-gray-800 font-light">
              {[
                "Destination development and activation",
                "Community-Based Tourism projects",
                "Youth training and workforce programmes",
                "Research, pilots, and donor-funded initiatives"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={listItemVariants}
                  whileHover={{ x: 8, color: "#000" }}
                  className="flex items-center gap-4 cursor-default transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Statement */}
        <motion.div 
          variants={fadeInUp}
          className="mt-24 pt-16 border-t border-gray-100 text-center"
        >
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-snug">
            Together, we create tourism systems that strengthen
            communities, unlock opportunities for youth, and deliver measurable
            impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerWithUs;