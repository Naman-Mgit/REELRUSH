import { IVideo } from "@/models/Video";

export type VideoFormData = {
     title:string;
     description:string;
     thumbnailUrl:string;
     videoUrl:string;
}
type FetchOptions={
    method?: "GET" | "POST" | "PUT" | "DELETE",
    body?:any,
    headers?:Record<string,string>
}
class ApiClient{
    private async fetch<T>(
         endpoint:string,
         options:FetchOptions={},

    ):Promise<T>{
        const {method="GET",body,headers={}}=options;

        const defaultHeaders={
            "Content-Type":"application/json",
            ...headers
        };

        const response =await fetch(`/api${endpoint}`,{
            method:method,
            headers:defaultHeaders,
            body:body ? JSON.stringify(body) :undefined
        })
        if(!response.ok){
            throw new Error(await response.text());
        }
        return response.json();
    }
    async getVideos(){
        return this.fetch<IVideo[]>("/videos");
    }
    async getVideo(id:string){
        return this.fetch<IVideo>(`/videos/${id}`);
    }
    async CreateVideo(videoData:VideoFormData){
         const res= this.fetch<IVideo>('/videos',{
            method:"POST",
            body:videoData
         })
         
         return res;
    }

}
export const apiClient=new ApiClient();