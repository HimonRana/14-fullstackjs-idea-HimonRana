import Axios from "axios";
import {
  ADD_DISCOUNT_ORDER,
  CHECK_AUTH_AND_CHECKOUT,
  GET_ERRORS
} from "./types";

// ADD DISCOUNT IN ORDER
export const addDiscount = discountData => dispatch => {
  Axios.post("/discount", discountData)
    .then(res => {
      dispatch({
        type: ADD_DISCOUNT_ORDER,
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

// CHECK IF THERE IS A USER AND IF THERE IS CHECKOUT OR ELSE LOGIN TO CHECKOUT
export const loginAndCheckout = (isAuthenticated, history) => dispatch => {
  if (isAuthenticated) {
    history.push("/order/checkout");
  } else {
    return dispatch({
      type: CHECK_AUTH_AND_CHECKOUT,
      payload: isAuthenticated
    });
  }
};
