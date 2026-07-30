import {client} from "../../database/redis.connection.js"
//Set function
export const setRecord =(key,value, time)=>{
    return time ? client.set(Key ,JSON.stringify(value),{ // ? == ifcondition
        Ex:time
    }) : client.set(key,JSON.stringify(value))
}
//Get function
export const getRecord =(key)=>{
    return JSON.parse(client.get(key))
}
//Delete function
export const deleteRecord = (key)=>{
    return client.del(key)
}
//OTP Tempelate
export const tempelateOTP = (email)=>{
    return `OTP:${email}`
}
