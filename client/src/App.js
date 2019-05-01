import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

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
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
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
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/admin/dashboard/discount"
              component={AdminDiscount}
            />
            <Route exact path="/admin/dashboard/users" component={AdminUsers} />
            <Route
              exact
              path="/admin/dashboard/products"
              component={AdminProducts}
            />
            <Route
              exact
              path="/admin/dashboard/orders"
              component={AdminOrders}
            />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/order" component={Order} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
