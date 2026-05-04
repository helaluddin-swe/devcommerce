const express=require("express")
const { userLogin, userRegister, adminLogin } = require("../controllers/userController")
const userRouter=express.Router()
userRouter.post('/login',userLogin)
userRouter.post('/register',userRegister)
userRouter.post("/admin-login",adminLogin)
module.exports=userRouter