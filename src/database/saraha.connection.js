import mongoose from "mongoose"

export const databaseConnect= async()=>{
    const url = process.env.Database_url
    try {
        await mongoose.connect(url,{
            maxPoolSize :process.env.MaxPoolSize // بتاخد عدد العمليات اللي تعملها في وقت واحد            
        })
        console.log("✅ Databse connection sucessfully" )
       
    } catch (connectionFalid) {
        console.log("❎ Error in connection" , connectionFalid)
    }
}