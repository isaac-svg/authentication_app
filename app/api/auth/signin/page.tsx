"use client"

import Image from "next/image"
import dynamic from "next/dynamic";

const page = () => {


const SignIn = dynamic(() => import("../../../components/signin/SignIn"), {
  ssr: false,
});
  return (
    <>
    <SignIn/>
    </>
  )
}

export default page