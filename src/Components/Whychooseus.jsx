import React from 'react'
import { whychooseimg } from '../import'
import { Link } from 'react-router'
import { IoIosMore } from 'react-icons/io'
import { reasons } from '../Pages/Homepage/Whychooseuspage'
import { motion } from 'framer-motion'

const Whychooseus = () => {
  return (
    <section id='whychooseus' className='relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden bg-black'>
      {/* BACKGROUND LAYER */}
      <div className='absolute inset-0 z-0'>
        <img 
          className='w-full h-full object-cover opacity-50 grayscale' 
          src={whychooseimg} 
          alt="Why choose Sherpaverse" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-teal-950/70 to-[#0a0a0a]"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-8">Why Choose Us</h2>
            <p className='text-gray-300 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              We craft seamless, personalized experiences designed around your unique needs, ensuring every journey is smooth, exclusive, and unforgettable.
            </p>
          </motion.div>
        </div>

        {/* REASONS GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:bg-white/10 transition-all duration-500'
            >
              <div className='flex flex-col h-full'>
                <span className='text-teal-500 font-bold text-sm tracking-widest mb-6 block opacity-50 group-hover:opacity-100'>
                  {reason.index}
                </span>
                <h4 className='text-white text-2xl font-light mb-4 tracking-tight group-hover:text-teal-400 transition-colors'>
                  {reason.title}
                </h4>
                <p className='text-gray-400 font-light text-sm leading-relaxed'>
                  {reason.desc}
                </p>
              </div> 
            </motion.div>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <div className='flex justify-center'>
          <Link to="/whychooseus">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-4 bg-teal-600 text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              <IoIosMore size={22}/>
              See more reasons
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Whychooseus;