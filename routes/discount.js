const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Discount model
const Discount = require("../models/Discount");

router.post("/", (req, res) => {
  const name = req.body.name;

  Discount.findOne({ name })
    .then(discount => {
      if (!discount) {
        return res.status(404).json({ error: "Discount code is wrong" });
      }
      res.json(discount);
    })
    .catch(err => res.status(400).json({ error: "No discount found" }));
});

module.exports = router;
