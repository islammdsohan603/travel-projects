'use client'

import { authClient } from "@/app/lib/auth-client";
import SoscalLoginPage from "@/components/SoscalLoginPage";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
 
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {

  const reuter = useRouter()

  
  const handleSubimt =async (e) => {
    e.preventDefault();

    const form = new FormData(e.target)
    const user = Object.fromEntries(form.entries())

    const { data, error } = await authClient.signIn.email({
     
      email: user.email,
      password: user.password
    })
 
    if (data) {
      toast.success('Successfully logged in')
      reuter.push('/')
    }

    else if(error){
      
      toast.error(error.message)

    }

  }

 
  return (
    <div className="bg-linear-to-br from-slate-950 via-zinc-900 to-slate-800">
      
       <div className="flex items-center justify-center flex-col h-screen">

        <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubimt} >

           

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="text-white text-lg font-semibold">Email</Label>
        <Input className="text-white bg-transparent border border-white/10" placeholder="john@example.com" />
        <FieldError className="text-red-500 text-sm" />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="text-white text-lg font-semibold">Password</Label>
        <Input className="text-white bg-transparent border border-white/10" placeholder="Enter your password" />
        <Description className="text-white">Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError className="text-red-500 text-sm" />
      </TextField>
      <div className="flex items-center justify-center gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>

       <Button type="reset" className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-red-500/20">Reset</Button>     
          </div>
          
         <p className='text-white text-center mt-4'>Don't have an account? <Link href="/signup" className="text-cyan-500 hover:text-cyan-600 font-semibold">Sign Up</Link></p>

    </Form>  
       <div>
            <SoscalLoginPage />
          </div>
    </div>

   </div>
  )
 
}

export default LoginPage