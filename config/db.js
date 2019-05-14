const mongoose = require("mongoose");
const db = require("./keys_dev").MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
