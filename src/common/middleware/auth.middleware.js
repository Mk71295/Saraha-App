import { verfiyToken } from "../token/token.js";
import userModel from "../../model/user.model.js";

// Authentication Function
export const authentication = () => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(400).json({ message: "Token is required!" });
      }

      const verify = verfiyToken({
        token: token,
        secretKey: process.env.secretKeyToken
      });

      if (!verify) {
        return res.status(401).json({ message: "Unauthorized Access!" });
      }

      // 💡 1. البحث عن الـ ID سواء كان مبعوث في root الـ verify أو داخل verify.payload
      const userId = verify.id || verify.payload?.id;
      const user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      req.user = user;
      req.verify = verify;
      next();
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error!",
        error: error.message
      });
    }
  };
};

// Authorization Function
export const authroziation = (...roles) => {
  return (req, res, next) => {
    // 💡 2. قراءة الـ Role من الـ user أو من الـ verify مع مراعاة الحروف الكابيتال والسمول
    const userRole = req.user?.Role || req.user?.role || req.verify?.role;

    if (!userRole) {
      return res.status(403).json({ message: "Role is missing!" });
    }

    // 💡 3. تحويل الكلمات لـ Lowercase للمقارنة الصحيحة وتجنب مشكلة ("User" vs "user")
    const normalizedUserRole = String(userRole).toLowerCase();
    const normalizedAllowedRoles = roles.map((r) => String(r).toLowerCase());

    if (!normalizedAllowedRoles.includes(normalizedUserRole)) {
      return res.status(403).json({ message: "Role not Supported" });
    }

    next();
  };
};