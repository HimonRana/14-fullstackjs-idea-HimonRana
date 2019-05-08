const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const products = require("./routes/products");
const admin = require("./routes/admin");
const order = require("./routes/order");
const discount = require("./routes/discount");
require("dotenv").config();

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/users", users);
app.use("/products", products);
app.use("/admin", admin);
app.use("/order", order);
app.use("/discount", discount);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
