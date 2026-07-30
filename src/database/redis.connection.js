import { createClient } from "redis"
import dotenv,{config} from "dotenv"
 dotenv.config()
export const client = createClient({
  url: process.env.urlredis
});

client.on("error", function(err) {
  throw err;
});
export const redisConnection = async()=>{
    try {
        await client.connect()
        console.log("Redis is connected")
    } catch (error) {
        console.log("Error in redis connection" ,error)
        
    }
}

//await redis.set("foo", "bar");
//await redis.get("foo");