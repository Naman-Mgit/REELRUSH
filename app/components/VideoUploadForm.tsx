"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload'
import { toast } from 'react-toastify'
import { IKUploadResponse } from 'imagekitio-next/dist/types/components/IKUpload/props'
import { Loader2 } from 'lucide-react'
import { apiClient } from '@/lib/api-client'
const VideoUploadForm = () => {
  interface VideoFormData{
      title:string,
      videoUrl:string,
      description:string,
      thumbnailUrl:string   
  }
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const {register,handleSubmit,formState:{errors},setValue}=useForm<VideoFormData>({
     defaultValues:{
        title:"",
        videoUrl:"",
        description:"",
        thumbnailUrl:""
     }
  })
  const handleUploadSuccess=(response:IKUploadResponse)=>{
      setValue("videoUrl",response.filePath);
      setValue("thumbnailUrl",response.thumbnailUrl || response.filePath);
      toast("Video Uploaded Successfully");
  }
  const handleUploadProgress=(progress:number)=>{
        setUploadProgress(progress);
  }
  const onSubmit=async (data:VideoFormData)=>{
       if(!data.videoUrl){
          toast.error("Upload Video First")
          return;
       }
       setLoading(true)
       try {
         const res=await apiClient.CreateVideo(data);
         console.log(res);
         toast("Video Published Successfully")
         setValue("title", "");
         setValue("description", "");
         setValue("videoUrl", "");
         setValue("thumbnailUrl", "");
         setUploadProgress(0);
       } catch (error) {
         toast.error(
            error instanceof Error ? error.message : "Failed to publish video"
         );
       }finally{
         setLoading(false);
       }

  }
  return (
    <>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className='label'>Title</label>
                <input type="text"  className={`input input-bordered ${
                 errors.title ? "input-error" : ""
               }`}  {...register("title",{required:"title is required"})}/>
                {errors.title && <span className='text-error text-sm mt-1'>{errors.title.message}</span>}
            </div>
            <div className="form-control">
                 <label className='label'>Description</label>
                 <textarea className={`textarea textarea-bordered h-24 ${
            errors.description ? "textarea-error" : ""
          }`} {...register("description",{required:"description is required"})}/>
               {errors.title && <span className='text-error text-sm mt-1'>{errors.title.message}</span>}
            </div>
            <div className="form-control">
                <label className='label'>File Upload</label>
                <FileUpload fileType="video" onSuccess={handleUploadSuccess} onProgress={handleUploadProgress}/>
                {uploadProgress > 0 && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                 )}
            </div>
             <button 
                type='submit'
                className='btn btn-primary btn-block'
                disabled={loading || !uploadProgress}
              >
              {
                loading ? (<>
                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                     Publishing Video...
                </>):(
                    "Publish-Video"
                )
              }
             </button>
        </form>
    </>
  )
}

export default VideoUploadForm