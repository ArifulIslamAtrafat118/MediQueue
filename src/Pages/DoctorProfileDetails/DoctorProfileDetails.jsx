import React from 'react'

function DoctorProfileDetails() {
  return (
    <div>
        <div className=" mt-10 bg-white shadow-lg rounded-3xl py-10 px-20 ">
        <h1 className="text-3xl">DoctorProfileDetails</h1>
        <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
        </p>
        </div>
        <div className="rounded-3xl p-6 bg-white md:grid grid-cols-3 gap-9">
            <div className="">
                <img src="https://i.ibb.co.com/k2s9HLs5/image.png" alt="Doctor Image" className="rounded-2xl " />
            </div>
            <div className="col-span-2 ">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className='text-gray-500 lg:text-lg'>Reg No: {registration_number}</p>
            </div>
        </div>
    </div>
  )
}

export default DoctorProfileDetails