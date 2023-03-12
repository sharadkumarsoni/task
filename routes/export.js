const express=require('express')
const router=express.Router()
const exportController=require('../controllers/export')

router.get("/export", exportController.exportToExcel);

module.exports=router
