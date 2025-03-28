import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { ConnectToDb } from "./db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions:NextAuthOptions={
     providers:[
         CredentialsProvider(
            {
                name:"Credentials",
                credentials:{
                   email:{label:"Email",type:"text"},
                   password:{label:"Password",type:"password"}
                },
                async authorize(credentials){
                    if(!credentials?.email || !credentials?.password){
                         throw new Error("Missing Email or Password")
                    }
                    try {
                          await ConnectToDb();
                          const existingUser=await User.findOne({email:credentials.email});
                          if(!existingUser){
                              throw new Error("Email is not registered Kindly register")
                          }             
                          const isValid=await bcrypt.compare(credentials.password,existingUser.password)
                          if(!isValid){
                              throw new Error("Incorrect Password");
                          }
                          // Return the things which you need in session
                          return {
                              id:existingUser._id.toString(),
                              email:existingUser.email
                          }
                    } catch (error) {
                       console.log(error);
                       throw error
                    } 
                }
            }
         )
     ],
     callbacks:{
        async signIn() {
            return true; // Allow sign-in
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl; // Allow external redirects
        },
        async jwt({user,token}){
             console.log("jwt Callback",{user,token});
             if(user){
                return {
                    ...token,
                    id:user.id,
                }
             }
             return token;
        },
        async session({session,user,token}){
            console.log("session Callback",{session,user});
            if(session.user){
                return{
                    ...session,
                    id:token.id
                }
                // session.user._id=user.id as string;
            }
            return session;
        }
     },
     pages:{
          signIn:"/login",
          error:"/login"
     },
     session:{
        strategy:"jwt",
        maxAge:30*24*60*60 //30 days session expiry
     },
     secret:process.env.NEXTAUTH_SECRET
      
}