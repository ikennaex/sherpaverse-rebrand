import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from "react-icons/fa";

const Whatpeoplesay = () => {
    const testimonials = [
        {
            testimonial: "I was initially overwhelmed by the thought of applying for a visa to visit Nigeria from the United States. However, SherpaVerse Ltd made the entire process smooth and stress-free. Their expert guidance, prompt assistance, and personalized approach ensured that every detail was handled efficiently.",
            name: "Adrienne Marchaund Clarke",
            location: "United States of America"
        },
        {
            testimonial: "SherpaVerse Ltd made studying in Malaysia possible. Their expert guidance streamlined the entire process, and now I’m thriving academically. Thank you!",
            name: "Busari Adebowale",
            location: "Malaysia"
        },
        {
            testimonial: "Thanks to SherpaVerse Ltd, I’m now going to study in Finland. Their seamless guidance made the process incredibly easy. Highly recommended",
            name: "Ezekiel Ademola",
            location: "Nigeria"
        },
        {
            testimonial: "SherpaVerse Ltd handled our UK visitor visa process with professionalism and efficiency. We were able to focus on our religious tour with peace of mind. We highly recommend their services.",
            name: "Pastor Mr. & Mrs. Olushola",
            location: "Nigeria"
        },
        {
            testimonial: "Working with SherpaVerse Ltd has been a seamless and rewarding experience. Their professionalism, efficiency, and industry expertise have added great value to our business.",
            name: "Edeani Moses Onyebuchi",
            location: "Edmoon Travels Nigeria"
        },
        {
            testimonial: "SherpaVerse Ltd is professional, Reliable and friendly. Letting them handle my study abroad plans was the best decision I made. I am now thriving in my academic journey in Canada",
            name: "Daniel Kolawole",
            location: "Canada"
        },
    ];

    return (
        <section id='testimonials' className='py-24 md:py-40 bg-stone-50 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                
                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-teal-600 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Client Stories</span>
                        <h2 className="text-4xl md:text-6xl font-light text-black tracking-tighter leading-none">
                            What People Say <br /> <span className="italic text-teal-600">About Us</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-400 font-light text-sm italic">Trusted by clients globally →</p>
                    </div>
                </div>

                {/* TESTIMONIALS MASONRY-STYLE GRID */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="break-inside-avoid bg-white p-10 shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500 relative group"
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-teal-500/10 text-4xl absolute top-6 right-8 group-hover:text-teal-500/20 transition-colors" />
                            
                            <div className="relative z-10">
                                <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg italic">
                                    "{item.testimonial}"
                                </p>
                                
                                <div className="pt-8 border-t border-stone-100">
                                    <h4 className="text-black font-bold text-sm uppercase tracking-widest mb-1">
                                        {item.name}
                                    </h4>
                                    <span className="text-teal-600 text-[10px] uppercase tracking-widest font-medium">
                                        {item.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Whatpeoplesay;