import Axios from "axios";
import Toastr from "toastr";

import { GET_USERS, EDIT_USER } from "./types";

// GET USERS
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

// EDIT USER
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
    })
    .catch(err =>
      dispatch({
        type: EDIT_USER,
        payload: err.response.data
      })
    );
};
