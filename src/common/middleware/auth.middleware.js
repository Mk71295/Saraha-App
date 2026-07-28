import { verfiyToken } from "../token/token.js"
import userModel from "../../model/user.model.js"
//Authentication Function
export const authentication = ()=>{
    return (req,res)=>{
        try {
            const token = req.header.authorization.split(" ")[1]
            if(!token){
                return res.status(400).json({
                    message:"Token is required!"
                })
            }
            const verify =verfiyToken({
                token:token,
                secretKey:process.env.secretKeyToken
            })
            if(!verify){
                return res.status(404).json({
                    message:"Unauthroized Access !"
                })
            }
            const user = await userModel.find().where({
                _id: verify. _id
            })
            if (!user){
                res.status(404).json({
                    message:"User not found!"
                })
            }
        } catch (error) {
            return res.status(500).json({
                message :"Internal server !",
                error :error.message
            })
            export const authroziation =(...role)=>{
                return(req,res,next)=>{
                    if(!role.includes(Object.values(role)))
                        return res.status(404).json({
                    message:"Role not Supported"
                })
                next()
                }
            }
            
        }
    }
}
//Authrization
export const authrization = ()=>{

}