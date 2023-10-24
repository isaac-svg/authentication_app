"use client"
import { useSession } from 'next-auth/react'
import React, { useContext } from 'react'
import { UserContext } from '../context/userdata/provider'
import Link from 'next/link'
// import { userImage } from '../context/userdata/provider'

const page = () => {
  // const {data} = useSession()
  const {userData} = useContext(UserContext)
  console.log(userData,"userImage")
  return (
    <section className='grid  px-page-padding bg-foreground-light dark:bg-foreground-dark min'>
      <div className='mx-auto my-4'>
      <h3 className='font-semibold text-head-text '>Personal Info</h3>
      <span className='text-profile-text-label-light'>Basic info, like your name and photo</span>
      </div>

      <div className="mx-auto border-2 border-custom-ash rounded-lg w-full sm:w-[90%] max-w-4xl">
        <div className='flex justify-between items-center border-b-2 border-custom-ash p-4  '>
          {/* description goes here */}
          <div className=' '>
            <h3 className='font-semibold text-lg '>Profile</h3>
            <p className=' text-label-copy text-custom-medium' >Some info may be visible to other people</p>
          </div>
          <div className='border-2  border-custom-ash rounded-lg text-custom-ash cursor-pointer'>
            <Link href={"/edit"} className='py-btn-padding-y px-btn-padding-x'>Edit</Link>
          </div>
        </div>
        <ul className="">
          {/* user details goes here */}
          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>PHOTO</span>
            <div className="w-16 h-16 rounded-lg object-center overflow-hidden">
              <img src={userData?.user.image} alt="" className='w-full'/>
            </div>
          </li>
          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>NAME</span>
            <div className=" rounded-lg object-center overflow-hidden font-semibold">
              <h4>{userData.user.name}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>BIO</span>
            <div className=" rounded-lg object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold'>{userData.user.name ?? "Please add a bio"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>PHONE</span>
            <div className=" rounded-lg object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold'>{userData.user.name ?? "Please add your contact number"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 border-b border-custom-ash'>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>EMAIL</span>
            <div className=" rounded-lg object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold'>{userData.user.name ?? "Please add add your email"}</h4>
            </div>
          </li>

          <li className='flex items-center p-2 '>
            <span className='flex-[0.3] text-profile-text-label-light text-sm'>PASSWORD</span>
            <div className=" rounded-lg object-center overflow-hidden">
              {/* put user bio from db here will be empty opun registration */}
              <h4 className='text-ellipsis font-semibold'>***********</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default page