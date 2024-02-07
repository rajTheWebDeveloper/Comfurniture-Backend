import express from 'express'
import SignUp from '../models/signup.js'



let getusers=async (req,res)=>
{
    let allUsers=await SignUp.find({})
    return res.send({ data: allUsers });
}


export default getusers