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
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true",
      image: imageUrl,
      date: Date.now()
    });

    await newProduct.save();
   
    res.json({ success: true, message: "Product Added" });
     res.json({})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.listProducts = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.removeProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.singleProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
