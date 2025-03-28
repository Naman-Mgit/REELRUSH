"use client"
import React from 'react';
import { useState } from 'react';
import { loginSchema } from '@/lib/validation';

import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const login = () => {
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
  return (
    <>
       <div className="form flex flex-col items-center gap-5 mt-32">
             <h1>Login Form</h1>
             <form  onSubmit={handleSubmit} className='flex flex-col items-center  gap-8'>
                <div className="email">
                 <input type="email" name='Email' placeholder='Email' value={form.Email} onChange={handleInput}  />
                  {error && <p className='text-red-500'>{error.Email}</p>}
                </div>
                <div className="password">
                    <input type="password" name='Password' placeholder='Password' value={form.Password} onChange={handleInput} />  
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

export default login;