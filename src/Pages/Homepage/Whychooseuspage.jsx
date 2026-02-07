import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// Data remains consistent as per your request
export const reasons = [
  {
    index: "01",
    title: "Tailored to You",
    desc: "We analyze your profile to create a custom travel, visa, education, or tourism plan that aligns perfectly with your goals."
  },
  {
    index: "02",
    title: "Trusted Expertise",
    desc: "With 6+ years of industry experience, we provide reliable, high-quality services backed by deep knowledge and proven success."
  },
  {
    index: "03",
    title: "Hassle-Free Execution",
    desc: "From planning to completion, our team ensures a stress-free experience, handling every detail with precision."
  },
  {
    index: "04",
    title: "Exclusive Global Access",
    desc: "Our strong international partnerships grant you outstanding services, VIP benefits, and world-class experiences."
  },
  {
    index: "05",
    title: "Comprehensive Solutions",
    desc: "From study abroad, luxury travel to M.I.C.E. tourism and TEFL/TESOL training, we offer everything you need in one place."
  },
  {
    index: "06",
    title: "Commitment to Excellence",
    desc: "We prioritize quality, integrity, and customer satisfaction, delivering exceptional experiences every time."
  },
]

const Whychooseuspage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="bg-white min-h-screen">
      {/* HEADER HERO SECTION */}
      <section className="bg-stone-100 py-24 md:py-32 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter text-black mb-10">
              Why Choose <span className="italic">Sherpaverse</span>
            </h1>
            <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We craft seamless, personalized experiences designed around your unique needs. 
              With our expertise and global partnerships, we ensure every journey is exclusive and unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REASONS GRID */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-10 bg-stone-50 border border-stone-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-teal-500/20 transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-light text-stone-200 group-hover:text-teal-600/20 transition-colors duration-500">
                      {reason.index}
                    </span>
                    <div className="w-8 h-[1px] bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}

export default Whychooseuspage