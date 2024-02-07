import express from 'express'
import SignUp from '../models/signup.js'



let getAll=async (req,res)=>
{
    let allUsersNow=await SignUp.find({})
    return res.send(allUsersNow)
}


export default getAll