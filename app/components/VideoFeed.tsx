"use client"
import React from 'react'
import { IVideo } from '@/models/Video'
import VideoComponent from './VideoComponent';
interface VideoFeedProps{
    videos:IVideo[];
}
const VideoFeed = ({videos}:VideoFeedProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {videos.map((video)=>(
          <VideoComponent key={video._id?.toString()} video={video}/>
        ))}
       </div>
       {videos.length===0 &&
           <div className="col-span-full text-center py-12">
                 <h1 className="text-base-content/70">No videos found</h1>
            </div>
        }

    </>
  )
}

export default VideoFeed