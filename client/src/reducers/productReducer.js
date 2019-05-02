import {
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_QUANTITY,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_ADMIN_PRODUCTS,
  EDIT_PRODUCT,
  REMOVE_QUANTITY,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT
} from "../actions/types";

const initialState = {
  products: [],
  product: {},
  addedItems: [],
  total: 0,
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

    case ADD_TO_CART:
      let existedItem = state.addedItems.find(product => {
        return (
          product.id === action.payload.id &&
          product.size === action.payload.size
        );
      });

      // if item already exist in cart
      if (existedItem) {
        existedItem.quantity += 1;
        return {
          ...state,
          total: state.total + action.payload.price
        };
      } else {
        action.payload.quantity = 1;
        let newTotal = state.total + action.payload.price;
        return {
          ...state,
          addedItems: [action.payload, ...state.addedItems],
          total: newTotal
        };
      }

    case ADD_QUANTITY:
      action.payload.quantity += 1;
      return {
        ...state,
        total: state.total + action.payload.price
      };

    case REMOVE_QUANTITY:
      action.payload.quantity -= 1;
      return {
        ...state,
        total: state.total - action.payload.price
      };

    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        addedItems: state.addedItems.filter(product => {
          return product !== action.payload;
        }),
        total: state.total - action.payload.price * action.payload.quantity
      };
    default:
      return state;
  }
}
