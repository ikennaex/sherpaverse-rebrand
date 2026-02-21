import React from "react";
import { motion } from "framer-motion";
import AppointmentCTA from "../components/AppointmentCTA";

const TourismContactPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="min-h-screen bg-white pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Information & Identity */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.p variants={fadeInUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-600 mb-6">
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-light text-black tracking-tighter leading-none mb-8">
              Let’s Build the <br /> 
              <span className="font-serif italic text-teal-500">Green Oil</span> Together.
            </motion.h1>
            
            {/* <motion.p variants={fadeInUp} className="text-lg text-gray-500 font-light leading-relaxed max-w-md mb-12">
              Whether you are a government agency, a local community, or a private stakeholder, 
              we are ready to help you unlock the potential of sustainable tourism.
            </motion.p> */}

            {/* Contact Details */}
            <motion.div variants={fadeInUp} className="space-y-8 pt-8 border-t border-gray-100">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black mb-2">Email Us</h4>
                <a href="mailto:hello@sherpaverse.com" className="text-xl font-light text-gray-800 hover:text-teal-600 transition-colors">
                  info@thesherpaverse.com, sherpaverse.ltd@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black mb-2">Phone Number</h4>
                <a href="mailto:hello@sherpaverse.com" className="text-xl font-light text-gray-800 hover:text-teal-600 transition-colors">
                  +234 (0) 905 755 9292, +234 (0) 903 118 9362
                </a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black mb-2">Our Reach</h4>
                <p className="text-xl font-light text-gray-800">
                  Currently focused on Nigeria’s tourism ecosystem with a pan-African vision.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    className="bg-transparent border-b border-gray-300 py-3 focus:border-teal-500 outline-none transition-colors font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    className="bg-transparent border-b border-gray-300 py-3 focus:border-teal-500 outline-none transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Organization Type</label>
                <select className="bg-transparent border-b border-gray-300 py-3 focus:border-teal-500 outline-none transition-colors font-light text-gray-500">
                  <option>Government Agency</option>
                  <option>Local Community</option>
                  <option>NGO / Development Org</option>
                  <option>Corporate / CSR</option>
                  <option>Individual / Professional</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">How can we collaborate?</label>
                <textarea 
                  rows="4" 
                  className="bg-transparent border-b border-gray-300 py-3 focus:border-teal-500 outline-none transition-colors font-light resize-none"
                  placeholder="Tell us about your project or initiative..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-5 text-xs uppercase tracking-[0.3em] font-bold mt-8 hover:bg-teal-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form> */}
          </motion.div>

        </div>
      </div>

      <AppointmentCTA />

      {/* Footer Visual Section */}
      <div className="mt-10 h-64 w-full hover:opacity-50 transition-opacity duration-1000">
        <img 
          src="/images/olumorock.jpeg" 
          alt="Tourism Landscape" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default TourismContactPage;