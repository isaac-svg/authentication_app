export type userType ={

    user:{
    _id?:string,
    name:string,
    email?:string,
    password?:string,
    bio?:string,
    phone?:string,
    image?:string,
    _v?:string,
    }
}

export type sessionType ={
    user:{
        name?:string,
        email?:string,
        image?:string
    },
    expires:""
}