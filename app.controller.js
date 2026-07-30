import userRouter from "./src/modules/auth/auth.routing.js"
import Express from "express"
import dotenv,{config} from "dotenv"
import {databaseConnect} from "./src/database/saraha.connection.js"
import {redisConnection} from"./src/database/redis.connection.js"
export const app= ()=>{
    dotenv.config()
    databaseConnect()
    redisConnection()
    
const api = Express()
api.use(Express.json())
api.use("/auth",userRouter )
return api
}
export default app