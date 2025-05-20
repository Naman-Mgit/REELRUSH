"use client"
import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { apiClient } from '@/lib/api-client';
import { IVideo } from '@/models/Video';
import { toast } from 'react-toastify';
import VideoFeed from '../components/VideoFeed';
import Link from 'next/link';
const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(()=>{
     
  
     console.log(status);
     if(status==="unauthenticated"){
       
         router.push('/login')

      
     }
  },[status,router])
  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(()=>{
    const fetchVideos=async ()=>{
      try {
        const data=await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
              console.error(error);
              toast.error("Failed in Fetching Videos");
            }
          }
          fetchVideos();
        },[])
      if(status==="loading"){
        return <p>Loading...</p>
      }
        return (
              <div className='flex flex-col'>
                   
                
                    <main className="container mx-auto px-4 py-8">
                      <div className="text flex flex-row justify-between">
                       <h1 className="text-3xl font-bold mb-8">ReelRush</h1>
                       <button
                          onClick={()=>(signOut())}
                          className="px-4 py-1 bg-gray-950 w-[100px] text-white rounded-lg hover:bg-gray-800"
                        >
                          Logout
                        </button>
                      </div>
                      <VideoFeed videos={videos} />
                      <Link href="/upload">
                        <button className='btn text-xl'>Upload Videos</button>
                      </Link>
                    </main>
              </div>
  )
}

export default Dashboard