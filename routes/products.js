const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Product model
const Product = require("../models/Product");

// @Route   GET products/all/products
// @Desc    GET all Products
// @Access  Public
router.get("/all", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ products: "No Products found" }));
});

// @Route   GET products/product/:id
// @Desc    GET Product
// @Access  Public
router.get("/product/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err =>
      res.status(404).json({ product: "No Product found", err: err })
    );
});

module.exports = router;
