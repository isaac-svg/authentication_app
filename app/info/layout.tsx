"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userdata/provider'
import Link from 'next/link'
// import { setUserImage } from '../context/userdata/provider'

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
const layout = ({children}:layoutProp) => {

    const [isOpen, setIsOPen] = useState<boolean>(false)
    const { setUserData}  = useContext(UserContext)
    const {userData} = useContext(UserContext)
    const {data} = useSession()

    let session =  data as sessionType
    // useEffect(()=>{
    //    if (data){
    //     updateImage()
    //    }
    // },[data])

    // const updateImage = () =>{
    //     console.log(session, "session from function")
    //     setUserData(session)
    // }
   


  return (
    <>
    <nav className='px-page-padding flex justify-between py-4 h-[50px] dark:bg-foreground-dark'>
        <div className="">
            <Image  alt='Logo' src={"/devchallenges-light.svg"} width={100} height={100}/>
        </div>
        <div className=" flex gap-2 items-center
        ">
        <div className="w-10 h-10 rounded-lg relative overflow-hidden cursor-pointer">
        <img alt='profile pic' src={`${userData?.user.image!}`} className={`w-full h-full absolute object-center bg-gradient-to-br from-slate-300 to-slate-100 ${!userData?.user.image && "animate-pulse"} shadow-sm text-transparent`}/>
        </div>
        <span className='cursor-pointer text-profile-text-label-ligh dark:text-invite-text-dark'>{userData?.user.name}</span>
        <span className='cursor-pointer' onClick={()=>setIsOPen(!isOpen)}>
            {isOpen ?<img src="/images/expand_less.svg" alt="more" />:<img src="/images/expand_more.svg" alt="less" />}
            
        </span>
        </div>
        <ul className={`border-2 border-custom-ash p-3 rounded-lg absolute right-2 top-[68px] shadow-lg ${isOpen? "" : "hidden"} transition duration-200 ease-in-out dark:bg-foreground-dark  `}>
            <Link href={"/info/edit"} className='flex p-2 items-center gap-2 hover:bg-hover-bg rounded-lg hover:dark:bg-slate-500'>
                <img src="/images/person.svg" alt="Profile" className='inline-block h-8 w-8 ' />
                <span className='dark:text-invite-text-dark'>My Profile</span>
            </Link>
            <li className=' flex p-2 items-center gap-2 hover:bg-hover-bg rounded-lg hover:dark:bg-slate-500'>

                <img src="/images/group.svg" alt="Group chat " className='inline-block h-8 w-8 ' />
                <span className='dark:text-invite-text-dark'>Group Chat</span>
            </li>
            <hr className='bg-custom-ash w-full h-[2px] my-2'/>
            <Link href={"/api/auth/signout"} className='flex p-2 items-center gap-2 text-logout-red hover:bg-hover-bg rounded-lg hover:dark:bg-slate-500' >
            <img src="/images/logout.svg" alt="Group chat inline-block h-8 w-8 " className='text-logout-red' />
                <span >Logout</span>
            </Link>
        </ul>
    </nav>
    {children}
    </>
  )
}

export default layout