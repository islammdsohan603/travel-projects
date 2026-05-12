'use client'

import { authClient } from "@/app/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
 
import { toast } from "react-toastify";



const SignUpPage = () => {
const router = useRouter()
  const handleSubimt = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: users.name,
      avatar_url: users.url,
      email: users.email,
      password: users.password,
    })
    
    if (data) {

      toast.success('Successfully created an account')

      router.push('/login')

    }
    
    else if(error){
      
      toast.error(error.message)

    }


  }


  return (
    <div className="bg-linear-to-br from-slate-950 via-zinc-900 to-slate-800">
      
       <div className="flex items-center justify-center flex-col h-screen">

        <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubimt} >

          <TextField isRequired name="name" type="text">

            <Label className="text-white text-lg font-semibold">Name</Label>
            <Input className="text-white bg-transparent border border-white/10" placeholder="Enter your name" />
            <FieldError className="text-red-500 text-sm" />
          </TextField>

          <TextField isRequired type="url" name="url">

            <Label className="text-white text-lg font-semibold">Profile Image</Label>
            <Input className="text-white bg-transparent border border-white/10" placeholder="Enter your profile image url" />
            <FieldError className="text-red-500 text-sm" />
          </TextField>

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
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>  
      
    </div>

   </div>
  )
}

export default SignUpPage