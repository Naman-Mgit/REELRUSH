import mongoose from "mongoose";

export const Dimenstions={
     height:1920,
     width:1080,
} as const;

export interface IVideo{
     title:string;
     descrption:string;
     _id?:mongoose.Types.ObjectId;
     thumbnailUrl:string;
     videoUrl:string;
     controls?:boolean;
     transformation?:{
        height:number;
        width:number;
        quality?:number;
     }
     createdAt:Date;
     updatedAt:Date;
}

const videoSchema=new mongoose.Schema<IVideo>({
      title:{type:String,required:true},
      descrption:{type:String,required:true},
      videoUrl:{type:String,required:true},
      thumbnailUrl:{type:String,required:true},
      controls:{type:Boolean,default:true},
      transformation:{
          height:{type:Number,default:Dimenstions.height},
          width:{type:Number,default:Dimenstions.width},
          quality:{type:Number,min:1,max:100}
      }
},{timestamps:true})

const Video=mongoose.models?.Video || mongoose.model<IVideo>("Video",videoSchema);
export default Video;