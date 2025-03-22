import mongoose, { Mongoose } from "mongoose";
import bcrypt from "bcryptjs";

export interface Iuser{
     email:string;
     password:string;
     _id?:mongoose.Types.ObjectId;
     createdAt?:Date;
     updatedAt?:Date;
}
const userSchema=new mongoose.Schema<Iuser>(
       {
        email:{type:String,unique:true,required:true},
        password:{type:String,required:true},
       },
       {timestamps:true}
)
//Now we want to hash the password whenever it is modified:

userSchema.pre("save",async function(next){
     console.log("inside bcrypt js");
     
     if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
        console.log(this.password);
     }
     next();
});

const User=mongoose.models?.User || mongoose.model<Iuser>("User",userSchema);
export default User;