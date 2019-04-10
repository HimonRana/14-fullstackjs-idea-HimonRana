import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { Button, Icon } from "semantic-ui-react";

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

    const style = {
      background: "linear-gradient(45deg, #000000 30%, #00528f 90%)",
      color: "white",
      boxShadow: "0 0px 5px 2px rgba(0, 0, 0, .3)"
    };

    return (
      <div>
        <AppBar style={style} position="static">
          {isAuthenticated ? (
            <Toolbar className="tool-bar">
              <Typography className="logo-name" variant="h4">
                <Link className="logo" to="/">
                  Buntshop
                </Link>
              </Typography>
              <Link to="/profile">
                <Typography variant="h7" className="profile-name">
                  {user.name}
                </Typography>
              </Link>
              <Typography color="inherit">
                {user.role ? (
                  <Link to="/dashboard">
                    <Button
                      className="dashboard-button"
                      color="olive"
                      compact
                      inverted
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : null}
              </Typography>
              <Icon
                className="logout-button"
                link
                name="log out"
                size="big"
                onClick={this.onLogoutClick}
              />
            </Toolbar>
          ) : (
            <Toolbar className="tool-bar">
              <Typography className="logo-name" variant="h4">
                <Link className="logo" to="/">
                  Buntshop
                </Link>
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
