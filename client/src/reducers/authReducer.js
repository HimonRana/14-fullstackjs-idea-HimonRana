import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, CHECK_AUTH_AND_CHECKOUT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case CHECK_AUTH_AND_CHECKOUT:
      if (!state.isAuthenticated) {
        return {
          ...state,
          isOpen: true
        };
      }
      break;
    default:
      return state;
  }
}
