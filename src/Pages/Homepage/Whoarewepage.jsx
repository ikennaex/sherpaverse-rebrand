import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { whoareweimg } from "../../import";

const Whoarewepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceList = [
    { title: "Luxury Travel Planning", desc: "Tailored itineraries and exclusive experiences." },
    { title: "Visa Assistance", desc: "Streamlined and hassle-free visa services." },
    { title: "Study Abroad Support", desc: "Expert guidance for international education." },
    { title: "M.I.C.E. Tourism", desc: "Professional services for Meetings, Incentives, Conferences, and Exhibitions." },
    { title: "Leisure Tourism", desc: "Curating unforgettable vacations and getaways." },
    { title: "Professional Training", desc: "Certified TEFL/TESOL programs for aspiring educators." },
  ];

  return (
    <main className="bg-stone-50 min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-light tracking-tighter text-black"
          >
            Who Are We
          </motion.h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto mt-10"></div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* STICKY IMAGE CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border border-teal-600/10 rounded-2xl group-hover:border-teal-600/30 transition-colors duration-700"></div>
              <img 
                className="relative rounded-xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
                src={whoareweimg} 
                alt="Sherpaverse Team" 
              />
            </div>
          </motion.div>

          {/* TEXT & SERVICES LIST */}
          <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight mb-8">
                Redefining convenience and excellence in <span className="italic text-teal-600">global travel.</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
                Sherpaverse Ltd is a premier travel concierge specializing in creating personalized luxury travel experiences. We craft journeys that are seamless, enriching, and unforgettable.
              </p>
            </motion.div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mt-16 pt-16 border-t border-stone-200">
              {serviceList.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                    <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CLOSING TAGLINE */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 p-8 bg-teal-600 text-white rounded-xl shadow-xl"
            >
              <p className="text-xl font-light italic leading-relaxed">
                "Our mission is to ensure every journey is smooth, exclusive, and truly unforgettable, acting as your trusted guide through the complexities of global mobility."
              </p>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Whoarewepage;