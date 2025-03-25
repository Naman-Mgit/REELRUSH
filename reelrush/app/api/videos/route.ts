import { authOptions } from "@/lib/auth";
import { ConnectToDb } from "@/lib/db";
import Video, { IVideo } from "@/models/Video";

import { getServerSession } from "next-auth";

import { NextRequest, NextResponse } from "next/server";

//The function GET to fetch all the videos from db and show it in the frontend
export async function GET(){
     
     try {
        await ConnectToDb();
        const videos=await Video.find({}).sort({createdAt:-1}).lean();
        if(!videos || videos.length===0){
          return NextResponse.json([],{status:400});
        }
        return NextResponse.json(videos);
     }
     catch (error) {
        console.log("Error in fetching all videos",error);
        return NextResponse.json(
            {error:"Failed to fetch videos"},
            {status:500}
        )   
     }
}
//The function POST  to insert the video to the db 
export async function POST(request:NextRequest){
     try {
         const session=await getServerSession(authOptions);
         if(!session){
            return NextResponse.json(
                {error:"User is not authenticated"},
                {status:400}
            )
         }
         await ConnectToDb();
         const body:IVideo=await request.json()
         if(!body.videoUrl || !body.title || !body.descrption || !body.thumbnailUrl){
            return NextResponse.json(
                {error:"All fields are required!"},
                {status:400}
            )
         }
         const videoData={
            ...body,
            controls:body.controls ?? true,
            transformation:{
                height:1920,
                width:1080,
                quality:body.transformation?.quality ?? 100
            }
         }
         const newVideo=await Video.create(videoData);
         return NextResponse.json(newVideo);

     } catch (error) {
        console.log("Error in uploading a video",error);
        return NextResponse.json(
            {error:"Failed to create a video!"},
            {status:400}
        )
     }
}