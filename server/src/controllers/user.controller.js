import { Users } from "../model/user.model.js"
import bcrypt from "bcrypt";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const register=async(req,res)=>{
const {name,email,password}=req.body
console.log(name,email,password)


if (
    [name, email, password].some((field) => field?.trim() === "")
) {
    res.status(400).json({
        message:"All input are require",

    })
}
   

const tempAvatar = req.files?.avatar[0]?.path;
if (!tempAvatar) {
    res.status(400).json({
        message:"avatar is required"
    })
}

const avatar = await uploadOnCloudinary(tempAvatar)
if (!avatar) {
    res.staus(400).json({
        message:"avatar file is required"
    })
}




try {
    // check user is already exist or not

    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(404).json({
        success: "false",
        message: "user already exist",
      });
    } else {
      //    password to be hashed

      const hashedPassword = await bcrypt.hash(password, 10);

      //    store to database

      let user = await Users.create({
        name,
        email,
        password: hashedPassword,
        // role,
        // avatar,
      });
    //   sendCookie(user, res, "register successfully", 202);
    res.status(202).json({
        message:"register successfully",
        user
    })
    }
  } catch (err) {
    console.log(err);
  }












}
export const login=(req,res)=>{
    res.send('login sucessfully')
}
export const logout=(req,res)=>{
    res.send('logout sucessfully')
}
export const myProfile=(req,res)=>{
    res.send('myprofile sucessfully')
}