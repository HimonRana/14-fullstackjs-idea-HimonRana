import Axios from "axios";
import Toastr from "toastr";

import {
  CLEAR_ORDER,
  ADD_DISCOUNT_ORDER,
  CHECK_AUTH_AND_CHECKOUT,
  ADD_SHIPPING_DATA,
  GET_ADMIN_ORDERS,
  EDIT_ADMIN_ORDER,
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

// ADD SHIPPING DATA IN ORDER
export const addShippingData = (shippingData, history) => dispatch => {
  dispatch({
    type: ADD_SHIPPING_DATA,
    payload: shippingData
  });
  history.push("/order/checkout/payment");
};

// ADD ORDER WITH PAYMENT
export const addOrder = (orderData, stripeToken, history) => dispatch => {
  Axios.post("/order/create", {
    order: orderData,
    stripeToken: stripeToken
  })
    .then(() => {
      dispatch({
        type: CLEAR_ORDER,
        payload: []
      });
      history.push("/profile");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// GET ORDER -ADMIN-
export const getOrders = () => dispatch => {
  return Axios.get("/admin/all/orders")
    .then(res =>
      dispatch({
        type: GET_ADMIN_ORDERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ADMIN_ORDERS,
        payload: null
      })
    );
};

// EDIT PRODUCT -ADMIN-
export const editOrder = (orderId, orderData) => dispatch => {
  console.log(orderId, orderData);
  Axios.put(`/admin/edit/order/${orderId}`, orderData)
    .then(res => {
      dispatch({
        type: EDIT_ADMIN_ORDER,
        payload: res.data
      });
      Toastr.success(
        "Order is successfully updated!",
        { timeOut: 5000 },
        { positionClass: "toast-bottom-right" }
      );
    })
    .catch(err =>
      dispatch({
        type: EDIT_ADMIN_ORDER,
        payload: err.response.data
      })
    );
};
