import React from 'react'

function Demo() {
  return (
    <div className='p-5 lg:p-10'>
      <div className='w-full flex md:flex-row gap-8 flex-col md:h-[200px]  lg:h-[280px]'>
         <div className='md:w-1/2 lg:p-5 p-3 flex lg:flex-row flex-col justify-center items-center bg-[#F6F3ED] h-full rounded-xl'>
           <div className='flex lg:w-1/2 flex-col p-3 gap-5 justify-center items-center md:items-start'>
            <div className='flex w-full gap-5 flex-col lg:items-start items-center px-2'>
            <p className='xs:text-xl md:text-start text-center text-lg font-semibold w-fit'>Become An Instructor</p>
              <p className='w-fit font-extralight lg:text-start text-center text-gray-500 text-sm'>Top instructors from around the world teach millions of students on WHY Tap</p>
              <button className='bg-primary w-fit py-2 px-4 rounded-md text-white'>Start teaching today</button>
            </div>
          
           </div>
           <div className='lg:flex hidden w-1/2 flex-col h-full relative gap-5 justify-center lg:items-start'>
             <div className='w-60 absolute bottom-0 right-0'><img src="/mem.png" className='w-full drop-shadow-2xl' alt="" /></div>
           </div>

         </div>
         <div className='md:w-1/2 xs:p-5 p-3 flex justify-center items-center bg-gray-200 h-full rounded-xl'>
           <div className='flex lg:w-1/2 flex-col p-3 gap-5 justify-center lg:items-start'>
            <div className='flex w-full gap-5 flex-col lg:items-start items-center px-2'>
            <p className='xs:text-xl md:text-start text-center text-lg font-semibold w-fit'>Book a Demo for FREE
</p>
              <p className='w-fit font-extralight lg:text-start text-center text-gray-500 text-sm'>You can attend a demo class before enroll to the course Hurry limited period.

</p>
              <button className='bg-primary w-fit py-2 px-4 rounded-md text-white'>Register for free</button>
            </div>
          
           </div>
           <div className='lg:flex hidden w-1/2 flex-col h-full relative gap-5 justify-center lg:items-start'>
             <div className='w-60 absolute bottom-0 right-0'><img src="/demo2.png" className='w-full ' alt="" /></div>
           </div>

         </div>
         
      </div>

    </div>
  )
}

export default Demo