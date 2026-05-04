const express=require("express")
const productRouter=express.Router()
const { addProduct, listProducts, removeProduct, singleProduct, updateProduct } = require("../controllers/productController");
const upload = require("../utils/upload");




productRouter.post('/add', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProduct);
productRouter.get("list",listProducts)
productRouter.delete("/remove",removeProduct)
productRouter.get("/:id",singleProduct)
productRouter.put("/:id",updateProduct)


module.exports=productRouter