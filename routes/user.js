import express from 'express'
import signup from '../controllers/signup.js'
import multer from 'multer'
import shortid from 'shortid'
import getAll from '../controllers/getAll.js'
let router=express.Router()



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, shortid.generate() + file.originalname);
  },
})


const upload = multer({ storage: storage });

router.post('/signup',upload.single('profileImage'),signup)
router.get('/getall',getAll)


export default router