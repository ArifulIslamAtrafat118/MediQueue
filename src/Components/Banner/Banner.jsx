import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'

function Banner() {
  return (
    <div 
    className='mt-30 border-4 rounded-2xl px-6 md:px-14 lg:px-[10rem] py-14 border-white shadow-[5px_5px_5px_5px_rgba(245,235,250,0.3)]  bg-gradient-to-b from-gray-300 to-white space-y-8 flex flex-col text-center'
    >
        <h1 className='text-5xl font-semibold'>Dependable Care, Backed by Trusted Professionals.</h1>
        <p>Our platform connects you with verified, experienced doctors 
            across various specialties — all at your convenience. Whether it's 
            a routine checkup or urgent consultation, book appointments in minutes and 
            receive quality care you can trust.
        </p>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-5 justify-center items-center">
        <input 
        type="text" 
        name='search' 
        placeholder='Search any doctor...' 
        className='bg-white rounded-2xl w-3/5 h-12 placeholder:text-gray-400 placeholder:pl-4'
        />
        <PrimaryBtn>Search Now</PrimaryBtn>
        </div>
        <div className=" ">
            <figure className='md:flex items-center gap-4'>
                <img 
                className='w-1/2 h-[15rem] md:h-[20rem]'
                src="/banner-img-1.png" alt="Banner image" 
                />
                <img 
                className='w-1/2 h-[15rem] md:h-[20rem]'
                src="/banner-img-1.png" alt="Banner image" 
                />
            </figure>
        </div>
    </div>
  )
}

export default Banner