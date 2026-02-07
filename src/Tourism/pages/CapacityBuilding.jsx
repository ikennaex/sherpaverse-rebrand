import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CapacityBuilding = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-white">
      {/* SECTION 1: CORE CAPACITY BUILDING */}
      <section className="py-24 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-[14px] md:text-[18px] uppercase tracking-[0.2em] font-bold text-teal-600 mb-8"
          >
            Capacity Building
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-light text-black tracking-tighter leading-[0.9] mb-12 max-w-5xl"
          >
            Sustainable tourism requires skilled people, not just
            infrastructure.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mb-20"
          >
            Through practice-based programmes, we build local capacity to plan,
            manage, deliver, and sustain tourism development initiatives.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-t border-gray-100 pt-20"
          >
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black opacity-50">
                  Focus areas
                </h4>
                <ul className="space-y-5 text-gray-600 font-light text-lg md:text-xl">
                  {[
                    "Tourism fundamentals",
                    "Community leadership",
                    "Entrepreneurship",
                    "Service quality",
                    "Workforce integration",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 
              <Link to="/sherpaverse-tourism-institute" className="inline-block mt-12 group">
                <button className="inline-block bg-black text-white px-10 py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-teal-600 transition-colors">
                  Learn More <span className="text-xl">→</span>
                </button>
              </Link> */}
            </div>

            <div className="lg:col-span-2 aspect-video md:aspect-auto md:h-[600px] overflow-hidden bg-gray-100">
              <img
                src="/images/olumorock.jpeg"
                alt="Capacity Building"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: STI PREVIEW (THE BETTER LOOK) */}
      <section className="bg-gray-50 py-32 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <h2 className="text-4xl md:text-5xl font-light text-black tracking-tighter leading-tight mb-8">
                Sherpaverse Tourism Institute (STI)
              </h2>
              <p className="text-gray-500 font-light text-lg mb-10 leading-relaxed">
                Our non-degree, practice-based training arm equips participants
                to support tourism development through hands-on learning.
              </p>
              <Link
                to="/tourism/sti"
                className="inline-block bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-teal-600 transition-colors"
              >
                View Institute Details
              </Link>
            </motion.div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                  <h3 className="text-lg font-medium mb-2">Tourism Bootcamp</h3>
                  <div className="w-10 h-[1px] bg-teal-500 mb-4"></div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Short-term, intensive foundational training.
                  </p>
                </div>

                <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                  <h3 className="text-lg font-medium mb-2">
                    Professional Skills
                  </h3>
                  <div className="w-10 h-[1px] bg-teal-500 mb-4"></div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Targeted training for emerging professionals.
                  </p>
                </div>

                <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                  <h3 className="text-lg font-medium mb-2">Tourism Labs</h3>
                  <div className="w-10 h-[1px] bg-teal-500 mb-4"></div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Our innovation hub for piloting, testing, and scaling
                    real-world initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div>
                    <h3 className="text-2xl text-black font-light mb-4 italic">Tourism Labs</h3>
                    <p className="text-sm opacity-80 font-light leading-relaxed text-gray-400">Our innovation hub for piloting, testing, and scaling real-world initiatives.</p>
                  </div>
               </div> */}
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* SECTION 3: TRAVEL & GLOBAL PATHWAYS */}
      <section className="bg-black py-24 md:py-10 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
          >
            <div className="lg:col-span-6">
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-12"
              >
                Travel <br /> Agency
              </motion.h2>

              <div className="space-y-8 max-w-xl text-gray-400 font-light text-lg md:text-xl leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Alongside our tourism development work, Sherpaverse operates a
                  travel and global mobility advisory supporting individuals,
                  institutions, and organisations with structured access to
                  international opportunities. This work complements our broader
                  mission of expanding global exposure, enabling skills
                  mobility, and supporting meaningful cross-border engagement.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="mt-16">
                <a
                  href="https://www.thesherpaverse.com/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 text-xs uppercase tracking-[0.3em] font-bold text-teal-400"
                >
                  Explore Services{" "}
                  <span className="group-hover:translate-x-4 transition-transform text-xl">
                    →
                  </span>
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-6 relative group"
            >
              <div className="absolute inset-0 border border-teal-500/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src="/images/travel.jpg"
                  alt="Global Mobility"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CapacityBuilding;
