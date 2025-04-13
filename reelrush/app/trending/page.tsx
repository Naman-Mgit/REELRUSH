"use client"
import React from 'react'
import { Bell, CircleUserRound, Link, Plus, Search } from 'lucide-react'

import { useRouter } from 'next/navigation';
interface DVideo{
  id:number,
   title:string,
   description:string,
   url:string
  }
  const dummyData = [
  {
    id: 1,
    title: "Nature Waterfall",
    description: "A peaceful waterfall scene",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Big Buck Bunny",
    description: "An animated short film",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
  },
  {
    id: 3,
    title: "Beach Waves",
    description: "Waves crashing on a sunny beach",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
  {
    id: 4,
    title: "City Drive",
    description: "A scenic drive through the city",
    url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  },
  {
    id: 5,
    title: "Time Lapse Sky",
    description: "Fast-moving clouds and sunset",
    url: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
  },
  {
    id: 6,
    title: "Drone Flight",
    description: "A drone flying over the forest",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    title: "Night Timelapse",
    description: "Starry night sky in motion",
    url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  },
  {
    id: 8,
    title: "Cat Playing",
    description: "A playful kitten in action",
    url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  
];
const VideoCompo=({video}:{video:DVideo})=>{
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
        <figure className="relative px-1 pt-4">
        <video
        controls
        className="w-[350px] md:w-full h-auto"
        preload="metadata"
        poster="/placeholder.png" // optional
        >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </figure>
          <div className="card-body">
            <Link href={video.url}  className="hover:opacity-80 transition-opacity">
                  <h2  className="card-title text-lg" >{video.title}</h2>
            </Link>
            <p className="text-sm text-base-content/70 line-clamp-2">
                {video.description}
            </p>
            
        </div>
   </div>
   )
}
const trending = () => {
  const router=useRouter();
  
  return (
    <div>
     <nav className='grid grid-cols-2 md:grid-cols-3 py-4  px-3 items-center bg-black'>
         <div className="logo">
           <a href="/" className="flex items-center">
             <span className="text-2xl font-bold text-gradient-primary">REELRUSH</span>
           </a>
         </div>
         <div className="mid hidden md:flex flex-row">
                <input type="text" placeholder='Search'  className='bg-black px-2 w-[500px] h-[40px] rounded-2xl border border-gray-500' />
         </div>
         <div className="hidden md:flex flex-row-reverse gap-6 items-center pr-3.5">
            <CircleUserRound className='text-xl h-11 cursor-pointer'/>
             <Bell className='cursor-pointer'/>
             <button onClick={()=>(router.push('/upload'))} className='btn flex rounded-2xl '>
                <Plus />
                Create
             </button>
         </div>
         <div className="icons flex flex-row-reverse gap-6 md:hidden">
               <Bell />
               <Search />
          </div>
     </nav>
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-7 pl-20  justify-center'>
            {
              dummyData.map((video)=>(
                 <VideoCompo key={video.id} video={video}/>
              ))
            }
            
        </div>
    </div>
  )
}

export default trending