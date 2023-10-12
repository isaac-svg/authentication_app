

// export {default} from "next-auth/middleware"

import { withAuth,NextRequestWithAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";


export default withAuth(
  function middleware(request: NextRequestWithAuth){

    
    if (request.nextUrl.pathname.startsWith("/profile")  && !request.nextauth.token){
    
      return NextResponse.rewrite(new URL("/denied", request.url))
    }

    
  },
  {
    callbacks:{
      authorized: ({token}) => !!token
    }
  }
)


export const config ={
  matcher:["/profile", "/profile-edit", "/"]
}