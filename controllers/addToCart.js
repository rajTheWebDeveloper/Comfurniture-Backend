import express from 'express'
import Cart from '../models/cart.js'



let addToCart=async (req,res)=>
{


    // If there is no user create a new user
    let {name,amount,price}=req.body
    let {user}=req.cookies
    let foundUser=await Cart.findOne({user})
    console.log(foundUser)
    if(!foundUser)
    {
        let createdUser=await Cart.create({user,cartItems:[{name,amount,price}]})
        return res.send(createdUser)
    }
    else 
    {
      // If there is same product increase the amount
      let { cartItems } = foundUser;
      let updatedCartItems=cartItems.map((items)=>
      {
        console.log("I am printing ");
         if (items.name.toLowerCase() === name.toLowerCase()) {
           console.log("I am printing 2");
           return { ...items, amount: 9 };
         }
         console.log("I am not printing 3");
         return items;
      })
      return res.send(updatedCartItems)
    //   let updateAmount = await Cart.findOneAndUpdate({ user},);
    }
    
    // If there is different product push it into the product array
    return res.send(req.cookies)
}


export default addToCart