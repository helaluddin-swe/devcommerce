const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

// 1. Load environment variables FIRST
dotenv.config(); 

const connectDB = require("./config/db.js");
const connectCloudinary = require("./utils/cloudinary.js");
const userRouter = require("./routes/userRoutes.js");
const productRouter = require("./routes/productRoutes.js");

// 2. Initialize DB connections
connectDB();
connectCloudinary();

const app = express();

// 3. Global Middleware
app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

// 4. Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get('/', (req, res) => {
  res.send("Api is running");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});