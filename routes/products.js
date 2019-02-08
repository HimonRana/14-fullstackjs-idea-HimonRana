const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Product model
const Product = require("../models/Product");

// Lägg till minst 5 produkter av minst två olika kategorier i databasen.
// En produkt skall ha en beskrivning, bild, kategori, pris, lagerstatus.

// @Route   GET products/all/products
// @Desc    GET all Products
// @Access  Public
router.get("/all/products", (req, res) => {
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
