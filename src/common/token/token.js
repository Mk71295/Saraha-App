import jwt from "jsonwebtoken"
export const generateToken=({ payload, secretKey,option={
        audience :[],
        expiresIn : "1h",
        notBeforeIn : "0",
        issuer:"Saraha App"
    } })=>{
    return jwt.sign(payload,secretKey,option)
    }
    //verfiy toke
    export const verfiyToken=({token,secretKey})=>{
        return jwt.verify(token,secretKey)

    }
    //Decoded Token
      export const decodedToken=(token)=>{
        return jwt.decode(token)
        
    }