"use client"

import { sessionType, userType } from '@/types/data'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'


type contextType ={
    userData:userType,
    setUserData: React.Dispatch<React.SetStateAction<userType>>,
    getUserData: () => Promise<void>
}

const initialData: contextType ={
    userData: {
        user:{
            name:"",
            email:"",
            image:"",
            _id:""
        },
        
    },
    setUserData: ()=>{},
    getUserData: async ()=>{}
}

export const UserContext = createContext(initialData)

type props ={
    children:ReactNode
}

const UserDataProvider = ({children}:props) => {

    const [userData, setUserData] = useState<userType>({user:{
        name:"",
        email:"",
        image:"",
        _id:""
    },
    })

    const getUserData = async () => {

        try {
            const res = await fetch("/api/info/")
            const data = await res.json()
            setUserData(data)
            console.log(data, "purely from server")
        } catch (error: any) {
            console.log(error.message, "from get user function")
        }
    }


    useEffect(()=>{
       (async ()=> {
        await getUserData()
        console.log("Effect called from provider")
    })()
       
    },[])



  return (
    <UserContext.Provider  value={{userData, setUserData, getUserData}}>
        {children}
    </UserContext.Provider>
  )
}


export default UserDataProvider