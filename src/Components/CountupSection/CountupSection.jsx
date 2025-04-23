import React from "react";
import CountUp from "react-countup";

function CountupSection() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        We Provide Best Medical Services
      </h1>
      <p className="text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="mt-8 mb-8 grid grid-cols-2 md:grid-cols-4 gap-7">
        <div className="rounded-2xl bg-white p-10 space-y-4 flex flex-col items-center">
          <img src="/success-doctor.png" alt="" className="" />
          <h1 className="text-4xl font-bold">
            {" "}
            <CountUp end={199} duration={5} />+
          </h1>
          <p className="">Total Doctors</p>
        </div>
        <div className="rounded-2xl bg-white p-10 space-y-4 flex flex-col items-center">
          <img src="/success-review.png" alt="" className="" />
          <h1 className="text-4xl font-bold">
            {" "}
            <CountUp end={467} duration={5} />+
          </h1>
          <p className="">Total Reviews</p>
        </div>
        <div className="rounded-2xl bg-white p-10 space-y-4 flex flex-col items-center">
          <img src="/success-patients.png" alt="" className="" />
          <h1 className="text-4xl font-bold">
            {" "}
            <CountUp end={1900} duration={10} />+
          </h1>
          <p className="">Patients</p>
        </div>
        <div className="rounded-2xl bg-white p-10 space-y-4 flex flex-col items-center">
          <img src="/success-staffs.png" alt="" className="" />
          <h1 className="text-4xl font-bold">
            {" "}
            <CountUp end={300} duration={5} />+
          </h1>
          <p className="">Total Stuffs</p>
        </div>
        
      </div>
    </div>
  );
}

export default CountupSection;
