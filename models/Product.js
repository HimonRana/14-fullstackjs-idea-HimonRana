const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  quantity: {
    type: Schema.Types.ObjectId,
    ref: "quantities"
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  productImg: {
    type: String,
    required: true
  },

  price: {
    type: String
  },

  sizes: [
    {
      size: {
        type: String,
        required: true
      }
    }
  ],

  category: {
    type: String,
    required: true
  },

  available: {
    type: Boolean,
    required: true
  },

  stock: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
