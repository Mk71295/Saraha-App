import { model, Schema } from "mongoose";
import { gender } from "../common/enum/gender.enum";
import { role } from "../common/enum/role.enum";
import {flag, message} from "../common/enum/flag"

const messageschema=new Schema({
    senderid :{
        type: Types.ObjectId,
        require :true,
        ref : "User"
    },
       reciverid :{
        type: Types.ObjectId,
        require :true,
        ref : "User"
    },
           parentid :{
        type: Types.ObjectId,
        require :true,
        ref : "User"
    },
           body:{
        type: String,
        require :true,
        ref : "User",
        maxlength: 1000,
    },
    flag :{
        type: String,
        enum: [Object.values(flag)],
        default:flag.SEND
    },
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
const message_model=model("Message",messageschema)
export default message_model