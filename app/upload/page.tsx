"use client"
import React from 'react'
import VideoUploadForm from '../components/VideoUploadForm'

const Upload = () => {
  return (
    <div className="container mx-auto mt-16 w-[800px] px-4 py-8 bg-gray-950 rounded-lg shadow-lg">
      <div className="max-w-2xl mx-auto   ">
         <h1 className="text-3xl font-bold mb-8">Upload New Reel</h1>
           <VideoUploadForm />
      </div>
   </div>
  )
}

export default Upload