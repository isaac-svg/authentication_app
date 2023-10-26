import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import connectDB from "../db/connectdb";
import User from "../models/model";
import { sessionType } from '@/types/data';


export async function GET(req:Request, res:Response){

        const  data = await getServerSession()
        
        let session = data as sessionType
    try {
        await connectDB();
        let user;

        console.log(data,"data")
        // get the user by name
        user = await User.findOne({name:session?.user.name});
        
        if (user)
        {
            
            return NextResponse.json({user},{status:200})
        }
        // if user registered with email, get by that

        user = await User.findOne({email:session?.user.email})
        
        if (user){
            return NextResponse.json({user}, {status:200})
        }

        return NextResponse.json({message:"Unauthorized"}, {status:401})
        
    } catch (error) {
        
    }

}