import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  images: [String], // Will be an array of URLs
  stock: { type: Number },
})

const Product = mongoose.model('Product', userSchema)
export default Product