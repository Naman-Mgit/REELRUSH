"use client"
import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { apiClient } from '@/lib/api-client';
import { IVideo } from '@/models/Video';
import { toast } from 'react-toastify';
import VideoFeed from '../components/VideoFeed';
const dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(()=>{
     console.log(status);
     if(status==="unauthenticated"){
        router.push('/login');
     }
  },[status,router])
  if(status==="loading"){
    return <p>Loading...</p>
  }
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
  return (
    <div>
        <button className="btn btn-wide" onClick={()=>(signOut())}>Logout</button>
        <main className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-8">ReelRush</h1>
         <VideoFeed videos={videos} />/
        </main>
    </div>
  )
}

export default dashboard