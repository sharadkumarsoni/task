const express=require('express')
const router=express.Router()
const taskController=require('../controllers/task')
router.post("/addtask",taskController.addTask);
router.get("/task",taskController.createTask);

module.exports=router
