import React, { useEffect, useState } from "react";
import { RenderBarChart } from "../../Components/BarChart/BarChart";
import { Link, useLoaderData } from "react-router-dom";
import { getDataFromDB } from "../../utils/handleBookings";
import ShowBookedDoctor from "../../Components/showBookedDoctor/showBookedDoctor";
// import { Link } from "react-router";

function MyBookings() {
  const data = useLoaderData();
  // console.log(bookedDoctorsID);
  const [bookedDoctorsID, setBookedDoctorsID] = useState(getDataFromDB());

  const [bookedDoctorsData, setBookedDoctorsData] = useState([]);
  useEffect(() => {
    setBookedDoctorsData(
      data.filter((item) => {
        return bookedDoctorsID.includes(item.id);
      })
    );
  }, [bookedDoctorsID]);
  // console.log(bookedDoctorsData);

  const refreshBookings = () => {
    setBookedDoctorsID(getDataFromDB());
  };

  if (bookedDoctorsData.length) {
    return (
      <div className="mt-25">
        <RenderBarChart bookedDoctorsData={bookedDoctorsData}></RenderBarChart>
        <div className="mt-15 gap-5 flex flex-col ">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-center">
              My Today Appointments
            </h1>
            <p className="text-center text-gray-700 text-lg">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
          {bookedDoctorsData.map((item) => (
            <ShowBookedDoctor
              key={item.id}
              bookedDoctorData={item}
              onUpdate={refreshBookings}
            ></ShowBookedDoctor>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="space-y-3 mt-25">
            <h1 className="text-4xl font-bold text-center">
              My Today Appointments
            </h1>
            <p className="text-center text-gray-700 text-lg">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
        <div className=" mt-8 mb-10 space-y-5 bg-white shadow-lg rounded-3xl py-10 px-5 md:px-20 text-center ">
          <h1 className="text-3xl">You have not booked any appointment yet</h1>
          <p className="text-gray-500">
            It looks like you havent scheduled any appointments. Browse doctors
            and book your consultation in just a few clicks. Stay on top of your
            health with timely checkups and expert care. Booking is fast, easy,
            and tailored to your medical needs. Start now to connect with
            trusted healthcare professionals.
          </p>
          {/* <Link to="/">
            <PrimaryBtn>Book An Appointment</PrimaryBtn>
          </Link> */}
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default MyBookings;
