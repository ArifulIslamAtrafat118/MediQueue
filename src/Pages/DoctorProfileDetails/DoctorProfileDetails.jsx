import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import { IoIosWarning } from "react-icons/io";
import { TbCirclePlus } from "react-icons/tb";

function DoctorProfileDetails() {
  const doctorsData = useLoaderData();
  const params = useParams();
  const doctorId = params.registration_number;

  const doctorData = doctorsData.find(
    (doctor) => doctor.registration_number == doctorId
  );
  // console.log(doctorData);

  if (doctorData) {
    const {
      name,
      doctor_image,
      registration_number,
      availability,
      consultation_fee,
      working_at,
    } = doctorData;
    return (
      <div>
        <div className=" mt-20 mb-10 bg-white shadow-lg rounded-3xl py-10 px-5 md:px-20 text-center ">
          <h1 className="text-3xl">Doctor Profile Details</h1>
          <p className="text-gray-500">
            View comprehensive information about each doctor, including their
            specialization, qualifications, and experience. Easily check
            availability, consultation hours, and clinic location. Make informed
            decisions before booking your appointment with confidence.
          </p>
        </div>
        <div className="rounded-3xl p-6 md:p-10 lg:py-10 lg:px-16 bg-white md:grid grid-cols-3 gap-9">
          <div className="">
            <img
              src={doctor_image}
              alt="Doctor Image"
              className="rounded-2xl h-[15rem] lg:h-[20rem] w-full"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between space-y-5 md:space-y-0">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="">Working at: </p>
            <p className="font-semibold">{working_at}</p>
            <p className="text-gray-500 lg:text-lg flex items-center gap-3">
              <FaRegRegistered />
              <span>Reg No: {registration_number}</span>
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <span className="font-bold">Availability</span>{" "}
              {availability.map((day, index) => (
                <span
                  key={index}
                  className="bg-amber-50 text-[#FFA000] rounded-full border-1 border-amber-300 px-3"
                >
                  {day}
                </span>
              ))}{" "}
            </div>
            <p className="">
              <span className="font-semibold">Consultation Fee: </span>
              <span className="text-blue-500 font-bold">
                Taka : {consultation_fee}{" "}
              </span>
              <span className="text-gray-400">(incl. Vat)</span>
              <span className="text-blue-400"> Per consultation</span>
            </p>
          </div>
        </div>
        <div className="mt-10 mb-10 rounded-3xl p-6 md:p-10 lg:py-10 lg:px-16 bg-white text-center space-y-7">
          <h1 className="text-3xl font-bold">Book Appointment Now</h1>
          <div className="flex flex-wrap justify-between">
            <span className="">Availability</span>
            <span className="py-1 px-4 rounded-xl text-green-500 bg-green-100">
              Doctor Available Today
            </span>
          </div>
          <p className="py-1 px-8 rounded-xl bg-amber-50 text-amber-500 flex flex-col md:flex-row items-center gap-2 ">
            <span>
              <IoIosWarning />{" "}
            </span>
            <span>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </p>
          <PrimaryBtn className="w-full ">Book Appointment Now</PrimaryBtn>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className=" mt-20 mb-10 bg-white shadow-lg rounded-3xl py-10 px-5 md:px-20 text-center ">
          <h1 className="text-3xl">Doctor Profile Details</h1>
          <p className="text-gray-500">
            View comprehensive information about each doctor, including their
            specialization, qualifications, and experience. Easily check
            availability, consultation hours, and clinic location. Make informed
            decisions before booking your appointment with confidence.
          </p>
        </div>
        <div className=" mb-10 py-6 px-6 md:px-8 lg:px-16 space-y-5 rounded-3xl flex flex-col items-center justify-center bg-red-100">
          <h1 className="text-4xl font-semibold text-center">
            No Doctor Found!!
          </h1>
          <h5 className="text-xl text-gray-600 text-center">
            No Doctor found with this Registration number
          </h5>
          <p className="font-semibold flex items-center justify-center gap-2">
            <TbCirclePlus /> {doctorId}
          </p>
          <Link to="/">
            <PrimaryBtn>View All Doctors</PrimaryBtn>
          </Link>
        </div>
      </div>
    );
  }
}

export default DoctorProfileDetails;
