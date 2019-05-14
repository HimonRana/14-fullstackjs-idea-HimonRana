const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const port = process.env.PORT || 5000;
const users = require("./routes/users");
const products = require("./routes/products");
const admin = require("./routes/admin");
const order = require("./routes/order");
const discount = require("./routes/discount");

require("dotenv").config();

app.io = io;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

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

// Deploy config
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, () => console.log(`Server running on port ${port}`));
