const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "products"
  },

  quantity: {
    type: Schema.Types.ObjectId,
    ref: "quantities"
  },

  address: {
    type: Stringgit,
    required: true
  },

  zip: {
    type: Number,
    required: true
  },

  city: {
    type: String,
    required: true
  }


});

module.exports = Order = mongoose.model("orders", OrderSchema);
