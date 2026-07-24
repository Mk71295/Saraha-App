import { model, Schema } from "mongoose";

const userschema= new Schema({
    First_Name :{
        type : String,
        tirm : true ,//بيشيل المسافات في الاسم
        minlength : 3,
        maxlength :50,
        require : true

    },
     Last_Name :{
        type : String,
        tirm : true ,//بيشيل المسافات في الاسم
        minlength : 3,
        maxlength :50,
        require : true
     },
      UserName :{
        type : String,
        tirm : true ,//بيشيل المسافات في الاسم
        minlength : 3,
        maxlength :50,
        require : true,
        unique : true
     }

})
const userModel = model("User",userschema)
export default userModel