const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuantitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = Quantity = mongoose.model("INSERT", QuantitySchema);
