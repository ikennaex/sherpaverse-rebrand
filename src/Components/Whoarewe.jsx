import React from "react";
import { whoareweimg } from "../import";
import { Link } from "react-router";
import { motion } from "framer-motion";

const WhoAreWe = () => {
  return (
    <section className="bg-stone-100 py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE BLOCK - Taking up 7 columns */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            {/* Decorative background frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-teal-600/20 z-0"></div>
            
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                src={whoareweimg} 
                alt="Sherpaverse Team" 
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK - Taking up 5 columns and overlapping slightly */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:-ml-20 z-20"
          >
            <div className="bg-white p-10 md:p-16 shadow-xl border-t-4 border-teal-600">
              <span className="text-teal-600 text-[10px] uppercase tracking-[0.5em] font-bold block mb-6">
                Our Identity
              </span>
              
              <h2 className="text-4xl md:text-5xl font-light text-black tracking-tighter mb-8 leading-tight">
                Who Are We
              </h2>
              
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
                Sherpaverse Ltd is a travel concierge startup specializing in luxury
                travel, visa assistance, study abroad, M.I.C.E. tourism, and 
                professional TEFL/TESOL training. 
              </p>
              
              <p className="text-gray-500 font-light text-base leading-relaxed mb-12 italic border-l-2 border-stone-200 pl-6">
                We craft personalized experiences to make every journey seamless and unforgettable.
              </p>

              <Link to="/about-us" className="group inline-flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black group-hover:text-teal-600 transition-colors">
                  Learn more about our mission
                </span>
                <div className="w-12 h-[1px] bg-black group-hover:w-20 group-hover:bg-teal-600 transition-all duration-500"></div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;