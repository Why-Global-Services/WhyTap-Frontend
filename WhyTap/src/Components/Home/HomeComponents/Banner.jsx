import React from 'react'
import SecondSection from './SecondSection'

function Banner() {
  return (
    <div className='w-full bg-gray-100 h-screen relative  p-5 lg:p-0 '>
<svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#861b47" fill-opacity="0.2" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='w-full h-full lg:flex-row justify-center items-center relative overflow-hidden flex-col flex'>
            <div className='lg:w-[45%]   relative w-full h-full'>
              <div className='lg:w-[80%] mx-auto flex flex-col justify-center items-center lg:items-start gap-14 sm:gap-8 md:gap-5 h-full'>
                <p className=' text-lg text-primary lg:text-start text-center font-bold'>EMPOWERING STUDENTS , EMPOWERING INDIA</p>
                <p className='md:text-[36px] text-3xl font-semibold leading-normal lg:text-start text-center'>India's No:1 <span className='text-primary'>IT</span> Training Institute with <span className='text-primary'>100%</span> Job Assistance</p>
                 <p>Take your career to next level</p>
                 <button className='bg-primary px-6 rounded-md border-2 hover:text-primary transition-all border-primary hover:bg-transparent text-white  py-2'>Book Now</button>
              </div>

            </div>
            <div className='lg:w-[55%] lg:flex hidden overflow-hidden  w-full h-full relative bg-opacity-20'>
              <img src="/rings.png" className='h-32 object-contain absolute -right-20 top-1/4 ' alt="" />
             <img className='h-[80%]  object-center left-1/2 -translate-x-1/2 absolute bottom-0' src='/studio-shot-brunette-girl-casual-outfit-removebg-preview (1).png'></img>
            </div>
            <h1 className='w-fit text-5xl sm:text-[100px] tracking-widest h-fit opacity-20  font-bold texts  absolute lg:left-5 lg:-translate-x-0 left-1/2 -translate-x-1/2  bottom-0 text-transparent '>WHYTAP</h1>

        </div>

    </div>
  )
}

export default Banner