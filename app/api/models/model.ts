import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    email:{
        type: String,
        require: true,
    },
    username:{
        type:String,
        
        min: 3,
        max: 50,
    },

    password:{
        type:String,
        require:true
    },

    avatar:{
        type: String,
    },

    bio:{
        type:String
    }
})

const User =  mongoose.models.User || mongoose.model("User", userSchema)


export default User