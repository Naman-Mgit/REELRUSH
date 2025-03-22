import { NextRequest,NextResponse } from "next/server";
import { ConnectToDb } from "@/lib/db";
import User from "@/models/User";

export async function POST(request:NextRequest){
        
        try {
            const {email,password}=await request.json()
            if(!email || !password){
                return NextResponse.json(
                    {Error:"Email and password are required"},
                    {status:400}
                )
            }
            await ConnectToDb();
            
            const checkUser=await User.findOne({email});
            if(checkUser){
                return NextResponse.json(
                    {Error:"Email already exist!!"},
                    {status:400}
                )
            }
            await User.create({
               email:email,
               password:password
            })
        
            
            return NextResponse.json(
                {Message:"User is registered successfully!!"},
                {status:200}
            )
        
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {Error:"User registration failed!!"},
                {status:500}
            )  
        }

}