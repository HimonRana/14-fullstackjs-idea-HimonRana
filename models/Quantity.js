const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuantitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "products"
  },

  quantity: {
    type: Number,
    required: true
  }

});

module.exports = Quantity = mongoose.model("quantities", QuantitySchema);
