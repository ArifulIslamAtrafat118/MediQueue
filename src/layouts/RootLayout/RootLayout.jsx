import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'

function RootLayout() {
  return (
    <div className='max-w-7xl mx-auto '>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout