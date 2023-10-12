import { connect } from "http2";
import mongoose from "mongoose";


export default  async function connectDB(){

    try {
        
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("connected to db");
        
    } catch (error: any) {
        console.log(error.message)
    }
}