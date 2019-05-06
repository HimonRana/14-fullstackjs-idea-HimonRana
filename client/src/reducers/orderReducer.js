import {
  ADD_SHIPPING_DATA,
  REMOVE_QUANTITY,
  DELETE_PRODUCT_FROM_CART,
  ADD_TO_CART,
  ADD_QUANTITY,
  ADD_DISCOUNT_ORDER,
  ADD_ORDER
} from "../actions/types";

const initialState = {
  orders: [],
  order: {},
  addedItems: [],
  discount: [],
  total: 0,
  shippingData: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case ADD_SHIPPING_DATA:
      return {
        ...state,
        shippingData: action.payload
      };
    // CART
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
      if (state.addedItems.length === 1) {
        state.discount = [];
      }
      return {
        ...state,
        addedItems: state.addedItems.filter(product => {
          return product !== action.payload;
        }),
        total:
          state.total - action.payload.price * action.payload.quantity < 0
            ? 0
            : state.total - action.payload.price * action.payload.quantity
      };

    // DISCOUNT
    case ADD_DISCOUNT_ORDER:
      if (state.discount.length === 0) {
        return {
          ...state,
          total: (action.payload.discountValue / 100) * state.total,
          discount: [action.payload]
        };
      } else {
        return {
          ...state,
          total: state.total
        };
      }
    default:
      return state;
  }
}
