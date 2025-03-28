"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  return (
    <div>
      <h1>Welcome, {session?.user?.email}!</h1>
      <p>You are logged in.</p>
    </div>
  )
}

export default dashboard