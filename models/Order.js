const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: Schema.Types.Object,
    ref: "users"
  },

  userName: {
    type: String
  },

  orderProducts: [
    {
      title: {
        type: String,
        required: true
      },

      productImg: {
        type: String,
        required: true
      },

      quantity: {
        type: Number,
        required: true
      },

      size: {
        type: String,
        required: true
      },

      price: {
        type: Number,
        required: true
      }
    }
  ],

  discount: [
    {
      discountName: {
        type: String
      },

      discountValue: {
        type: Number
      }
    }
  ],

  totalSum: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  street: {
    type: String,
    required: true
  },

  zip: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  telephone: {
    type: String
  },

  status: {
    type: String,
    default: "Processing"
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("orders", OrderSchema);
