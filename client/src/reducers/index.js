import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import discountReducer from "./discountReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  product: productReducer,
  user: userReducer,
  discount: discountReducer,
  order: orderReducer
});
