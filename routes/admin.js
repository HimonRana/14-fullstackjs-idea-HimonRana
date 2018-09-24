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

// @Route   GET admin/all/products/
// @Desc    GET all Products
// @Access  Private
router.get("/all/products", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ products: "No Products found" }));
});

// @Route   PUT admin/edit/product/:id
// @Desc    EDIT Product
// @Access  Private
router.put(
  "/edit/product/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ role: req.user.role })
      .then(user => {
        if (user.role) {
          const newProduct = {};
          newProduct.title = req.body.title;
          newProduct.description = req.body.description;
          newProduct.productImg = req.body.productImg;
          newProduct.price = req.body.price;
          newProduct.size = req.body.size;
          newProduct.category = req.body.category;
          newProduct.available = req.body.available;
          newProduct.stock = req.body.stock;
          // Update
          Product.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
          )
            .then(product => res.json(product))
            .catch(err =>
              res.status(404).json({ upderror: "Could not update product" })
            );
        } else {
          return res.status(200).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ usererror: "No User found and could not update product" })
      );
  }
);

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
            return res.status(401).json("Not Authorized");
          }
        })
        .catch(err => res.status(404).json({ product: "No product found" }));
    });
  }
);

module.exports = router;
