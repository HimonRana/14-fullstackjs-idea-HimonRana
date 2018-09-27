const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateOrderInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.street = !isEmpty(data.street) ? data.street : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";
  data.city = !isEmpty(data.city) ? data.city : "";

  // Name empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  // Email validate
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Email empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  // Street empty
  if (Validator.isEmpty(data.street)) {
    errors.street = "Street is required";
  }

  // Zip empty
  if (Validator.isEmpty(data.zip)) {
    errors.zip = "Zip is required";
  }

  // City empty
  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
