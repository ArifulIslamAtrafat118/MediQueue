import React from 'react'
import { Link } from 'react-router';

function DoctorInfoCard({doctorData}) {
    const {id,doctor_image, name, education, speciality, experience, registration_number, availability, consultation_fee, working_at} = doctorData;
    // console.log(name);
  return (
    <div 
    className='p-[1.8rem] rounded-2xl bg-white shadow-lg shadow-gray-100 space-y-4'
    >
        <div className="rounded-2xl bg-gradient-to-br  ">
            <img 
            src={doctor_image} alt="Doctor Iamge" 
            className="w-full h-[20rem]  rounded-2xl from-cyan-500 via-cyan-400 to-cyan-500" 
            />
        </div>
        <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
                <button className="btn border-1 rounded-full border-green-500 bg-green-50  text-green-500 text-xl">Available</button>
                <button className="btn border-1 rounded-full border-blue-500  bg-blue-50 text-blue-500 text-xl">{experience} Years Experience</button>
            </div>
            <h1 className="text-3xl font-semibold">{name}</h1>
            {education.map(degree=><span className='text-gray-500 lg:text-lg'>{degree}/</span>)}
            <div className="border-1 border-b-gray-300 w-full border-dashed"></div>
            <p className='text-gray-500 lg:text-lg'>Reg No: {registration_number}</p>
            <Link to={'/doctor-profile'}>
            <button 
            className='btn w-full border-1 rounded-full border-blue-500 bg-white text-blue-500 text-xl'>
                View Details
            </button>
            </Link>
        </div>
    </div>
  )
}

export default DoctorInfoCard