import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Product from "./components/product/Product";
import Products from "./components/products/Products";
import Order from "./components/order/Order";
import AdminDiscount from "./components/admin/discounts/AdminDiscount";
import AdminUsers from "./components/admin/users/Users";
import AdminProducts from "./components/admin/products/Products";
import AdminOrders from "./components/admin/orders/Orders";
import CategoryProducts from "./components/products/CategoryProducts";
import Checkout from "./components/order/Checkout";
import Payment from "./components/order/Payment";
import Profile from "./components/profile/Profile";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

// Check for Token
if (localStorage.jwtToken) {
  // Set auth Token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/product/:id" component={Product} />
              <Route exact path="/order" component={Order} />
              <Route
                exact
                path="/products/category/:category"
                component={CategoryProducts}
              />
              <PrivateRoute
                exact
                path="/admin/dashboard/discount"
                component={AdminDiscount}
              />
              <PrivateRoute
                exact
                path="/admin/dashboard/users"
                component={AdminUsers}
              />
              <PrivateRoute
                exact
                path="/admin/dashboard/products"
                component={AdminProducts}
              />
              <PrivateRoute
                exact
                path="/admin/dashboard/orders"
                component={AdminOrders}
              />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/order/checkout" component={Checkout} />
              <PrivateRoute
                exact
                path="/order/checkout/payment"
                component={Payment}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
