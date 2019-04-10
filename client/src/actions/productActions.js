import Axios from "axios";

import { GET_PRODUCTS, GET_PRODUCT } from "./types";

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
