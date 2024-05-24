import React from 'react'
import Banner from './HomeComponents/Banner'
import SecondSection from './HomeComponents/SecondSection'
import WhoWillTrain from './HomeComponents/WhoWillTrain'
import Demo from './HomeComponents/Demo'
import Contact from './HomeComponents/Contact'

function HomePage() {
  return (
    <div className='w-full'>
      <div className='w-full h-6'></div>
      <Banner />
      <SecondSection />
      <WhoWillTrain />
      <Demo />
      <Contact />
      </div>
  )
}

export default HomePage