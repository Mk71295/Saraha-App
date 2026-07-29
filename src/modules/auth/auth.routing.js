import { role } from "../../common/enum/role.enum.js"
import { authentication, authroziation } from "../../common/middleware/auth.middleware.js"
import { authController, getProfileController, loginController, UpdateProfileController } from "../auth/auth.controller.js"
import Express from "express"
import { updateProfileService } from "./auth.service.js"
const userRouter = Express.Router()
userRouter.post("/add", authController)
userRouter.post("/login",loginController)
userRouter.get("/Profile",authentication(),authroziation(role.USER),getProfileController)
userRouter.put("/update",authentication(),authroziation(role.USER),UpdateProfileController)

export default userRouter