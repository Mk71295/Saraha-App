import dotenv,{config} from "dotenv"
dotenv.config()
import app from "./app.controller.js"
const serverPort =process.env.serverPort
app().listen(serverPort, () => {
    console.log(`server runnig in port ${serverPort}`)
})
