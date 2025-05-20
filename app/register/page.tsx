"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import z  from "zod"
import { registerSchema } from '@/lib/validation';
import { toast } from 'react-toastify';

// type RegisterFormData = z.infer<typeof registerSchema>;


const Register = () => {
  interface Iform{
       Username:string;
       Email:string;
       Password:string;
       ConfirmPassword:string;
  }
  const [form, setForm] = useState<Iform>({
       Username:"",
       Email:"",
       Password:"",
       ConfirmPassword:""
  });
  const router=useRouter();
  const [errors, setErrors] = useState({
    Username:"",
    Email:"",
    Password:"",
    ConfirmPassword:""
  });
  const HandleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setForm((prev)=>({...prev,[name]:value}));
  }
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         const result=registerSchema.safeParse(form);

         if(!result.success){
            const formattedErrors = result.error.format();
           
            
            setErrors(()=>{return {
                "Username":formattedErrors.Username?._errors[0] ?? "",
                "Email": formattedErrors.Email?._errors[0] ?? "",
                "Password": formattedErrors.Password?._errors[0] ?? "",
                "ConfirmPassword": formattedErrors.ConfirmPassword?._errors[0] ?? "",
              } 
                 
            });
            
            return;
         }
         
         try {
            const res=await fetch("/api/auth/register",{
                 method:"POST",
                 headers:{"Content-Type":"application/json"},
                 body:JSON.stringify({
                     email:form.Email,
                     password:form.Password
                 })
            })
            console.log(res);
            if(!res.ok){
                const res_data=await res.json()
                toast.error(res_data.Error);
                return;
            }
            
            
            setForm({
                Username:"",
                Email:"",
                Password:"",
                ConfirmPassword:""
           })
            setErrors({
                Username:"",
                Email:"",
                Password:"",
                ConfirmPassword:""
            })
           
            toast("Registration Sucessfull!!");
            router.push("/login");

         } catch (error) {
            toast.error("Registration Failed");
         }
  }
  const handleKeydown=async (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            e.preventDefault();
        
        }
  }

  return (
     <>
       <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className='flex flex-col items-center  w-[500px] p-6 bg-gray-700 rounded-lg shadow-lg gap-11 mt-10 '>
                <div className="register text-4xl">
                    <h1>Register!</h1>
                </div>
                <div className="username mt-2">
                
                        <input type="input" name="Username" className='h-14 w-80 text-lg  border-4 border-gray-800 rounded-2xl ' value={form.Username} onChange={HandleInputChange} required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength={4} maxLength={30} title="Only letters, numbers or dash" onKeyDown={handleKeydown} />
                        
                    
                    {errors.Username && <p className='text-red-500'>{errors.Username}</p>}
                </div>
                <div className="email">
                    <input type="email" className='h-14 w-80 text-lg  border-4 border-gray-800 rounded-2xl'  name="Email" value={form.Email} onChange={HandleInputChange} placeholder="mail@site.com" onKeyDown={handleKeydown}  />
                    
                    {errors.Email && <p className='text-red-500'>{errors.Email}</p>}
                </div>
                <div className="password">
                <input type="password" className='h-14 w-80 text-lg border-4 border-gray-800 rounded-2xl' name="Password" value={form.Password} onChange={HandleInputChange}  placeholder="Password"  onKeyDown={handleKeydown}   />
                {errors.Password && <p className='text-red-500'>{errors.Password}</p>}
                </div>
                <div className="Confirm-password">
                <input type="password"  className='h-14 w-80 text-lg border-4 border-gray-800 rounded-2xl' name="ConfirmPassword" value={form.ConfirmPassword} onChange={HandleInputChange} placeholder="Confirm Password"  />
                {errors.ConfirmPassword && <p className='text-red-500'>{errors.ConfirmPassword}</p>}
                </div>
                <div className="submit">
                    <input type="submit" className="btn btn-wide" />
                </div>
                
            </form>

       </div>
     </>
  )
}

export default Register