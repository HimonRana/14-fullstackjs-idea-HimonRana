import Axios from "axios";
import { ADD_DISCOUNT_ORDER, GET_ERRORS } from "./types";

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
