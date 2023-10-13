import { NextAuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials"
import githubProvider  from "next-auth/providers/github"
import connectDB from "../../db/connectdb";
import User from "../../models/model";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth/next";
import { verifyCredentials } from "@/lib/verify-input";


const authOptions: NextAuthOptions  = {

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
                return null
            }
            // to make typescript happy!

            if (!email || !password)
            {
                return false
            }
            // check if a user with this email exists

            await  connectDB()
            const user = await User.findOne({email})

            if (!user){

                const salt = await bcrypt.genSalt(+process.env.SALT!);
                const hashedPassword = await bcrypt.hash(password, salt)

                const   newUser =  await  User.create(
                    { email, password:hashedPassword})

              return newUser
            }

            // if user with such email is found return check if the passwords match

            const isMatch =  await bcrypt.compare(password,user.password)
            
            if (!isMatch)
            {
                console.log("HACK ATTEMPT")
                return null
            }

            return user
           }
           ,

           
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
}

const handler = NextAuth(authOptions)

export  {handler as GET , handler as POST}