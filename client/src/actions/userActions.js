import Axios from "axios";
import Toastr from "toastr";

import { GET_USERS, EDIT_USER, DELETE_USER, GET_ERRORS } from "./types";

// GET USERS -ADMIN-
export const getUsers = () => dispatch => {
  return Axios.get("/admin/all/users")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USERS,
        payload: null
      })
    );
};

// EDIT USER -ADMIN-
export const editUser = (userId, userData) => dispatch => {
  Axios.put(`/admin/edit/user/${userId}`, userData)
    .then(res => {
      dispatch({
        type: EDIT_USER,
        payload: res.data
      });
      Toastr.success(
        "User is successfully updated!",
        { timeOut: 5000 },
        { positionClass: "toast-bottom-right" }
      );
      // window.location.reload();
    })
    .catch(err =>
      dispatch({
        type: EDIT_USER,
        payload: err.response.data
      })
    );
};

// DELETE USER -ADMIN-
export const deleteUser = id => dispatch => {
  if (window.confirm("Are you sure, you want to delete this User?")) {
    return Axios.delete(`/admin/delete/user/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_USER,
          payload: id
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
