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
              <Button color="inherit" onClick={this.onLogoutClick}>
                Logout
              </Button>
              <Typography color="inherit">{user.name}</Typography>
            </Toolbar>
          ) : (
            <Toolbar className="tool_bar">
              <Register />
              <Login />
            </Toolbar>
          )}
        </AppBar>
      </div>
    );
  }
}

Navbar.PropTypes = {
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
