import React from 'react'
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export const Sliders = () => {

    const setting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        playSpeed: 500,
        autoplay: true,
      };
      

  return (
    <article className='flex md:flex-row flex-col lg:w-[90%] w-[95%] mx-auto my-10'>
        <section className='bg-primary text-white md:w-[25%] p-5 space-y-5 flex flex-col justify-center items-start'>
            <h2 className='lg:text-2xl text-lg font-bold'>People Say About WHY tap</h2>
            <p className='text-sm font-thin text-justify'>One-stop solution for any IT training Course. People love WHY tap because they can create and grow their career with ease here.</p>
            <button className='px-7 py-3 bg-white text-primary rounded-md'>View all</button>
        </section>
        <section className='md:w-[75%] px-5 py-10 bg-gray-100 '>
        <Slider {...setting}>
        <section className='w-full h-full md:px-5 space-y-5 '>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg text-primary font-semibold'>Awesome!</h2>
                <RiDoubleQuotesR className='text-gray-300' size={30}/>
            </div>
            <div className=' flex text-yellow-500'>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            </div>
            <p className='text-gray-500 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='flex items-center gap-2'>
            <div className='w-14 '>
                <img src="/profilepic.jpg" alt="" className='w-full h-full object-cover rounded-full'/>
            </div>
            <div className='text-sm space-y-1'>
                <h2 className='font-semibold'>Sunil</h2>
                <p className='text-gray-500 sm:text-sm text-xs'>Web Developer, WHY Global services</p>
            </div>
            </div>
        </section>
        <section className='w-full h-full md:px-5 space-y-5 '>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg text-primary font-semibold'>Awesome!</h2>
                <RiDoubleQuotesR className='text-gray-300' size={30}/>
            </div>
            <div className=' flex text-yellow-500'>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            <FaStar size={15}/>
            </div>
            <p className='text-gray-500 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='flex items-center gap-2'>
            <div className='w-14 '>
                <img src="/profilepic.jpg" alt="" className='w-full h-full object-cover rounded-full'/>
            </div>
            <div className='text-sm space-y-1'>
                <h2 className='font-semibold'>Sunil</h2>
                <p className='text-gray-500 sm:text-sm text-xs'>Web Developer, WHY Global services</p>
            </div>
            </div>
        </section>
        </Slider>
        </section>
    </article>
  )
}
