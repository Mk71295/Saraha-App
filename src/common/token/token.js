import jwt from "jsonwebtoken"
export const generateToken=({ payload, secretKey,option={
        audience :[],
        expiresIn : "1h",
        notBeforeIn : "0",
        issuer:"Saraha App"
    } })=>{
    return jwt.sign(payload,secretKey,option)
    }
