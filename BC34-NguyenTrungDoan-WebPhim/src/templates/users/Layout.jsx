import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Carousel from './Carousel'

export default function Layout() {
  return (
    <div>
      <Header />
      {/* left  */}
      {/* hiện thị content của pages */}
      
      <Outlet />
      

      {/* right */}
      <hr className='mt-5'/>
      <Footer />
    </div>
  )
}
