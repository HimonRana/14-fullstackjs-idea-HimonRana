const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load User/Order/Product model
const Order = require("../models/Order");

// Load Input Validation
const validateOrderInput = require("../validation/order");

// @route   POST order/create
// @dec     Create order
// @access  Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    // get cookie (OrderRows)
    // Get product_id and quantity from cookie
    myCookie = [
      {
        productTitle: "Nike",
        quantity: 1,
        size: 42,
        price: 300
      },
      {
        productTitle: "Adidas",
        quantity: 2,
        size: 42,
        price: 200
      }
    ];

    let totalSum = 0;

    for (let i = 0; i < myCookie.length; i++) {
      totalSum += myCookie[i].quantity * myCookie[i].price;
    }

    const newOrder = new Order({
      user: req.user.id,
      orderProducts: myCookie,
      totalSum: totalSum,
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      zip: req.body.zip,
      city: req.body.city,
      telephone: req.body.telephone
    });

    newOrder
      .save()
      .then(order => res.json(order))
      .catch(err => res.status(404).json({ order: "No order to save" }));
  }
);

module.exports = router;
