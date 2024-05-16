import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const URI = process.env.MONGODB_URI
export const connectDb = async ()=>{
    try {
    
        mongoose.connect(URI,{
           dbName:"BookStore"
        });
        console.log("connected to mongodb");
   } catch (error) {
       
       console.log("Error:", error)
   }
}