const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProductInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.productImg = !isEmpty(data.productImg) ? data.productImg : "";
  data.size = !isEmpty(data.size) ? data.size : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.available = !isEmpty(data.available) ? data.available : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  // Title empty
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }
  // Image empty
  if (Validator.isEmpty(data.productImg)) {
    errors.productImg = "Image is required";
  }
  // Image link
  // FIXME: this validation needs repairing
  // if (Validator.isURL(data.productImg)) {
  //   errors.productImg = "Image is not a link";
  // }
  // Size empty
  if (Validator.isEmpty(data.size)) {
    errors.size = "Size is required";
  }
  // Category empty
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }
  // Available empty
  if (Validator.isEmpty(data.available)) {
    errors.available = "Available is required";
  }
  // Stock empty
  if (Validator.isEmpty(data.stock)) {
    errors.stock = "Stock is required";
  }
  // Price empty
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
