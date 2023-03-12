const express=require('express')
const router=express.Router()
const userController=require('../controllers/user')
router.post("/adduser",userController.createUser);
module.exports=router

