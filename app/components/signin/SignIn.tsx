"use client"

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import {  ClientSafeProvider, LiteralUnion, getProviders, signIn, useSession, } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { BuiltInProviderType } from "next-auth/providers/index";
import Image from "next/image";
import { resolve } from "styled-jsx/css";


export default function SignIn(){

  const {data} = useSession()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 
    const providerList: any = []

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("first")
       const data = await signIn("credentials", { email, password })
       console.log(data, "data")
        setEmail("")
        setPassword("")
    
    }
    const handleAuthProvider = async (provider :string)=>{
      try{

        await signIn(provider);

        console.log(data, "data")
        const res = await fetch("/api/auth/provider-login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
    console.log(res, "res")
      }catch(error:any){

      }
    }

    

    useEffect(()=>{

      const renderProviders = async ()=>{

        const provs =  await getProviders()
     
        // setProviders(provs)
    }

    renderProviders()
    },[])
  return  <section className="grid place-content-center items-center justify-center h-screen">
    <form className="w-[90%] border-2 p-8 rounded-lg border-custom-ash h-auto mx-auto max-w-xl" onSubmit={(e: FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
      <div className="">
        <div className="w-44 h-16">
          <Image alt="logo" src={"/devchallenges-light.svg"} width={160} height={160}  priority className="w-full"  />
        </div>
        <h3 className="text-invite-text-light font-semibold text-xl dark:text-invite-text-dark">Join thousands of learners from around the world </h3>

        <span className=" py-2 inline-block text-invite-text-light text-lg font-normal dark:text-invite-text-dark">Master web development by making real-life projects. There are multiple paths for you to choose</span>

      </div>
      {/* input fields */}
      <div className="w-full">
        <div className="w-full rounded-lg border-2 mb-2 border-invite-text-light relative  bg-foreground-light">
          <label htmlFor="email" className="absolute top-0 left-2 bottom-0 w-8 object-center z-10 border-0"> <Image src={"/email.svg"} layout="fill" alt="Email"/></label>
          <input type="text" id="email" value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} className="w-full pl-11 text-lg py-2 pr-2 outline-none border-none rounded-lg text-slate-800 placeholder:text-label-copy focus-within:outline-foreground-dark" placeholder="Email"  />
        </div>

        <div className="w-full rounded-lg border-2 mb-2 border-invite-text-light relative  bg-foreground-light ">
          <label htmlFor="password" className="absolute top-0 left-2 bottom-0 w-8 object-center z-10 border-0"> <Image src={"/password.svg"} layout="fill" alt="Email"/></label>
          <input type="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} id="password" className="w-full pl-11 text-lg py-2 pr-2 outline-none border-none rounded-lg text-slate-800 placeholder:text-label-copy focus-within:outline-foreground-dark " placeholder="Password" />
        </div>

        {/* button */}
        <button className="w-full mt-2 bg-blue-600 text-register-btn-txt p-2 rounded-lg font-semibold text-base border-2 outline-none border-none focus-within:border-zinc-500" type="submit" >Start coding now</button>
      </div>

      {/* auth providers */}
      <div className="">
        <p className="text-label-copy font-normal text-fluid-text  mx-auto text-center my-4 w-[90%]">or continue with these social profile</p>

        <div className="flex justify-around items-center w-[90%] mx-auto ">

        <div className="w-[20%] h-auto cursor-pointer" onClick={()=>handleAuthProvider("google")}>
        <Image alt="google icon" src={"/Google.svg"} width={60} height={60}/>
        </div>

        <div className="w-[20%] h-auto cursor-pointer" onClick={()=>handleAuthProvider("facebook")}>
        <Image alt="google icon" src={"/Facebook.svg"} width={60} height={60}/>
        </div>

        <div className="w-[20%] h-auto cursor-pointer" onClick={()=>handleAuthProvider("twitter")}>
        <Image alt="google icon" src={"/Twitter.svg"} width={60} height={60}/>
        </div>

        <div className="w-[20%] h-auto cursor-pointer" onClick={()=>handleAuthProvider("github")}>
        <Image alt="google icon" src={"/Github.svg"} width={60} height={60}/>
        </div>
        
        </div>


        
      </div>

    </form>
  </section>
    

}






export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    console.log(session)
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { redirect: { destination: "/" } };
    }
  
    const providers = await getProviders();
    console.log(providers)
    return {
      props: { providers: providers ?? [] },
    }
  }



  // export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //   return (
  //     <>
  //       {Object.values(providers).map((provider) => (
  //         <div key={provider.name}>
  //           <button onClick={() => signIn(provider.id)}>
  //             Sign in with {provider.name}
  //           </button>
  //         </div>
  //       ))}
  //     </>
  //   )
  // }