const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  street: {
    type: String,
    required: true
  },

  zip: {
    type: Number,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  telephone: {
    type: Boolean,
    required: true
  }


});

module.exports = Order = mongoose.model("orders", OrderSchema);
