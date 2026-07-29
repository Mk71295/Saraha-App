import {getProfileService, login, signup, updateProfileService} from "../auth/auth.service.js"
export const authController= async(req , res) =>{
    try {
        const userData= await signup(req.body)
        return res.status(201).json({
            message : "Create Account Successfully",
            userData
        })
    } catch (error) {
        return res.status(500).json({
            message : "Invalid server error",
            error:error.message
        })
    }
}
export const loginController=async(req , res)=>{
    try {
        const loginUser = await login (req.body)
        return res.status(200).json({
            message:"Welcome to our App",
            loginUser
        })
        
    } catch (error) {
        return res.status(500).json({
            message :"Error in email or password",
            error:error.message
        })
        
    }
}
export const getProfileController=async(req , res)=>{
    try {
        const loginUser = await getProfileService (req.user.id)
        return res.status(200).json({
            message:"Welcome",
            loginUser
        })
        
    } catch (error) {
        return res.status(500).json({
            message :"Error in email or password",
            error:error.message
        })
        
    }
}
    export const UpdateProfileController=async(req , res)=>{
    try {
        const updateUser = await updateProfileService (req.user.id , req.body)
        return res.status(200).json({
            message:"User Updated",
        })
        
    } catch (error) {
        return res.status(500).json({
            message :"Data not updated",
            error:error.message
        })
        
    }
}