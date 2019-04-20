import { ADD_DISCOUNT, GET_DISCOUNTS, DELETE_DISCOUNT } from "../actions/types";

const initialState = {
  discounts: [],
  discount: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISCOUNTS:
      return {
        ...state,
        discounts: action.payload
      };
    case ADD_DISCOUNT:
      return {
        ...state,
        discounts: [action.payload, ...state.discounts]
      };
    case DELETE_DISCOUNT:
      return {
        ...state,
        discounts: state.discounts.filter(
          discount => discount._id !== action.payload
        )
      };
    default:
      return state;
  }
}
