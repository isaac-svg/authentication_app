"use client"
import { UserContext } from '@/app/context/userdata/provider'
import Link from 'next/link'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
interface initState {
  [z: string]: any;
}


const page = () => {
  const {userData} = useContext(UserContext)
console.log(userData, "test data")
  useEffect(()=>{

    setEmail(userData.user.email)
    setBio(userData.user.bio)
    setName(userData.user.name);
    setPhone(userData.user.phone)
    setPassword(userData.user.password)


    setInitialState({
      name:userData.user.name,
      phone:userData.user.phone as string,
      bio:userData.user.bio as string,
      email:userData.user.email as string,
      password:userData.user.password as string
    })
  },[userData])
  const [name, setName] = useState<string | undefined>("")
  const [email, setEmail] = useState<string | undefined>("")
  const [password, setPassword] = useState<string | undefined>("")
  const [bio, setBio] = useState<string | undefined>("")
  const [phone, setPhone] = useState<string | undefined>("")
  const [file, setFile] = useState<File | undefined>()

  const [initialState, setInitialState] = useState<initState>({
    name:"", email:"", password:"", bio:"", phone:""
  })
  console.log(initialState)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (setState:Dispatch<SetStateAction<string | undefined>>)=>(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setState(event.target.value)
  }

  const handleSubmit  = (e: FormEvent<HTMLFormElement>) =>{

      e.preventDefault();

      const payload: initState = {
        name, email, password, bio, phone,
      }
      
      // Check if the state values have changed
      const updatedFields = Object.keys(payload).filter(
        (field: string ) => payload[field] !== initialState[field]
      );

      // Include only the updated fields in the payload
      const updatedPayload = updatedFields.reduce(
        (result, field) => {
          result[field] = payload[field];
          return result;
        },
        {} as typeof payload
      );
  
  console.log(updatedPayload, "updated Payload")
  }
  const handleFile = (e:HTMLInputElement)=>{
    const a = e.files?.[0]
    console.log(a)
    
  }
  
  return (
    <section className="min-h-screen">
      <div className='mx-auto  mt-4 mb-5 rounded-lg  max-w-2xl tablet:w-11/12 p-form-padding tablet:p-0'>
        <Link href={"/info"} className='flex items-center text-link-color'> <img src="/images/chevron_left.svg" alt="back arrow" className='inline-block' />Back</Link>
      </div>
      <div className='mx-auto tablet:border-[1px]  
      tablet:border-border-color tablet:rounded-lg  tablet:w-11/12
       p-form-padding  max-w-2xl mb-8'>
        <div className="
        ">
          <div className="">
            <h3 className='text-profile-text-main-light text-2xl dark:text-invite-text-dark'>Change Info</h3>
            <p className='text-xs text-label-copy dark:text-invite-text-dark'>Changes will be reflected to every services</p>
          </div>
          <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* change profile picture */}
            <div className="cursor-pointer flex gap-4 mt-4 items-center"  
            onClick={()=>fileRef?.current?.click()}>
              
              <input type="file" ref={fileRef} accept='.png, .jpeg, .jpg, .svg, .webp' hidden  onChange={(e: ChangeEvent<HTMLInputElement>)=>handleFile(e.target)}/>
            <div  className={`h-16 w-16 rounded-lg hover:filter hover:brightness-75 transition-transform transform duration-300 overflow-hidden text-[5px]  bg-gradient-to-br from-slate-300 to-slate-100 ${!userData.user.image && "animate-pulse"} shadow-sm`} >
              <img src={userData?.user.image} alt="profile picture" className='w-full h-full object-center'/>
            </div>

            <p className='text-custom-ash font-medium text-base dark:text-invite-text-dark'>CHANGE IMAGE</p>
            </div>
            {/* Text inputs */}
            <div className="relative">
            <label htmlFor='name' className='block text-form-label-col dark:text-invite-text-dark '>Name</label>
            <input type="text" value={name ?? ""} onChange={handleChange(setName)}  id="name" placeholder='Enter your name...' className='outline-none w-input-w border-[1px] text-form-label-col rounded-xl p-2 border-border-color placeholder:text-form-placeholder placeholder:text-xs dark:text-invite-text-dark dark:bg-foreground-dark' />
            </div>
            {/* Bio */}
            <div className="relative">
            <label  htmlFor="bio" className='text-form-label-col block dark:text-invite-text-dark'>Bio</label>
            <textarea  value={bio ?? ""} onChange={handleChange(setBio)} id="bio" placeholder='Enter your bio...' className='outline-none w-input-w border-[1px] text-form-label-col rounded-xl p-2 border-border-color placeholder:text-form-placeholder placeholder:text-xs dark:text-invite-text-dark  dark:bg-foreground-dark' ></textarea>
            </div>
            {/* Phone */}
            <div className="relative">
            <label htmlFor='phone' className='text-form-label-col block dark:text-invite-text-dark'>Phone</label>
            <input type="text" value={phone ?? ""} onChange={handleChange(setPhone)} id="phone" placeholder='Enter your phone...' className='outline-none w-input-w border-[1px] text-form-label-col rounded-xl p-2 border-border-color placeholder:text-form-placeholder placeholder:text-xs dark:text-invite-text-dark  dark:bg-foreground-dark' />
            </div>
            {/* Email */}
            <div className="relative">
            <label htmlFor='email'  className='text-form-label-col block dark:text-invite-text-dark'>Email</label>
            <input type="email" value={email ?? ""} onChange={handleChange(setEmail)}  id="email" placeholder='Enter your email...' className='outline-none w-input-w border-[1px] text-form-label-col rounded-xl p-2 border-border-color placeholder:text-form-placeholder placeholder:text-xs dark:text-invite-text-dark  dark:bg-foreground-dark' />
            </div>
            {/* password */}
            <div className="relative">
            <label htmlFor='password' className='text-form-label-col block dark:text-invite-text-dark'>Password</label>
            <input type="password"  value={password ?? ""} onChange={handleChange(setPassword)} id="password" placeholder='Enter your new password...' className='outline-none w-input-w border-[1px] text-form-label-col rounded-xl p-2 border-border-color placeholder:text-form-placeholder placeholder:text-xs dark:text-invite-text-dark  dark:bg-foreground-dark' />
            </div>

            <div className="">
              <button className='text-white bg-save-btn py-2 px-3 rounded-lg font-medium' type='submit' >Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default page