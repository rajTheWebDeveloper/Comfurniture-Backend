import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import env from 'dotenv'
import connect from './connect.js'
import UserRoutes from './routes/user.js'
import cookieParser from 'cookie-parser'

let app=express()
env.config({
  path: "./config/.env",
});
app.use(express.json())
app.use(cookieParser())
app.use('/public',express.static('./uploads'))
app.use('/user',UserRoutes)




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