"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import z  from "zod"
import { registerSchema } from '@/lib/validation';
import { toast } from 'react-toastify';
type RegisterFormData = z.infer<typeof registerSchema>;
const register = () => {
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
            console.log("formatted errore",formattedErrors);
            // Extract error messages properly
            setErrors((prev)=>{return {
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
            // router.push("/login");

         } catch (error) {
            toast.error("Registration Failed");
         }
  }

  return (
     <>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
            <div className="register text-4xl">
                <h1>Register!</h1>

            </div>
            <div className="username mt-2">
              
                    <input type="input" name="Username" value={form.Username} onChange={HandleInputChange} required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength={4} maxLength={30} title="Only letters, numbers or dash" />
                    
                
                {errors.Username && <p className='text-red-500'>{errors.Username}</p>}
            </div>
            <div className="email">
                <input type="email"  name="Email" value={form.Email} onChange={HandleInputChange} placeholder="mail@site.com" />
                
                {errors.Email && <p className='text-red-500'>{errors.Email}</p>}
            </div>
            <div className="password">
               <input type="password" name="Password" value={form.Password} onChange={HandleInputChange}  placeholder="Password"   />
               {errors.Password && <p className='text-red-500'>{errors.Password}</p>}
            </div>
            <div className="Confirm-password">
              <input type="password" name="ConfirmPassword" value={form.ConfirmPassword} onChange={HandleInputChange} placeholder="Confirm Password" />
             {errors.ConfirmPassword && <p className='text-red-500'>{errors.ConfirmPassword}</p>}
            </div>
            <div className="submit">
                  <input type="submit" className="btn btn-wide" />
            </div>
            
        </form>
     </>
  )
}

export default register