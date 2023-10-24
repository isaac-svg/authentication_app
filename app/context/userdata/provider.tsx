"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react'
type sessionType ={
    user:{
        name?:string,
        email?:string,
        image?:string
    },
    expires:string
}
type contextType ={
    userData:sessionType,
    setUserData: React.Dispatch<React.SetStateAction<sessionType>>
}

const initialData: contextType ={
    userData: {
        user:{
            name:"",
            email:"",
            image:""
        },
        expires:""
    },
    setUserData: ()=>{}
}

export const UserContext = createContext(initialData)

type props ={
    children:ReactNode
}
const UserDataProvider = ({children}:props) => {

    const [userImage, setUserImage] = useState<string>()
    const [userData, setUserData] = useState<sessionType>({user:{
        name:"",
        email:"",
        image:""
    },
    expires:""})

  return (
    <UserContext.Provider  value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

// export const userData = ()=>{
//     const {userImage,setUserImage} = useContext(UserContext)
//     return {userImage, setUserImage}
// }

// export const {userImage, setUserImage} = userData()
export default UserDataProvider