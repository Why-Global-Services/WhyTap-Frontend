import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Common/NavBar'
function Main() {
  return (
    <div className=''>
      <Navbar />
                <Outlet  />
    </div>
  )
}

export default Main