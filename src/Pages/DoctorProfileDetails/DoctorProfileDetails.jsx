import React from "react";
import { FaRegRegistered } from "react-icons/fa";

function DoctorProfileDetails() {
  return (
    <div>
      <div className=" mt-20 mb-10 bg-white shadow-lg rounded-3xl py-10 px-20 ">
        <h1 className="text-3xl">DoctorProfileDetails</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="rounded-3xl p-6 bg-white md:grid grid-cols-3 gap-9">
        <div className="">
          <img
            src="https://i.ibb.co.com/k2s9HLs5/image.png"
            alt="Doctor Image"
            className="rounded-2xl "
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between space-y-5 md:space-y-0">
          <h1 className="text-3xl font-semibold">Dr. Cameron Williamson</h1>
          <p className="">Working at: </p>
          <p className="font-semibold">TMSS Medical College & Rafatullah Community Hospital, Bogura</p>
          <p className="text-gray-500 lg:text-lg flex items-center gap-3"><FaRegRegistered /><span>Reg No: BD 342189</span></p>
          <div className=""><span className="font-bold">Availability</span> <span className="bg-amber-50 text-[#FFA000] rounded-full border-1 border-amber-300 px-3">Friday</span></div>
          <p className="">
            <span className="font-semibold">Consultation Fee: </span>
            <span className="text-blue-500 font-bold">Taka : 273 </span>
            <span className="text-gray-400">(incl. Vat)</span>
            <span className="text-blue-400"> Per consultation</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfileDetails;
