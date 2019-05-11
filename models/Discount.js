const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  order: {
    type: Schema.Types.Object,
    ref: "orders"
  },

  name: {
    type: String,
    required: true
  },

  discountValue: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Discount = mongoose.model("discounts", DiscountSchema);
