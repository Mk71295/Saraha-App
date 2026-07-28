import TokenExpiredError  from "jsonwebtoken"
import { generateToken } from "../../common/token/token.js"
import logic from "../../model/user.model.js"
export const signup = async(data) =>{
    //check email
    const emailVerfication = await logic.find().where({
        email : data.email
    })
    if(!emailVerfication){
        throw new Error("Invalid Email")
    }
    const userData = await logic.create(data)
    return userData
}
export const login = async(data)=>{
       const emailChecker = await logic.find().where({
        email : data.email
    })
    if(!emailChecker){
        throw new Error("Email not found")
    }
    const accessToken = generateToken({
        payload:{
        id : emailChecker._id,
        role : emailChecker.role
        },
        secretKey:process.env.secretKeyToken,
        option:{
              expiresIn : "1h",
              issuer:"Saraha App"
        }
        
    },

)
 const refreshToken = generateToken({
          payload:{
        id : emailChecker._id,
        role : emailChecker.role
        },
        secretKey:process.env.RefreshAccessToken,
        option:{
              expiresIn : "1h",
              issuer:"Saraha App"
        }

    },
)
return {refreshToken,accessToken}
}