import React from 'react';
import { motion } from "framer-motion";

const AppointmentCTA = () => {
  return (
    <section className="pt-10 bg-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative overflow-hidden bg-[#0a0a0a] rounded-2xl p-12 md:p-20 text-center"
      >
        {/* Subtle Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-8">
            Book an Appointment with Sherpaverse 
          </h2>
          
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Connect with our experts to discuss your specific needs and explore tailored tourism development strategies.
          </p>

          <motion.a
          target='_blank'
            href="https://selar.com/9l9f766967" // Add your booking link here (Calendly, etc.)
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-xl"
          >
            Book an appointment with us here
            <span className="text-lg">→</span>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
};

export default AppointmentCTA;