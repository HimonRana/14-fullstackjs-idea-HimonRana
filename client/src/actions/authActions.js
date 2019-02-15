import Axios from "axios";
import { GET_ERRORS } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  Axios.post("/users/register", userData)
    .then(() => {
      history.push("/");
      console.log("You are registered now!");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
