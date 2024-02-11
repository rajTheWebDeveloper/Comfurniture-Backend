import express from 'express'
import Users from '../models/users.js'


let signInUser=async (req,res)=>
{
    try 
    {
        let {email,password}=req.body;
        let foundUser = await Users.findOne({ email});
        if(foundUser)
        {
            let {firstName}=foundUser
            return res.send({
              success: true,
              data: foundUser,
              msg: `Welcome ${firstName}`,
            });
        }
        else 
        {
            return res.send({
              success: false,
              data: null,
              msg: `Account doesnt exists. Please create an account`,
            });
        }
    }
    catch(e)
    {
        console.log(e)
    }
}


export default signInUser