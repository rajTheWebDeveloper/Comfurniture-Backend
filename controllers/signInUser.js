import express from 'express'
import Users from '../models/users.js'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config({
    path:"../config/.env"
})


let signInUser=async (req,res)=>
{
    try 
    {
        let {email,password:entered}=req.body;
        let foundUser = await Users.findOne({ email})
        // let {password:hashed}=foundUser
        if(foundUser)
        {
            let validated=await foundUser.authenticate(entered)
            let {_id,firstName}=foundUser;
            if(validated)
            {
                let token=jwt.sign({_id,firstName},process.env.JWT_PASSWORD,{expiresIn:'8h'})
                return res.send({
                  success: true,
                  token:token,
                  data: foundUser,
                  msg: `Welcome ${firstName}`
                });
            }
            else 
            {
                return res.send({
                  success: false,
                  data: null,
                  msg: "The password you entered is incorrect"
                });
            }
        }
        else 
        {
            return res.send({
              success: false,
              data: null,
              msg:
                `Account doesnt exists. Please create an account`
            });
        }
    }
    catch(e)
    {
        console.log(e)
    }
}


export default signInUser