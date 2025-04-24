import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'

function RootLayout() {
  const navigation = useNavigation();
  return (
    <div className=''>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
        {navigation.state=== "loading" && <LoadingSpinner></LoadingSpinner>}
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout