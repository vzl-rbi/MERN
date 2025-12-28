import {Response, Request} from "express"
import User from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { envJwt } from "../../../config/config.js"

export const registerUser = async (req:Request, res: Response) => {
  const {username, email, password } = req.body
  if(!username || !email || !password) {
    return res.status(400).json({message: "Please provide username, email, and password!!"})
  }
  const hashPassword = await bcrypt.hash(password, 10)
  await User.create({
    username: username,
    email: email,
    password: hashPassword

  })
  res.status(201).json({message: "Registerd Successfully!!"})
}
export const loginUser = async(req:Request, res: Response) => {
  try {
    const {email, password} = req.body
  if(!email || !password) {
    return res.status(400).json({message : "Please Provide Email and Password!!"})
  }
  const user = await User.findOne({
    where: {
      email
    }
  })
 if(!user) {
  return res.status(400).json({message: "User not found!!"})
 }
 const match = await bcrypt.compare(password, user.password)
 if(!match) {
   return res.status(403).json({message:"Please provide corret Password!!"})
 }
  const token = jwt.sign({id: user.id}, envJwt.secret, {
    expiresIn: envJwt.expiresIn
  })
  // cookie for browser auth
  res.cookie(envJwt.cookieName, token )
  // response for Postman / frontend
 return res.status(200).json({message: "Login Successful!!",token})
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
 

}