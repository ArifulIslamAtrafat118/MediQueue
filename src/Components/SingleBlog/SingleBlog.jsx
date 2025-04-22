import React from 'react'

function SingleBlog({blog}) {
    const {question, answer, added_at} =blog;
  return (
    <div className='py-5 px-8 rounded-3xl border-4  border-white shadow-[5px_5px_5px_5px_rgba(245,235,250,0.3)]  bg-gray-100  space-y-4'>
        <h1 className="text-3xl">{question}</h1>
        <div className="border-t-1 border-dashed w-full"></div>
        <p className="text-lg"><span className="text-blue-500 text-lg ">Answer: </span>
        {answer}</p>
        <p className="">Added At: {added_at}</p>
    </div>
  )
}

export default SingleBlog