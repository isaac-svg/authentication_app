import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    email:{
        type: String,
        unique:true
    },
    name:{
        type:String,
        min: 3,
        max: 50,
        require: true,
        unique: true
    },

    password:{
        type:String,
    },

    image:{
        type: String,
    },

    bio:{
        type:String
    },
    phone:{
        type: String
    }
})

const User =  mongoose.models?.User || mongoose.model("User", userSchema)


export default User