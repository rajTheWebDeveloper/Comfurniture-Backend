import express from 'express'
import Cart from '../models/cart.js'


let removeFromCart=async (req,res)=>
{
    let {user,name}=req.body;
    let {cartItems}=await Cart.findOne({user:user})

    let foundIndex=cartItems.findIndex((items)=>
    {
        return items.name.toLowerCase()===name.toLowerCase()
    })

    
    cartItems.splice(foundIndex,1)
    let removedOnDB=await Cart.findOneAndUpdate({user:user},{
        cartItems:cartItems
    },{new:true})
    return res.send(removedOnDB)
}


export default removeFromCart