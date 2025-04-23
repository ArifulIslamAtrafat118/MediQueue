import React from 'react'
import Doctors from '../Doctors/Doctors'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router'
import CountupSection from '../../Components/CountupSection/CountupSection';

function Home() {
    const doctorsData = useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <Doctors doctorsData={doctorsData}></Doctors>
        <CountupSection></CountupSection>
    </div>
  )
}

export default Home