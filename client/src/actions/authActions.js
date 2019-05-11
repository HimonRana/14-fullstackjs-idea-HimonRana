import Axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import Toastr from "toastr";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
export const registerUser = userData => dispatch => {
  Axios.post("/users/register", userData)
    .then(() => {
      const loginUserData = {
        email: userData.email,
        password: userData.password
      };

      Toastr.success(
        "Welcome to BuntShop, You are registered!",
        {
          timeOut: 5000
        },
        { positionClass: "toast-bottom-right" }
      );

      dispatch(loginUser(loginUserData));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get user Token
export const loginUser = userData => dispatch => {
  Axios.post("/users/login", userData)
    .then(res => {
      Toastr.success(
        "You are logged in now!",
        { timeOut: 5000 },
        { positionClass: "toast-bottom-right" }
      );

      // Save token to locaStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set thhe current use to {} which will set IsAuthenticated to false
  dispatch(setCurrentUser({}));

  Toastr.success(
    "You are logged out now!",
    { timeOut: 3000 },
    { positionClass: "toast-bottom-right" }
  );
  // window.location.href = window.location.pathname;
};
