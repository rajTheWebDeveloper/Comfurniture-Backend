import express from 'express'
import multer from 'multer'
import shortid from 'shortid';
import signInUser from '../controllers/signInUser.js';
import RegisterUser from '../controllers/RegisterUser.js';
let router=express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, shortid.generate() + file.originalname);
  },
});

const upload = multer({ storage: storage });


router.post("/register", upload.single("profileImage"), RegisterUser);
router.post("/signin", upload.any(),signInUser);


export default router