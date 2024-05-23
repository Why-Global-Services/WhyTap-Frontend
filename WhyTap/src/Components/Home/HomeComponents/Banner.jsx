import React from 'react'
import SecondSection from './SecondSection'

function Banner() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full lg:flex-row flex-col flex'>
            <div className='lg:w-[45%] w-full h-full'></div>
            <div className='lg:w-[55%] bg-primary w-full h-full bg-opacity-20'>
              
            </div>

        </div>
        <SecondSection />

    </div>
  )
}

export default Banner