import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


let usersSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profileImage:{
        type:String
    }
})


usersSchema.pre('save',async function()
{
    try 
    {
        this.password=await bcrypt.hash(this.password,10)
    }
    catch(e)
    {
        console.log(e)
    }
})


export default mongoose.model('Users',usersSchema)