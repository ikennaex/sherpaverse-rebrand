import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css"

const Herosection = () => {
  const images = [
    {
      imgUrl: "https://img.freepik.com/premium-photo/suitcase-with-famous-monuments-isolated-with-clouds-famous-buildings-landmarks-towers-travel_741269-8.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/free-photo/woman-checking-map-autumn-travel-destination_23-2148634143.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/free-photo/trendy-looking-african-american-tourist-with-backpack-hat-sunglasses-studying-directions-using-city-guide-while-exploring-sights-landmarks-resort-town_273609-952.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/premium-photo/untitled-design-5_1210786-40.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
  ]

  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto'>
        {/* Main Wrapper: Maintained your structure but refined spacing/alignment */}
        <div className='flex flex-col lg:flex-row items-center justify-around gap-10 px-7 py-16 lg:py-24 lg:px-10'>
          
          {/* Left Content Column */}
          <div className="lg:w-1/2 max-w-2xl">
            <p className="text-teal-400 font-bold tracking-widest text-sm mb-4 uppercase">
              WELCOME TO SHERPAVERSE LTD
            </p>
            
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 slide-in-bottom'>
              ELEVATING TRAVEL CONCIERGE SERVICES IN NIGERIA…
            </h2>
            
            <p className='text-white/80 text-sm md:text-base leading-relaxed mb-10 slide-in-left'>
              At Sherpaverse, inspired by the legendary Sherpas of the Himalayas - your trusted guides to extraordinary journeys, we specialize in delivering seamless, tailor-made travel concierge experiences designed to meet your unique needs. Through our expertise, global partnerships, and commitment to excellence, we ensure every journey is smooth, exclusive, and truly unforgettable.
            </p>

            <div className='flex flex-wrap items-center gap-4 md:gap-6 slide-in-left2'>
              <a target='_blank' href="https://wa.me/2349057559292" rel="noreferrer">
                <button className='cursor-pointer flex gap-3 items-center bg-teal-600 hover:bg-teal-500 transition-colors px-6 py-4 lg:px-8 rounded-2xl font-bold text-white shadow-lg shadow-teal-900/20'>
                  <FaWhatsapp size={24} />
                  <span>Chat us</span>
                </button>
              </a>
              
              <button className='cursor-pointer flex gap-3 items-center border-2 border-teal-600 hover:bg-teal-600 transition-all px-6 py-4 lg:px-8 rounded-2xl font-bold text-white'>
                <MdOutlineMail size={24} />
                <span>Email us</span>
              </button>
            </div>
          </div>

          {/* Right Image Grid Column */}
          <div className='lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-4'>
            {images.map((image, index) => (
              <div key={index} className='overflow-hidden rounded-xl group'>
                <img 
                  className='object-cover w-full h-40 md:h-52 lg:h-60 transition-transform duration-500 group-hover:scale-110 slide-in-blurred-bottom' 
                  src={image.imgUrl} 
                  alt={image.alt} 
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Herosection