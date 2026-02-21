import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";

const OurWork = () => {
  const location = useLocation();
  // Container variants to stagger the focus area list items
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side: Impact Image with Scale Reveal */}
        <motion.div
          className="w-full lg:w-5/12 h-[400px] lg:h-auto lg:sticky lg:top-0 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="/images/rock.jpg"
            alt="Tourism destination activation"
            className="w-full h-full lg:object-right object-cover transition-all duration-1000"
          />
        </motion.div>

        {/* Right Side: Structured Content */}
        <div className="w-full lg:w-7/12 px-6 py-16 md:px-16 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Section Label */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-12"
            >
              <span className="h-[1px] w-6 bg-teal-500"></span>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">
                Our work
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-8 tracking-tighter"
            >
              Destination Development & Activation
            </motion.h2>

            {/* Core Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-2xl"
            >
              We support the end-to-end development of tourism destinations from
              concept and structure to visibility and demand.
            </motion.p>

            {/* Focus Areas Grid */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 lg:p-12 border-l-4 border-teal-500"
            >
              <p className="text-xs uppercase tracking-widest font-bold text-black mb-6">
                Focus areas:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base text-gray-700">
                {[
                  "Community-Based Tourism (CBT) design and structuring",
                  "Destination and visitor experience development",
                  "Tourism initiatives across cultural, natural, coastal, and community context",
                  "Destination positioning and market readiness",
                  "Experience-led destination marketing and activation",
                  "Pilot campaigns and demand testing (where appropriate)",
                  "Advisory support for public and private stakeholders",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-2"
                  >
                    <span className="text-teal-500">•</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Closing Statement */}
            <motion.p
              variants={fadeInUp}
              className="mt-12 text-sm md:text-base text-gray-400 font-medium italic leading-relaxed max-w-xl"
            >
              We think in systems, not silos, and approach destination
              development as an interconnected system aligning with people,
              product, market and governance
            </motion.p>

            {location.pathname === "/" && (
              <Link to="/ourwork" className="inline-block mt-6">
                <button className="p-3 px-4 bg-black text-white">
                  Learn More
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
