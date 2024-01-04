'use client' 
import { useForm } from "react-hook-form"



export default function ContactForm
() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" border border-spacing-2 py-5 items-center text-center">
      <input placeholder="FirstName" className=" border border-slate-600 my-2 px-5 py-2 w-96 mx-2 "  width="" {...register("firstName", { required: true, maxLength: 20 })} />
      <input placeholder="LastName" className=" border border-slate-600  my-2  px-5 py-2 w-96"  {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /><br></br>
      <input placeholder="Email" className=" border border-slate-600  my-2  px-5 py-2 w-96  mx-2"  type="email" {...register("emailAddress", )} />
      <input placeholder="ContatcNumber" className=" border border-slate-600  my-2  px-5 py-2 w-96"   {...register("contactnumber", )} /><br></br>
      <input placeholder="Message" type="textarea" className=" border border-slate-600  my-2  px-5 py-2 w-4/5"  {...register("contactnumber", )} /><br></br>

     <button className=" bg-slate-500 text-white rounded p-2 "> <input type="submit" /><br></br> </button>
    </form>
  )
}