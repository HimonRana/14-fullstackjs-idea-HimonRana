const express = require("express");
const router = express.Router();
const passport = require("passport");
const keys = require("../config/keys_dev");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

// Load User/Order/Product model
const Order = require("../models/Order");
const User = require("../models/User");

// Load Input Validation
const validateOrderInput = require("../validation/order");

// @route   POST order/create
// @dec     Create order
// @access  Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body.order);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newOrder = new Order({
      user: req.user.id,
      userName: req.user.name,
      orderProducts: req.body.order.orderProducts,
      discount: req.body.order.discount,
      totalSum: req.body.order.totalSum,
      name: req.body.order.name,
      email: req.body.order.email,
      street: req.body.order.street,
      zip: req.body.order.zip,
      city: req.body.order.city,
      telephone: req.body.order.telephone,
      status: req.body.order.status
    });

    User.findById(req.user.id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ user: "user not found" });
        }
        user.orders.push(newOrder);
        user.save();
      })
      .catch(err => res.status(404).json({ user: "No user found", err: err }));

    newOrder
      .save()
      .then(order => res.json(order))
      .catch(err =>
        res.status(404).json({ order: "No order to save", err: err })
      );

    const amount = newOrder.totalSum * 100;

    stripe.customers
      .create({
        email: req.body.stripeToken.email,
        source: req.body.stripeToken.id
      })
      .then(customer => {
        stripe.charges.create({
          amount,
          description: "BuntShop",
          currency: "sek",
          customer: customer.id
        });
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
