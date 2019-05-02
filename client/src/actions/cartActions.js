// import Axios from "axios";
// import Toastr from "toastr";

import {
  ADD_TO_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  DELETE_PRODUCT_FROM_CART
} from "./types";

// ADD PRODUCT TO CART
export const addToCart = productData => dispatch => {
  return dispatch({
    type: ADD_TO_CART,
    payload: productData
  });
};

// ADD QUANTITY TO PRODUCT
export const addQuantity = productData => dispatch => {
  return dispatch({
    type: ADD_QUANTITY,
    payload: productData
  });
};

// REMOVE QUANTITY TO PRODUCT
export const removeQuantity = productData => dispatch => {
  return dispatch({
    type: REMOVE_QUANTITY,
    payload: productData
  });
};

// DELETE PRODUCT FROM CART
export const deleteProductInCart = productData => dispatch => {
  return dispatch({
    type: DELETE_PRODUCT_FROM_CART,
    payload: productData
  });
};
