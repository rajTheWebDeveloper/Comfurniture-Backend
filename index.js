import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import env from 'dotenv'
import connect from './connect.js'
import cookieParser from 'cookie-parser'
import UsersRoutes from './routes/users.js'
import CartRoutes from './routes/cart.js'


let app=express()
app.use(express.json());
app.use(cors())
app.use(cookieParser())


env.config({
  path: "./config/.env",
})


app.use(cookieParser())


app.use('/public',express.static('./uploads'))
app.use('/user',UsersRoutes)
app.use('/cart',CartRoutes)


let PORT=process.env.PORT || 2000

let start=async()=>
{
    await connect()
    app.listen(PORT,()=>
    {
        console.log(`Connected to port ${PORT}`)
    })
}



start()