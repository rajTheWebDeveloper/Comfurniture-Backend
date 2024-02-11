import express from "express";
import env from "dotenv";
import Users from "../models/users.js";
import jwt from 'jsonwebtoken'
env.config({
  path: "../config/.env",
})


let RegisterUser = async (req, res) => {
  let hostSpot = process.env.BASE_URL || "http://localhost:8000/";
  try {
    let { firstName, lastName, email, password } = req.body;
    let profileImage = req.file;
    console.log(req.file);
    let foundUser = await Users.findOne({ email });

    let userObject = {
      ...req.body,
      profileImage: profileImage
        ? hostSpot + "public/" + profileImage.filename
        : null,email:email.toLowerCase()
    }
    console.log(userObject)
    if (!foundUser) 
    {
      let createdUser = await Users.create(userObject);
      let {_id,firstName}=createdUser
      let token=jwt.sign({_id,firstName},process.env.JWT_PASSWORD,{expiresIn:'8h'})
      return res.send({
        success: true,
        token:token,
        data: createdUser,
        msg: "Account created successfully",
      });
    } else {
      return res.send({
        success: false,
        data: null,
        msg: "Account already exists. Try Signing In",
      })
    }
  } catch (e) {
    console.log("Register User Exception",e)
    // console.log(e)
  }
}







export default RegisterUser;
