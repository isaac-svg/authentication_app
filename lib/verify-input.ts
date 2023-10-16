
type checker = (email:string | undefined, password:string | undefined) => boolean

export const verifyCredentials: checker  = (email:string | undefined, password:string | undefined): boolean =>{

    // check if anyof theme doesn't have a string type
    // check if any if null
    // check if email matches regex
    
    const args = [email, password]

 if (!email || !password)
 {
    return false
 }

 if (typeof(email) !== "string" || typeof(password) !== "string"){

    return false
 }
 const reg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

 if (!reg.test(email)){


    return false
 }

 return true
}