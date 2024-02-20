import express from 'express'
import multer from 'multer'
import shortid from 'shortid'
import addToCart from '../controllers/addToCart.js'
import validateUser from '../controllers/validateUser.js'
import increaseCartAmount from '../controllers/increaseCartAmount.js'
import decreaseCartAmount from '../controllers/decreaseCartAmount.js'
import getCartItems from '../controllers/getCartItems.js'
import removeFromCart from '../controllers/removeFromCart.js'
let router=express.Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate()+file.originalname);
  },
})

const upload = multer({ storage: storage });

router.post('/addtocart',validateUser,upload.single('productImage'),addToCart)
router.post('/increase',increaseCartAmount)
router.post('/decrease',decreaseCartAmount)
router.post('/getcartitems',getCartItems)
router.post('/removefromcart',removeFromCart)

export default router