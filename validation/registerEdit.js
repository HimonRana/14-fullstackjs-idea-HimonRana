const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterEditInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";


  // Name validate length
  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name must be beetween 2 and 20 characters";
  }

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

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
