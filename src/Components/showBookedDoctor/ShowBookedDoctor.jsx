import React from 'react'
import { removeFromDB } from '../../utils/handleBookings';

function ShowBookedDoctor({bookedDoctorData, onUpdate}) {
    const {
        id,
        name,
        speciality,
        doctor_image,
        registration_number,
        availability,
        consultation_fee,
        working_at,
      } = bookedDoctorData;
      const handleCancelBtnClick = (id) =>{
        removeFromDB(id);
        onUpdate();
      }
  return (
    <div className=" mb-5 px-10 py-5 space-y-5 bg-white rounded-2xl shadow-xl">
          <div className="md:flex items-center justify-between">
            <div className="">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="">{`(${registration_number})`}</p>
              <p className="">{speciality}</p>
            </div>
            <p className="">Appointment Fee : {consultation_fee} Taka + Vat</p>
          </div>
          <div className="border-b-1 border-dashed w-full"></div>
          <button 
          onClick={()=>{handleCancelBtnClick(id)}}
          className="btn btn-outline btn-warning rounded-2xl w-full">
            Cancel Appointment
          </button>
        </div>
  )
}

export default ShowBookedDoctor