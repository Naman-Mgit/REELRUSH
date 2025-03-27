"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const Header = () => {
  const {data:session}=useSession();
  const handleSubmit=async ()=>{
     try {
        await signOut()
     } catch (error) {
        
     }
  }
  return (
    <div>
      <button onClick={handleSubmit}>signOut</button>
       {session ? (
         <h1>Welcome To the page!</h1>
       ):(
         <div>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
         </div>
       )}
    </div>
  )
}

export default Header