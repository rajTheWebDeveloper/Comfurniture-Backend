import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


let signUpSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    profileImage:{
        type:String
    }
})

signUpSchema.pre('save',async function()
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


signUpSchema.methods.validateUser=async function (password)
{
    return bcrypt.compare(password,this.password)
}


export default mongoose.model('SignUp',signUpSchema)