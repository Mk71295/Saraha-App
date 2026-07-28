import { authController, loginController } from "../auth/auth.controller.js"
import Express from "express"
const userRouter = Express.Router()
userRouter.post("/add", authController)
userRouter.post("/login",loginController)
export default userRouter