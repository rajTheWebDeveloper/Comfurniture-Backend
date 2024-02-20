import express from 'express'
import Cart from '../models/cart.js'


let addToCart=async (req,res)=>
{
   let {name,amount,price,user,stock,productImage}=req.body;
   console.log("MANICURE",stock)
   console.log("DIMPUL",name,amount,price,user)
   let whetherUserHasCart=await Cart.findOne({user});
   if(!whetherUserHasCart)
   {
      let createACartForTheUserAndAddTheFirstProduct=await Cart.create({user:user,cartItems:[{stock:stock,name:"MILAN",amount:amount,price:price,productImage:productImage}]});
      return res.send(createACartForTheUserAndAddTheFirstProduct)
   }
   else
   {
     let {cartItems,user}=whetherUserHasCart;
     let foundIndex=cartItems.findIndex((items)=>
     {
       return items.name.toLowerCase()===name.toLowerCase()
     })
     if(foundIndex!==-1)
     {
         cartItems[foundIndex].amount =
           stock <= Number(cartItems[foundIndex].amount + amount)
             ? stock
             : cartItems[foundIndex].amount + amount;
     }
     else 
     {
       cartItems.push({
         name,
         amount,
         price,
         stock: stock,
         productImage:productImage,
       });
     }
     console.log(cartItems)
     let updatedCartOnDB = await Cart.findOneAndUpdate(
       { user: user },
       { cartItems: cartItems},
       { new: true }
     );
    return res.send(updatedCartOnDB)
   }
   return res.send({msg:"NONE OF ABOVE EXECUTED"})
}


export default addToCart