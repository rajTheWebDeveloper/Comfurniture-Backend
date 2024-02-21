import express from 'express'
import Cart from '../models/cart.js'


let increaseCartAmount=async (req,res)=>
{
    let {name,amount,user,stock}=req.body;
    // let {user}=req.cookies;
    console.log(stock+"MANIULATION BRO")
    let {cartItems}=await Cart.findOne({user:user})
    let cartIndex=cartItems.findIndex((items)=>
    {
        return items.name.toLowerCase()===name.toLowerCase()
    })
    cartItems[cartIndex].amount = Math.min(stock, cartItems[cartIndex].amount + amount);
    let increasedOnDB=await Cart.findOneAndUpdate({user:user},{cartItems:cartItems},{new:true})
    console.log("MAHISHMATHI ")
    return res.send(increasedOnDB)
}

export default increaseCartAmount