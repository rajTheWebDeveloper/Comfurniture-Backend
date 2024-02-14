import express from 'express'
import addToCart from '../controllers/addToCart.js'
import validateUser from '../controllers/validateUser.js'
let router=express.Router()


router.post('/addtocart',validateUser,addToCart)


export default router