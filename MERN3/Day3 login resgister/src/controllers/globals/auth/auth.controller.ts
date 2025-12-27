import {Response, Request} from "express"
import User from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
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
 if(match) {
  res.status(200).json({message: "Login Successfull!!"})
 } else {
  res.status(400).json({message:"Please provide corret Password!!"})
}
}