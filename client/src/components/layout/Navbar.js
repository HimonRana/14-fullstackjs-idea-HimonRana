import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import Login from "../login/Login";
import Register from "../register/Register";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <AppBar position="static">
          {isAuthenticated ? (
            <Toolbar className="tool_bar">
              <Typography className="logo-name" variant="h5" color="inherit">
                BuntShop
              </Typography>
              <Typography color="inherit">{user.name}</Typography>
              <Typography color="inherit">
                {user.role ? (
                  <Button variant="contained">Dashboard</Button>
                ) : null}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.onLogoutClick}
              >
                Logout
              </Button>
            </Toolbar>
          ) : (
            <Toolbar className="tool_bar">
              <Typography className="logo-name" variant="h5" color="inherit">
                BuntShop
              </Typography>
              <Register />
              <Login />
            </Toolbar>
          )}
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
