"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, UserPlus } from "lucide-react";

const AuthButtons = () => {
  const router=useRouter();

  return (
    <div className="flex items-center gap-3">
    <button className="btn btn-ghost text-white" onClick={()=>{router.push("/login")}}>
      <LogIn className="mr-2 h-4 w-4" />
      Login
    </button>
    <button className="btn btn-primary text-white" onClick={()=>{router.push("/register")}} >
      <UserPlus className="mr-2 h-4 w-4" />
      Register
    </button>
  </div>
  );
};

export default AuthButtons;