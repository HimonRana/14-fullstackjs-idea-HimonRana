import Axios from "axios";

import { GET_PRODUCTS } from "./types";

// GET PRODUCTS
export const getProducts = () => dispatch => {
  return Axios.get("/products/all/products")
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
