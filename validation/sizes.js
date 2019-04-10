const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSizesInput(data) {
  let errors = {};

  data.size = !isEmpty(data.size) ? data.size : "";

  if (Validator.isEmpty(data.size)) {
    errors.size = "Size is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
