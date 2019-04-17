import { GET_USERS, EDIT_USER, DELETE_USER } from "../actions/types";

const initialState = {
  users: [],
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
