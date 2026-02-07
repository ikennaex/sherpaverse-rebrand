import React from 'react'
import { motion } from 'framer-motion'
import { conceirge, leisure, sporttourism, studyabroad, tourism, trainings, visa } from '../import'

const Services = () => {
    const services = [
        { name: "Concierge Services", img: conceirge },
        { name: "Visa Assistance", img: visa },
        { name: "Leisure", img: leisure },
        { name: "Study Abroad", img: studyabroad },
        { name: "Tourism", img: tourism },
        { name: "Trainings (TEFL/TESOL)", img: trainings },
        { name: "Sport Tourism", img: sporttourism },
    ]

    return (
        <section id='services' className='py-24 md:py-40 bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                
                {/* REFINED HEADER */}
                <div className="mb-20 text-center">
                    <span className="text-teal-600 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-black">Services we render</h2>
                    <div className="w-20 h-1 bg-teal-600 mx-auto mt-8"></div>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                                <img 
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                                    src={service.img} 
                                    alt={service.name} 
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                
                                {/* Service Info (Positioned over image) */}
                                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform group-hover:-translate-y-2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-0 h-[1px] bg-teal-400 group-hover:w-12 transition-all duration-500"></div>
                                        <span className="text-[10px] text-teal-400 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Discover
                                        </span>
                                    </div>
                                    <h3 className="text-white text-2xl font-light tracking-tight group-hover:text-teal-400 transition-colors">
                                        {service.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services