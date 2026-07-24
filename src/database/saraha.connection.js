import mongoose from "mongoose"

export const databaseConnect= async()=>{
    const url = Process.env.Database_url
    try {
        await mongoose.connect(url,{
            maxPoolSize :process.env.MaxPoolSize // بتاخد عدد العمليات اللي تعملها في وقت واحد
            
           



        })
        console.log("✅ Databse connection sucessfully", connectionSuccess )
    } catch (error) {
        console.log("❎ Error in connection" , connectionFalid)
    }
}