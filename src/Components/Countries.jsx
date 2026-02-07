import React from 'react'
import { continents } from '../import'


const Countries = () => {
    const flags = [
        {
            name: "continents",
            flag: continents
        }
    ]
  return (
    <div className='container mx-auto'>
        <div className='md:my-14 md:gap-22 mx-7 flex flex-wrap gap-8 justify-center mt-7 '>
            {flags.map((flag) => {
                return (

                <div className='w-full flex items-center justify-center'>
                    <img className='lg:w-1/2 lg:h-66 h-42 w-full ' src= {flag.flag} alt= {flag.name} />
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Countries