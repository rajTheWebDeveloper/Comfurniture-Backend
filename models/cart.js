import mongoose from "mongoose";


let cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cartItems:[
        {
            name:{
                type:String
            },
            amount:{
                type:Number
            },
            price:{
                type:Number
            }
        }
    ]
})


export default mongoose.model('Cart',cartSchema)