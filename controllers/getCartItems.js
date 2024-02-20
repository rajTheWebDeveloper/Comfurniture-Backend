import express from 'express'
import Cart from '../models/cart.js'

let getCartItems=async (req,res)=>
{
    let {user}=req.body
    let foundCart=await Cart.findOne({user})
    console.log(foundCart)
    return res.send({success:true,data:foundCart})
}



export default getCartItems;