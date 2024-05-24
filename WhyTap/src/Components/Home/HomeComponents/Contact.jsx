import React from 'react'

function Contact() {
  return (
    <div className='p-5 lg:p-10'>
        <div className=' bg-primary w-full h-[220px] flex justify-center items-center rounded-md'>
            <div className='flex md:flex-row md:gap-0 h-full md:py-0 py-5 flex-col justify-between items-center px-5 w-full'>
               <p className=' sm:text-3xl xs:text-2xl text-xl font-semibold text-white md:text-start text-center'>We Help You in <br /> Finding Your <span className='text-yellowPrimary'>Right Course</span></p>
               <button className=' text-white xs:px-5 xs:py-3  hover:bg-white hover:text-black  transition-all   py-2 px-3 xs:text-base text-sm rounded-md w-fit h-fit bg-yellowPrimary'>Contact Student Counsellor</button>
            </div>
        </div>

    </div>
  )
}

export default Contact