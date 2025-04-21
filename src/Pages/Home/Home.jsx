import React from 'react'
import Doctors from '../Doctors/Doctors'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router'

function Home() {
    const doctorsData = useLoaderData();;
  return (
    <div>
        <Banner></Banner>
        <Doctors doctorsData={doctorsData}></Doctors>
    </div>
  )
}

export default Home