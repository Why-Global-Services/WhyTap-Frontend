import React from 'react'
import Banner from './HomeComponents/Banner'
import SecondSection from './HomeComponents/SecondSection'
import WhoWillTrain from './HomeComponents/WhoWillTrain'
import Demo from './HomeComponents/Demo'
import Contact from './HomeComponents/Contact'
import { Sliders } from './HomeComponents/Slider'


function HomePage() {
  return (
    <div className='w-full'>
      <div className='w-full h-6'></div>
      <Banner />
      <SecondSection />
      <Sliders />
      <WhoWillTrain />
      <Demo />
      <Contact />
      </div>
  )
}

export default HomePage