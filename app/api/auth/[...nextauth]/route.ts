import { NextAuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials"
import githubProvider  from "next-auth/providers/github"
import googleProvider  from "next-auth/providers/google"
import facebookProvider  from "next-auth/providers/facebook"
import twitterProvider  from "next-auth/providers/twitter"
import Email  from "next-auth/providers/email"

import connectDB from "../../db/connectdb";
import User from "../../models/model";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth/next";
import { verifyCredentials } from "@/lib/verify-input";
import { NextResponse } from "next/server";


export const authOptions: NextAuthOptions  = {

    providers:[
        credentialsProvider({
            name:"padlock",
            credentials:{
                email:{type:"email",placeholder:"example@example.com", label:"Email"},
                password:{
                    type:"password", placeholder:"secret", label:"Password"
                }
            },
           async authorize(credentials){

            // perform authentication, read or write to db

            const email = credentials?.email;
            const password = credentials?.password

            console.log(email, password)
            
            if (!verifyCredentials(email, password)){
                return NextResponse.json({messgae:"Please your inputs"})
            }
            // to make typescript happy!

            if (!email || !password)
            {
                return NextResponse.json({messgae:"All fields are required"})
            }
            // check if a user with this email exists

            await  connectDB()
            const user = await User.findOne({email})
            
            if (!user){

                const salt = await bcrypt.genSalt(+process.env.SALT!);
                const hashedPassword = await bcrypt.hash(password, salt)

                const   newUser =  await  User.create(
                    { email, password:hashedPassword, name: email.slice(0, email.indexOf('@'))})

              return newUser
            }

            // if user with such email is found return check if the passwords match

            const isMatch =  await bcrypt.compare(password,user.password)
            
            if (!isMatch)
            {
                return NextResponse.json({messgae:"incorrect credentials"})
            }

            return user
           }
           ,

           
        }),
        googleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        facebookProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        twitterProvider({
            clientId: process.env.TWITTER_ID as string,
            clientSecret: process.env.TWITTER_SECRET as string,
            version:"2.0"
        }),
        githubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
        
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks:{

        async jwt({token, user}) {
            
            return token
        },

        async session({session, token}) {
            
            return session
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
          },

    },
    pages:{
        signIn:"/auth/signin",
        
    }
}

const handler = NextAuth(authOptions)

export  {handler as GET , handler as POST}