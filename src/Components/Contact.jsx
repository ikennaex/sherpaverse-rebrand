import React from 'react'
import FadeIn from './fadein'

const Contact = () => {
  return (
    <div className=' bg-stone-200 py-7'>
        <div className='lg:px-40 lg:py-20 container mx-auto px-7'>
            <h2 className='text-2xl'>Feel Free to Contact Us</h2>

            <FadeIn duration = {100}>
            <form className='flex flex-col gap-4 pt-7' action="">
                <input className='bg-white border w-full rounded-md h-12 p-4 ' placeholder='Name:' type="text" />
                <input className='bg-white border w-full rounded-md h-12 p-4' placeholder='Email:' type="text" />
                <textarea className='bg-white border w-full rounded-md p-4' placeholder='Message' cols={30} name="" id=""></textarea>
                <button className='bg-teal-600 rounded-md py-3 text-white '>Submit</button>
            </form>
            </FadeIn>
        </div>
    </div>
  )
}

export default Contact