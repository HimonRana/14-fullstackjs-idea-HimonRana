import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_ADMIN_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

const initialState = {
  products: [],
  product: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_ADMIN_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload
        )
      };
    default:
      return state;
  }
}
