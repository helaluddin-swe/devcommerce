const ProductModel = require("../models/productModel");

const cloudinary = require("cloudinary").v2;
exports.addProduct =async (req, res) => {
  try {
    const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

    // Use req.files (plural) for multiple fields
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(item => item !== undefined);

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    const newProduct = new ProductModel({
      name,
      description,
      category,
      subcategory,
      price: Number(price),
      sizes,
      bestseller: bestseller === "true",
      image: imageUrl,
      date: Date.now()
    });

    await newProduct.save();
   
    res.json({ success: true, message: "Product Added" });
  

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.listProducts = async (req, res) => {
  try {
    const product=await ProductModel.find({})
    res.json({success:true,product})
   
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.removeProduct = async (req, res) => {
  try {
    
    await ProductModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"Delelted product"})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.singleProduct = async (req, res) => {
  try {
    const {productId}=req.body
    const product=await ProductModel.findById(productId)
    res.json({success:true,product})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct=await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!updatedProduct){
      return res.json({success:false,message:"Product not found"})
    }
    res.json({success:true,updatedProduct})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
