import { generateToken } from "../../common/token/token.js";
import userModel from "../../model/user.model.js";

export const signup = async (data) => {
  // التأكد من عدم وجود الإيميل مسبقاً
  const emailExists = await userModel.findOne().where({ email: data.email });
  if (emailExists) {
    throw new Error("Email already registered!");
  }

  const userData = await userModel.create(data);
  return userData;
};

export const login = async (data) => {
  // استخدام findOne للحصول على كائن مستخدم واحد مباشرة
  const user = await userModel.findOne().where({ email: data.email });
  if (!user) {
    throw new Error("Email not found");
  }

  const accessToken = generateToken({
    payload: {
      id: user._id,
      role: user.Role
    },
    secretKey: process.env.secretKeyToken,
    option: {
      expiresIn: "1h",
      issuer: "Saraha App"
    }
    
  });

  const refreshToken = generateToken({
    payload: {
      id: user._id,
      role: user.Role
    },
    secretKey: process.env.RefreshAccessToken,
    option: {
      expiresIn: "7d",
      issuer: "Saraha App"
    }
  });

  return { refreshToken, accessToken };
  console.log(accessToken)
};


// Get profile
export const getProfileService = async (userId) => {
  const user = await userModel.findById(userId).select("-Password"); // إخفاء كلمة السر من المخرجات
  if (!user) {
    throw new Error("User not found!");
  }
  return user;
};
//Update
export const updateProfileService = async(userId,data)=>{
  const updateProfile=await userModel.findByIdAndUpdate(userId, { $set:data},
    {
      new:true
    })
  if (!updateProfile){
    throw new Error("User not find!")
  }
  return updateProfile
}