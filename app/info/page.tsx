"use client"
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userdata/provider'
import Link from 'next/link'

const page = () => {
 
  const {userData,getUserData} = useContext(UserContext)
  console.log(userData,"userData")

  useEffect(()=>{
    (async ()=>{
      await getUserData()
    console.log("I am called")
    })()
    console.log("I am called2")

  },[])

  return (
    <section className='grid  px-page-padding bg-foreground-light dark:bg-foreground-dark min'>
      <div className='mx-auto my-4'>
      <h3 className='font-semibold text-head-text dark:text-invite-text-dark'>Personal Info</h3>
      <span className='text-profile-text-label-light dark:text-invite-text-dark'>Basic info, like your name and photo</span>
      </div>

      <div className="mx-auto border-2 border-custom-ash rounded-lg w-full max-w-3xl sm:w-[90%] ">
        <div className='flex justify-between items-center border-b-2 border-custom-ash p-4  '>
          {/* description goes here */}
          <div className=' '>
            <h3 className='font-semibold text-lg dark:text-invite-text-dark'>Profile</h3>
            <p className=' text-label-copy text-custom-medium dark:text-invite-text-dark' >Some info may be visible to other people</p>
          </div>
          <div className='border-2  border-custom-ash rounded-lg text-custom-ash cursor-pointer'>
            <Link href={"/info/edit"} className='py-btn-padding-y px-btn-padding-x'>Edit</Link>
          </div>
        </div>
        <ul className="">
          {/* user details goes here */}
          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>PHOTO</span>
            <div className={`w-16 h-16 rounded-lg object-center overflow-hidden bg-gradient-to-br from-slate-300 to-slate-100 ${!userData.user.image && "animate-pulse"} shadow-md`}>
              <img src={userData?.user.image} alt="profile image" className='w-full text-transparent'/>
            </div>
          </li>
          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.2] text-profile-text-label-light text-sm '>NAME</span>
            <div className="text-left  flex-[0.8] rounded-lg object-center overflow-hidden font-semibold">
              <h4 className=' place-self-start dark:text-invite-text-dark'>{userData.user.name}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.2] text-profile-text-label-light text-sm '>BIO</span>
            <div className=" rounded-lg flex-[0.8] object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold  text-left dark:text-invite-text-dark'>{userData.user.bio ?? "Please add a bio"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.2] text-profile-text-label-light text-sm'>PHONE</span>
            <div className=" rounded-lg flex-[0.8] object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold text-left dark:text-invite-text-dark'>{userData.user.phone ?? "Please add your contact number"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.2] text-profile-text-label-light text-sm'>EMAIL</span>
            <div className=" rounded-lg flex-[0.8] object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis  font-semibold  text-left dark:text-invite-text-dark'>{userData.user.email ?? "Please add add your email"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 '>
            <span className='flex-[0.2] text-profile-text-label-light text-sm'>PASSWORD</span>
            <div className=" rounded-lg  flex-[0.8] object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis  font-semibold dark:text-invite-text-dark'>{userData?.user.name && "***********"}</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default page