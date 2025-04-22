import React from 'react'
import SingleBlog from '../../Components/singleBlog/singleBlog'
import { useLoaderData } from 'react-router'

function Blogs() {
  const blogsData = useLoaderData();
  // console.log(blogData);
  return (
    <div className='pt-25 space-y-10'>
      <h1 className="text-center text-4xl font-bold">Blogs</h1>
      <p className="text-center text-gray-600 text-lg">
        Let's explore some basic concept that will make you a good developer.
      </p>
      {
        blogsData.map(blog=><SingleBlog key={blog.id} blog={blog}></SingleBlog>)
      }
      
    </div>
  )
}

export default Blogs