import {getProfileService, login, signup, updateProfileService , Getprofiles ,forgetPassword } from "../auth/auth.service.js"
//import {loginSchema} from "./auth.valdition.js"
//import joi from "joi"
// SIGN UP
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
// LOGIN 
export const loginController=async(req , res)=>{
    try {
        const loginUser = await login (req.body)
// const { error, value } = loginSchema.validate(req.body);

// if (error) {
//   return res.status(400).json({
//     message: "Error in Login",
//     error: error.details[0].message
//   });
// }
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
// GET PROFILE 
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
// UPDATE PROFILE
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
// GET All PROFILE 
export const getAllProfilesController=async(req , res)=>{
    try {
        const login = await Getprofiles()
        return res.status(200).json({
            message:"Welcome",
            login
        })
        
    } catch (error) {
        return res.status(500).json({
            message :"Error in email or password",
            error:error.message
        })
        
    }
}

export const forgetPasswordController=async(req , res)=>{
    try {
        const user = await forgetPassword(req.email)
        return res.status(200).json({
            message:"Email Sent",
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            message :"Email not sent",
            error:error.message
        })
        
    }
}