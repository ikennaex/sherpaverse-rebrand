import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Upward fade for text elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Image with subtle entrance scale */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/heroimg.jpg"
          alt="Travel destination"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        {/* Soft radial vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_100%)]" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Minimalist Top Label */}
        <motion.span 
          variants={itemVariants}
          className="inline-block text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-8 border-b border-gray-700 pb-2"
        >
          THE SHERPAVERSE LTD
        </motion.span>

        {/* Clean, high-impact Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-light text-white tracking-tight leading-none mb-3"
        >
          Tourism Development •{" "}
          <span className="font-medium text-teal-400">
            {" "}
            Destination Activation{" "}
          </span>
          • Capacity Building
        </motion.h1>

        {/* Short, focused description */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-sm md:text-lg text-gray-400 font-light leading-relaxed mb-12"
        >
          Building community-driven tourism systems that create jobs, strengthen
          destinations, and prepare communities and tourism stakeholders for
          meaningful participation in the global tourism economy
        </motion.p>

        {/* Ultra-minimal Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="mailto:info@thesherperverse.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-3 overflow-hidden bg-white text-black text-sm font-medium transition-all hover:bg-teal-400 hover:text-white"
          >
            Email Us
          </motion.a>

          <motion.a
            target='_blank' href="https://wa.me/2349057559292"
            whileHover={{ x: 5 }}
            className="text-sm font-medium text-white hover:text-teal-400 transition-colors flex items-center gap-2"
          >
            Send a Chat
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Minimalist Element: Vertical Line with animation */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 96 }} // 24rem
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent to-gray-500/50" 
      />
    </section>
  );
};

export default Herosection;