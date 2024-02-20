import express from "express";
import Cart from "../models/cart.js";

let decreaseCartAmount = async (req, res) => {
  let { name, amount,user,stock} = req.body;
//   let { user } = req.cookies;
  let { cartItems } = await Cart.findOne({ user: user });
  let cartIndex = cartItems.findIndex((items) => {
    return items.name.toLowerCase() === name.toLowerCase();
  })


  if(cartItems[cartIndex].amount===1)
  {
    cartItems.splice(cartIndex,1)
  }
  else 
  {
    cartItems[cartIndex].amount = Number(cartItems[cartIndex].amount) - amount;
  }

  let decreasedOnDB = await Cart.findOneAndUpdate(
    { user: user },
    { cartItems: cartItems },
    { new: true }
  );
  return res.send(decreasedOnDB);
};

export default decreaseCartAmount;
