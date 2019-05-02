import Axios from "axios";
import Toastr from "toastr";

import {
  GET_DISCOUNTS,
  ADD_DISCOUNT,
  DELETE_DISCOUNT,
  GET_ERRORS
} from "./types";

// GET DISCOUNTS -ADMIN-
export const getDiscounts = () => dispatch => {
  return Axios.get("/admin/all/discounts")
    .then(res =>
      dispatch({
        type: GET_DISCOUNTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DISCOUNTS,
        payload: null
      })
    );
};

// POST DISCOUNT -ADMIN-
export const createDiscount = discountData => dispatch => {
  Axios.post("/admin/create/discount", discountData)
    .then(res => {
      dispatch({
        type: ADD_DISCOUNT,
        payload: res.data
      });
      Toastr.success(
        "Discount is successfully created!",
        { timeOut: 5000 },
        { positionClass: "toast-bottom-right" }
      );
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// DELETE DISCOUNT -ADMIN-
export const deleteDiscount = id => dispatch => {
  if (window.confirm("Are you sure, you want to delete this discount?")) {
    return Axios.delete(`/admin/delete/discount/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_DISCOUNT,
          payload: id
        });
        Toastr.success(
          "Discount is successfully deleted!",
          { timeOut: 5000 },
          { positionClass: "toast-bottom-right" }
        );
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
