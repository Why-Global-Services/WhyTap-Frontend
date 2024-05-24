import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Common/NavBar'
import Footer from '../Common/Footer'
function Main() {
  return (
    <div className=''>
      <Navbar />
                <Outlet  />
                <Footer/>
    </div>
  )
}

export default Main