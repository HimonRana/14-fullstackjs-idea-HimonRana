import Axios from "axios";
import Toastr from "toastr";

import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_ADMIN_PRODUCTS,
  DELETE_PRODUCT,
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
      Toastr.success(
        "Product is successfully created!",
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

// EDIT PRODUCT -ADMIN-
export const editProduct = (productId, productData) => dispatch => {
  Axios.put(`/admin/edit/product/${productId}`, productData)
    .then(res => {
      dispatch({
        type: EDIT_PRODUCT,
        payload: res.data
      });
      Toastr.success(
        "Product is successfully updated!",
        { timeOut: 5000 },
        { positionClass: "toast-bottom-right" }
      );
    })
    .catch(err =>
      dispatch({
        type: EDIT_PRODUCT,
        payload: err.response.data
      })
    );
};

// DELETE PRODUCT -ADMIN-
export const deleteProduct = id => dispatch => {
  if (window.confirm("Are you sure, you want to delete this Product?")) {
    return Axios.delete(`/admin/delete/product/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id
        });
        Toastr.success(
          "User is successfully deleted!",
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
