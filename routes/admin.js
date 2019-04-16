const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Product model
const Product = require("../models/Product");
// Load User model
const User = require("../models/User");

// Validation
const validateProductInput = require("../validation/product");
const validateRegisterEditInput = require("../validation/registerEdit");
const validateOrderInput = require("../validation/order");
const validateSizesInput = require("../validation/sizes");

// @Route   GET admin/all/products/
// @Desc    GET all Products
// @Access  Private
router.get("/all/products", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ products: "No Products found" }));
});

// @route   POST admin/create/product
// @dec     Create Product as Admin
// @access  Private
router.post(
  "/create/product",
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
            // size: req.body.size,
            category: req.body.category,
            available: req.body.available,
            stock: req.body.stock
          });

          newProduct.save().then(product => res.json(product));
        } else {
          return res.status(401).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ usererror: "No User found and could not create product" })
      );
  }
);

// @route   POST admin/add/product/size
// @dec     Add Product-size as Admin
// @access  Private
router.post(
  "/add/product/size/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSizesInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ role: req.user.role })
      .then(user => {
        if (user.role) {
          Product.findById(req.params.id).then(product => {
            const newSize = {
              size: req.body.size
            };

            // Add to size array
            product.sizes.push(newSize);

            product.save().then(product => res.json(product));
          });
        } else {
          return res.status(401).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ usererror: "No User found and could not add size" })
      );
  }
);

// @Route   PUT admin/edit/product/:id
// @Desc    EDIT Product
// @Access  Private
router.put(
  "/edit/product/:id",
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
          const newProduct = {};
          newProduct.title = req.body.title;
          newProduct.description = req.body.description;
          newProduct.productImg = req.body.productImg;
          newProduct.price = req.body.price;
          // newProduct.size = req.body.size;
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
          return res.status(401).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ usererror: "No User found and could not update product" })
      );
  }
);

// @Route   DELETE admin/delete/product/:id
// @Desc    Delete Product
// @Access  Private
router.delete(
  "/delete/product/:id",
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
                res.json({ message: "Product is successfully deleted" })
              );
          } else {
            return res.status(401).json("Not Authorized");
          }
        })
        .catch(err => res.status(404).json({ message: "No product found" }));
    });
  }
);

// @Route   GET admin/all/users
// @Desc    Get all Users
// @Access  Private
router.get(
  "/all/users",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role) {
      User.find({}, { password: 0 })
        .sort({ date: -1 })
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: "No Users found" }));
    } else {
      return res.status(401).json({ error: "Not Authorized" });
    }
  }
);

// @Route   PUT admin/edit/user/:id
// @Desc    Edit all Users
// @Access  Private
router.put(
  "/edit/user/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRegisterEditInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ role: req.user.role })
      .then(user => {
        if (user.role) {
          const updateUser = {};
          updateUser.role = req.body.role;
          updateUser.name = req.body.name;
          updateUser.email = req.body.email;
          // Update
          User.findByIdAndUpdate(
            req.params.id,
            { $set: updateUser },
            { new: true }
          )
            .then(user => res.json(user))
            .catch(err =>
              res.status(404).json({ error: "Could not update User" })
            );
        } else {
          return res.status(401).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ error: "No User found and could not update User" })
      );
  }
);

// @Route   DELETE admin/delete/user/:id
// @Desc    Delete user
// @Access  Private
router.delete(
  "/delete/user/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if user is Admin
    if (req.user.role) {
      User.findById(req.params.id)
        .then(user => {
          user
            .remove()
            .then(() => res.json({ message: "User is successfully deleted" }));
        })
        .catch(err => res.status(404).json({ message: "No user found" }));
    } else {
      return res.status(401).json("Not Authorized");
    }
  }
);

// @Route   GET admin/all/orders/
// @Desc    GET all Orders
// @Access  Private
router.get(
  "/all/orders",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role) {
      Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json({ orders: "No Orders found" }));
    } else {
      return res.status(401).json({ error: "Not Authorized" });
    }
  }
);

// @Route   PUT admin/edit/order/:id
// @Desc    Edit all Order
// @Access  Private
router.put(
  "/edit/order/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ role: req.user.role })
      .then(user => {
        if (user.role) {
          const newOrder = {};
          newOrder.totalSum = req.body.totalSum;
          newOrder.name = req.body.name;
          newOrder.email = req.body.email;
          newOrder.street = req.body.street;
          newOrder.zip = req.body.zip;
          newOrder.city = req.body.city;
          newOrder.telephone = req.body.telephone;
          newOrder.status = req.body.status;

          // Update
          Order.findByIdAndUpdate(
            req.params.id,
            { $set: newOrder },
            { new: true }
          )
            .then(order => res.json(order))
            .catch(err =>
              res.status(404).json({ error: "Could not update Order" })
            );
        } else {
          return res.status(401).json({ NoAthorization: "Not Authorized" });
        }
      })
      .catch(err =>
        res
          .status(404)
          .json({ error: "No Order found and could not update Order" })
      );
  }
);

// @Route   DELETE admin/delete/order/:id
// @Desc    Delete Order
// @Access  Private
router.delete(
  "/delete/order/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if user is Admin
    if (req.user.role) {
      Order.findById(req.params.id)
        .then(order => {
          order
            .remove()
            .then(() => res.json({ message: "User is successfully deleted" }));
        })
        .catch(err => res.status(404).json({ message: "No user found" }));
    } else {
      return res.status(401).json("Not Authorized");
    }
  }
);

module.exports = router;
