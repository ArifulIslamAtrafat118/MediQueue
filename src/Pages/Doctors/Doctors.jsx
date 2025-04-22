import React, { useEffect, useRef, useState } from 'react'
import DoctorInfoCard from '../../Components/DoctorInfoCard/DoctorInfoCard'
import PrimaryBtn from '../../Components/Buttons/PrimaryBtn';

function Doctors({doctorsData}) {
    // console.log(doctorsData);
    const [doctors , setDoctors] =useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(()=>{
        if(showAll){
            setDoctors(doctorsData);
        }else{
        setDoctors(doctorsData.slice(0,6));
        }
    },[doctorsData, showAll]);

    //for smooth scroll on clicking the button showLess
    const doctorsRef = useRef(null)
    const handleScroll = () =>{
        doctorsRef.current?.scrollIntoView({behavior: "smooth"});
    }

  return (
    <div 
    ref={doctorsRef}
    className='pt-12 lg:pt-20'>
        <div className="text-center space-y-5">
            <h1 className="text-4xl font-semibold">Our Best Doctors</h1>
            <p className="text-gray-600 text-lg w-3/4 mx-auto">
            Our platform connects you with verified, experienced doctors across various specialties — all at 
            your convenience. Whether it's a routine checkup or urgent consultation, book appointments 
            in minutes and receive quality care you can trust.
            </p>
        </div>
        <div 
        className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
            {
                doctors.map(doctorData=><DoctorInfoCard 
                    key={doctorData.id} 
                    doctorData={doctorData}
                    >
                    </DoctorInfoCard>)
            }
        </div>
        <PrimaryBtn 
        onClick={()=>{{setShowAll(prev=>!prev);
            if(showAll)handleScroll();
        }}}>{showAll?'Show Less':'Show All'}</PrimaryBtn>
    </div>
  )
}

export default Doctors