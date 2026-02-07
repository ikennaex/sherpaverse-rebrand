import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  // Variants for the text container
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

  // Variants for individual text items
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-customGreen w-full min-h-screen flex items-center overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto">
        {/* Left Content Side: Bold & Expressive */}
        <motion.div
          className="w-full lg:w-1/2 px-6 py-16 md:px-16 lg:px-24 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={itemVariants}
            className="text-teal-600 font-bold tracking-[0.2em] text-xs uppercase mb-8"
          >
            About Us
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-thin text-black leading-[0.9] tracking-tighter mb-12"
          >
            Building Tourism Systems That Works for Communities, Destinations,
            and People
          </motion.h2>

          <motion.div className="max-w-xl space-y-8" variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              Sherpaverse Ltd is a tourism development and management company
              working with communities and stakeholders alike to rethink and
              unlock tourism potential as a driver of equitable and inclusive
              economic growth.
            </p>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              Our work spans destination development, destination marketing, and
              practical capacity-building, ensuring tourism growth is grounded
              in local value while aligned with global standards.
            </p>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              We are currently focused on Nigeria’s tourism ecosystem, with a
              long-term vision to support destinations across Africa and beyond.
            </p>
          </motion.div>
          <Link to="/tourism/about" className="inline-block mt-6">
            <button className="p-3 px-4 bg-black text-white">Learn More</button>
          </Link>
        </motion.div>

        {/* Right Image Side: Smooth Reveal */}
        <motion.div
          className="w-full lg:w-1/2 h-[500px] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/idanrehills.jpeg"
            alt="Tourism team and community"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />

        </motion.div>
      </div>
    </section>
  );
};

export default About;
