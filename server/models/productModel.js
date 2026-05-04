const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, default: "" },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean, required: true },
  image: { type: Array, required: true }, // Added missing field
  date: { type: Number, default: Date.now },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
