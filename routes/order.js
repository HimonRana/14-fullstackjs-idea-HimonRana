const express = require("express");
const router = express.Router();
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

    const newOrder = new Order({
      user: req.user.id,
      orderProducts: req.body.orderProducts,
      discount: req.body.discount,
      totalSum: req.body.totalSum,
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      zip: req.body.zip,
      city: req.body.city,
      telephone: req.body.telephone,
      status: req.body.status
    });

    newOrder
      .save()
      .then(order => res.json(order))
      .catch(err => res.status(404).json({ order: "No order to save" }));
  }
);

module.exports = router;
