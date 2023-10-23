"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

type layoutProp ={
    children:ReactNode
}
type sessionType ={
    user:{
        name?:string,
        email?:string,
        image?:string
    },
    expires:string
}
const layout = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {data} = useSession()
    let session =  data as sessionType

    // setUsersession(session)
    console.log(data,"data")
    console.log(session, "session")

    console.log(session?.user.image!,"Image")

  return (
    <nav className='px-page-padding flex justify-between py-4 h-[50px]'>
        <div className="">
            <Image  alt='Logo' src={"/devchallenges-light.svg"} width={100} height={100}/>
        </div>
        <div className=" flex gap-2 items-center
        ">
        <div className="w-8 h-8 rounded-lg relative overflow-hidden cursor-pointer">
        <img alt='profile pic' src={`${session?.user.image!}`} className='w-full h-full absolute object-center' />
        </div>
        <span className='cursor-pointer text-profile-text-label-ligh'>{session?.user.name}</span>
        <span className='cursor-pointer' onClick={()=>setIsVisible(!isVisible)}>^</span>
        </div>
        <ul className={`border-2 border-custom-ash p-3 rounded-lg absolute right-2 top-[68px] ${isVisible? "" : "hidden"} transition duration-200 ease-in-out`}>
            <li className='flex p-2 items-center gap-2'>
                <img src="/email.svg" alt="Profile" className='inline-block h-8 w-8 ' />
                <span>My Profile</span>
            </li>
            <li className='border-b-2 border-custom-ash flex p-2 items-center gap-2 '>

                <img src="/Google.svg" alt="Group chat inline-block h-8 w-8 " />
                <span>Group Chat</span>
            </li>
            <li className='flex p-2 items-center gap-2'>
            <img src="/Google.svg" alt="Group chat inline-block h-8 w-8 " />
                <span >Logout</span>
            </li>
        </ul>
    </nav>
  )
}

export default layout