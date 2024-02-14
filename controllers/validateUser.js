import express from 'express'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config({
    path:'../config/.env'
})

let validateUser=async (req,res,next)=>
{
    let token=req.headers.authorization;
    token=token.replace('Bearer ',"")
    let verified=jwt.verify(token,process.env.JWT_PASSWORD)
    let {_id}=verified
    if(verified)
    {
        res.cookie('user',_id)
        next()
    }
    else 
    {
        return res.send("Something Wrong");
    }
}


export default validateUser