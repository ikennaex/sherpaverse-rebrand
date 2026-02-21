import React from 'react';
import { motion } from "framer-motion";

const StiPage = () => {
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
      {/* SECTION 1: HEADER & INTRODUCTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[80vh] flex items-center py-24 md:py-40 text-white overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sti.png" 
            alt="Sherpaverse Tourism Institute" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-light tracking-tighter mb-8 uppercase">
              SHERPAVERSE TOURISM INSTITUTE (STI)
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-teal-400 font-light text-lg italic mb-16">
              Learn. Build. Transform
            </motion.p>
            
            <div className="lg:px-40 text-left mx-auto pt-12 border-t border-white/20">
              <motion.p variants={fadeInUp} className="text-gray-200 font-light text-lg leading-relaxed">
                The Sherpaverse Tourism Institute (STI) is a non-degree, practice-based training arm that equips participants to support tourism development through hands-on learning and pilot initiatives.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STI PROGRAMMES */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-teal-500 mb-12 border-b border-white/5 pb-4">STI PROGRAMMES</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 1. Tourism Bootcamp */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-white/5 p-10 border border-white/10 flex flex-col">
              <h3 className="text-2xl font-light mb-6 text-white">1. Tourism Bootcamp</h3>
              <p className="text-gray-400 font-light mb-8 text-sm leading-relaxed">
                A short-term, intensive programme equipping participants with foundational tourism knowledge, practical skills, and exposure to real development challenges.
              </p>
              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-white mb-4 font-bold">Focus areas include:</p>
                <ul className="text-[11px] uppercase tracking-widest text-teal-400 space-y-2 mb-8">
                  <li>• Tourism fundamentals and destination management</li>
                  <li>• Community-Based Tourism (CBT)</li>
                  <li>• Responsible and sustainable tourism</li>
                  <li>• Destination experience planning and activation</li>
                </ul>
                <p className="text-gray-500 text-[11px] italic border-t border-white/5 pt-4">
                  The Bootcamp is designed to translate learning into action, preparing participant to contribute meaningfully to tourism developments.
                </p>
              </div>
            </motion.div>

            {/* 2. Professional Skills Training */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-white/5 p-10 border border-white/10 flex flex-col">
              <h3 className="text-2xl font-light mb-6 text-white">2. Professional Skills Training</h3>
              <p className="text-gray-400 font-light mb-8 text-sm leading-relaxed">
                Targeted training for emerging and working professionals in the tourism sector, covering:
              </p>
              <ul className="text-[11px] uppercase tracking-widest text-teal-400 space-y-4 mb-8">
                <li>• Travel operations and tour design</li>
                <li>• Customer experience and hospitality</li>
                <li>• Tourism entrepreneurship</li>
                <li>• Digital tools for tourism and destination visibility</li>
              </ul>
              <p className="text-gray-500 text-[11px] italic mt-auto border-t border-white/5 pt-4">
                These programmes ensure participants acquire practical, market-ready skills that support both local and global tourism systems.
              </p>
            </motion.div>
          </div>

          {/* 3. Tourism Labs */}
          <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            className="bg-white/5 p-10 lg:p-16 flex flex-col text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-light mb-6 italic">3. Tourism Labs</h3>
                <p className="font-light mb-6 text-lg opacity-90 leading-relaxed">
                  Tourism Labs is Sherpaverse’s innovation hub, a platform for piloting, testing, and scaling tourism initiatives.
                </p>
                <p className="font-light text-sm opacity-90 leading-relaxed mb-8">
                  Participants collaborate with peers, communities and stakeholders to research, design, implement, and scale concepts into real-world tourism projects, with a strong focus on business viability and sustainable revenue models.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2">Lab activities include:</h4>
                <ul className="space-y-4 mb-8 text-teal-400">
                  {[
                    "Community-based tourism pilots",
                    "Destination experience mapping",
                    "Youth-led tourism initiatives",
                    "Feasibility studies and applied research",
                    "Business development and entrepreneurship support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light">
                      <span className="opacity-60">0{i+1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] italic opacity-80 border-t border-white/20 pt-4">
                  Labs serve as a launchpad for tourism innovations, providing guidance, mentorship, and resources to turn creative ideas into actionable impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-32 bg-white text-center border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-black font-light leading-snug px-6">
            Together, we create tourism systems that <span className="text-teal-600 italic">strengthen communities</span> and unlock opportunities for youth.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default StiPage;