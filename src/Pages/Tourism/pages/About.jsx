import React from 'react';
import { motion } from 'framer-motion';

const TourismAbout = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Main Section: Header & Image Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          
          {/* Header & Bio */}
          <motion.div variants={fadeInUp}>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-600 mb-6">
              ABOUT SHERPAVERSE LTD
            </p>
            <h2 className="text-4xl md:text-6xl font-light text-black tracking-tight leading-none mb-10">
              Who We Are
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
              Sherpaverse Ltd is a tourism development organization working across 
              community development, destination activation, and workforce capacity building.
            </p>
          </motion.div>

          {/* Cinematic Main Image */}
          <motion.div 
            variants={fadeInUp}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
          >
            <img 
              src="/images/zumarock.jpg" 
              alt="Tourism development in practice"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        {/* Narrative Block */}
        <motion.div variants={fadeInUp} className="mb-32">
          <p className="max-w-3xl text-lg md:text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-teal-500 pl-8">
            We combine research, local engagement, and practical implementation to move 
            tourism ideas from paper to practice—creating tourism systems that are 
            viable, inclusive, and built to function sustainably.
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-20 border-t border-gray-100">
          
          {/* Mission */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/mission.jpg" 
                alt="Our Mission" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-black flex items-center gap-3">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-gray-800 font-light leading-snug">
                To design sustainable tourism destinations while building the skills and 
                institutions required to support long-term impact.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/vision.jpg" 
                alt="Our Vision" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-black flex items-center gap-3">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Our Vision
              </h3>
              <p className="text-xl md:text-2xl text-gray-800 font-light leading-snug">
                A resilient tourism economy where communities benefit equitably, 
                destinations are competitive, and people are equipped to participate 
                meaningfully in tourism growth.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TourismAbout;