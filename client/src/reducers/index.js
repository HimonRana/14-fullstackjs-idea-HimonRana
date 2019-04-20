import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import discountReducer from "./discountReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  product: productReducer,
  user: userReducer,
  discount: discountReducer
});
