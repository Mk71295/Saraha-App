import { model, Schema } from "mongoose";
import { gender } from "../common/enum/gender.enum.js";
import { role } from "../common/enum/role.enum.js";
const noInfo = "!no data enter"
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
     },
     Email :{
        type : String,
        tirm : true ,//بيشيل المسافات في الاسم
        require : true,
        unique : true
     },
      Password :{
        type : String,
        tirm : true ,//بيشيل المسافات في الاسم
        minlength : 6,
        maxlength :8,
        require : true,
        get(){ //بطبع الداتا بالشكل اللي انا عايزه
          return "$$$$$$"
        }
      },
      Address :{
        type : String,
        trime : true,
        default : noInfo,
      },
      phone :{
        type : String,
        minlength: 11,
        maxlength : 11,
        required : true,
      },
      Age :{
        type :Number,
        min : 10,
        max : 100,
        default : noInfo,
      },
      profile_image :{
        type : String,
        default : noInfo,
      },
      confirmEmail :{
        type : Boolean,
        defualt : false
      },
      gender:{
        type: String,
        enum : Object.values(gender), //هنا مسؤليتها انها تطلع كل الاختيارات اللي انا حطيتها
        default: gender.male
      },
      Role :{
        type: String,
        enum:Object.values(role),
        defualt: role.USER
      }
},
   {
        timestamps:true,//crated at, updated at
        strict:true,//بتخليه يبعت اللي موجود في ال schema فقط
        strictQuery:true ,//هنا عشان نحل مشكلة ال update and find
        versionKey:"version", //مبتسمحش لحد يشتغل علي schema مختلفة عن ديه
        collection:"messagedata",
        toJSON:{ virtuals: true, getters:true},
        toObject: {virtuals:true, getters:true}
    }
)
userschema.virtual("fullname").get(function(){
  return $(this.First_Name)+" "+$(this.Last_Name)
})

const userModel = model("User",userschema)
export default userModel