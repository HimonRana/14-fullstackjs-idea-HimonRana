import Axios from "axios";

import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_ADMIN_PRODUCTS,
  GET_ERRORS
} from "./types";

// GET PRODUCTS
export const getProducts = () => dispatch => {
  return Axios.get("/products/all")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      })
    );
};

// GET PRODUCT BY ID
export const getProductById = id => dispatch => {
  Axios.get(`/products/product/${id}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCT,
        payload: err.response.data
      })
    );
};

// GET PRODUCTS -ADMIN-
export const getAdminProducts = () => dispatch => {
  return Axios.get("/admin/all/products")
    .then(res =>
      dispatch({
        type: GET_ADMIN_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ADMIN_PRODUCTS,
        payload: null
      })
    );
};

// POST PRODUCT -ADMIN-
export const createProduct = productData => dispatch => {
  console.log(productData);
  Axios.post("/admin/create/product", productData)
    .then(res => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
