import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    email:{
        type: String,
    },
    name:{
        type:String,
        min: 3,
        max: 50,
        require: true
    },

    password:{
        type:String,
    },

    image:{
        type: String,
    },

    bio:{
        type:String
    }
})

const User =  mongoose.models?.User || mongoose.model("User", userSchema)


export default User