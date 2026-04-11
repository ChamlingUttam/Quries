import mongoose from "mongoose";
import 'dotenv/config'

const mongo_uri = process.env.MONGO_URI

console.log("MONGO_URI:", process.env.MONGO_URI);

export const connectDB = async() : Promise<void>  =>{

    try {
        await mongoose.connect(mongo_uri as string)
        console.log("successfully connected to database")
        
    } catch (error:unknown) {
        if(error instanceof Error){
            console.log(error.message)
        }
        else{
            console.log("cant connect to database")
        }
        
    }
}