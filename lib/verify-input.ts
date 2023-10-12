


export const verifyCredentials  = (email:string | undefined, password:string | undefined): boolean =>{

    // check if anyof theme doesn't have a string type
    // check if any if null
    // check if email matches regex
    
    const args = [email, password]

 if (!email || !password)
 {
    return false
 }

 if (typeof(email) !== "string" || typeof(password) !== "string"){

    console.log("WE ARE NOT STRINGS")
    return false
 }
 const reg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

 if (!reg.test(email)){

    console.log("reg failed")

    return false
 }

 console.log("I passed")
 return true
}