import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../db/connectdb";
import User from "../../models/model";
import { NextResponse } from "next/server";
// import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";


export  async function POST(req:Request, res:Response){

    try {
        await connectDB()
        
        const payload =  await req.json()
        console.log(payload, "payload")

        if (!payload)
        {
            return NextResponse.json({message:"Authentication failed"})
        }

        const tempUser =  new User(payload.user)
        const user = await tempUser.save()
        console.log(user, "saved user")
       return NextResponse.json({user})
    
    } catch (error) {
        return NextResponse.json({message:"Authentication failed"})
    }
} 


// export {handler as POST}