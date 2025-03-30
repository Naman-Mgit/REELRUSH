import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { IKVideo } from "imagekitio-next";
export default function Home() {
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ReelRush</h1>
      {/* <VideoFeed videos={videos} /> */}
    </main>
  );
}
