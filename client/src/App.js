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
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminUsers from "./components/admin/Users";
import AdminProducts from "./components/admin/Products";
import AdminOrders from "./components/admin/Orders";

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
            <Route exact path="/admin/dashboard" component={AdminDashboard} />
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
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
