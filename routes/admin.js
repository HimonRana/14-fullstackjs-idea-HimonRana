const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Product model
const Product = require("../models/Product");

// Validation
const validateProductInput = require("../validation/product");

// @route   POST admin/products
// @dec     Create Product as Admin
// @access  Private
router.post(
  "/createproduct",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ role: req.user.role })
      .then(user => {
        if (user.role) {
          const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            productImg: req.body.productImg,
            price: req.body.price,
            size: req.body.size,
            category: req.body.category,
            available: req.body.available,
            stock: req.body.stock
          });

          newProduct.save().then(product => res.json(product));
        } else {
          return res.status(400).json("Not Authorized");
        }
      })
      .catch(err => console.log(err + " You are not Admin"));
  }
);

// @Route   DELETE admin/delete/:user_id
// @Desc    Delete User and Profile
// @Access  Private

// @Route   DELETE admin/deleteproduct/:id
// @Desc    Delete Product
// @Access  Private
router.delete(
  "/deleteproduct/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ role: req.user.role }).then(user => {
      Product.findById(req.params.id)
        .then(product => {
          // Check if user is Admin
          if (user.role) {
            product
              .remove()
              .then(() =>
                res.json({ product: "Product is successfully deleted" })
              );
          } else {
            return res.status(401).json('Not Authorized')
          }
        })
        .catch(err => res.status(404).json({ product: "No product found" }));
    })
  }
);

module.exports = router;
