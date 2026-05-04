const express=require("express")
const cors=require("cors")
const dotenv=require('dotenv')
const connectDB = require("./config/db.js")
const connectCloudinary = require("./utils/cloudinary.js")
const userRouter = require("./routes/userRoutes.js")
dotenv.config()
connectDB()
connectCloudinary()

// config file
const app=express()
const PORT=process.env.PORT || 5001

// third party
app.use(cors())


// middleware
app.use(express.json())


// route endpoint
app.use("/api/user",userRouter)
app.get('/',(req,res)=>{
res.send("Api is running")
})
app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})