import express from 'express'
import mongoose from 'mongoose'


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



export default mongoose.model('Users',usersSchema)