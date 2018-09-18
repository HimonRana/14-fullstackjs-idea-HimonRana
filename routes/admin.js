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

    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      productImg: req.body.productImg,
      size: req.body.size,
      category: req.body.category,
      available: req.body.available,
      stock: req.body.stock
    });

    newProduct.save().then(product => res.json(product));
  }
);

module.exports = router;
