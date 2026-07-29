import { model, Schema } from "mongoose";
import { gender } from "../common/enum/gender.enum.js";
import { role } from "../common/enum/role.enum.js";

const noInfo = "!no data enter";

const userschema = new Schema(
  {
    First_Name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50,
      required: true // 💡 تصحيح required
    },
    Last_Name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50,
      required: true
    },
    UserName: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50,
      required: true,
      unique: true
    },
    Email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true // 💡 يفضل تحويل الإيميل لسمول دائماً
    },
    Password: {
      type: String,
      trim: true,
      minlength: 6,
      required: true
      // 💡 تم إزالة maxlength لتجنب مشاكل الـ Hashing
    },
    Address: {
      type: String,
      trim: true,
      default: noInfo
    },
    phone: {
      type: String,
      minlength: 11,
      maxlength: 11,
      required: true
    },
    Age: {
      type: Number,
      min: 10,
      max: 100
    },
    profile_image: {
      type: String,
      default: noInfo
    },
    confirmEmail: {
      type: Boolean,
      default: false // 💡 تصحيح default
    },
    gender: {
      type: String,
      enum: Object.values(gender),
      default: gender.male
    },
    Role: {
      type: String,
      enum: Object.values(role),
      default: role.USER // 💡 تصحيح default
    }
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true,
    versionKey: "version",
    collection: "messagedata",
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true }
  }
);

// 💡 تصحيح الـ Virtual Property
userschema.virtual("fullname").get(function () {
  return `${this.First_Name} ${this.Last_Name}`;
});

const userModel = model("User", userschema);
export default userModel;