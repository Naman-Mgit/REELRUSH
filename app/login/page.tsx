"use client"
import React from 'react';
import { useState } from 'react';
import { loginSchema } from '@/lib/validation';

import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Login = () => {
  interface Iform{
     Email:string,
     Password:string
  }
  const router=useRouter();
  const [form, setForm] = useState<Iform>({
       Email:"",
       Password:""
  });
  const [error,setError]=useState({
      Email:"",
      Password:""
  })

  const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
      setForm((prev)=>({...prev,[name]:value}));
  }
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const result=loginSchema.safeParse(form);
    if(!result.success){
       const formattedErrors=result.error.format();
       setError({
          Email:formattedErrors.Email?._errors[0] || "",
          Password:formattedErrors.Password?._errors[0] || ""
       })
       return;
    }
    try {
       const email=form.Email;
       const password=form.Password;
       const res=await signIn("credentials",{
          email,
          password,
          redirect:false,
          callbackUrl: "/dashboard"
       })
       if(res?.error){
          toast.error(res.error);
          return;
       }
         setForm({
            Email:"",
            Password:"",
         })
         setError({
            Email:"",
            Password:"",
          })
          toast("Login Sucessfull!!");
                    
          router.push('/dashboard');
      } catch (error) {
        console.log(error)
        toast.error("Login failed");
    }
  }
  const handleKeydown=async (e:React.KeyboardEvent<HTMLInputElement>)=>{
          if(e.key==='Enter'){
              e.preventDefault();
          
          }
   }
  return (
    <>
       <div className="form flex flex-col items-center justify-center min-h-screen gap-5 ">
             <form  onSubmit={handleSubmit} className='flex flex-col items-center  w-[400px] h-[400px] p-6 bg-gray-700 rounded-lg shadow-lg  gap-8'>
                <h1 className='text-3xl font-bold font-sans'>Login</h1>
                <div className="email">
                 <input type="email" name='Email' placeholder='Email' value={form.Email} onChange={handleInput} onKeyDown={handleKeydown} className='h-14 w-80 text-2xl border-4 border-gray-800 rounded-2xl'/>
                  {error && <p className='text-red-500'>{error.Email}</p>}
                </div>
                <div className="password">
                    <input type="password" name='Password' placeholder='Password' value={form.Password} onChange={handleInput} className='h-14 w-80 text-2xl border-4 border-gray-800 rounded-2xl' />  
                    {error && <p className='text-red-500'>{error.Password}</p>}
                </div>
                <div className="submit">
                     <input type="submit" className="btn btn-wide" /> 
                </div>                  

             </form>

       </div>
    </>
  )
}

export default Login;