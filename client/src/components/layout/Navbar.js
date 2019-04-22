import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import {
  Button,
  Icon,
  Sidebar,
  Menu,
  List,
  Header,
  Image
} from "semantic-ui-react";

import Login from "../login/Login";
import Register from "../register/Register";
import { logoutUser } from "../../actions/authActions";
import Cart from "../cart/Cart";

import "./Layout.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleSidebarOpen = () => {
    this.setState({
      visible: !this.state.visible
    });
    console.log("Open bar if");
  };

  handleSidebarHide = () => {
    this.setState({
      visible: false
    });
    console.log("Hide if");
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { visible } = this.state;

    const navbarStyle = {
      background: "linear-gradient(45deg, #000000 30%, #00528f 90%)",
      color: "white",
      boxShadow: "0 0px 5px 2px rgba(0, 0, 0, .3)",
      position: "fixed",
      top: 0
    };

    return (
      <div>
        <AppBar style={navbarStyle} position="static">
          {isAuthenticated ? (
            <Toolbar className="tool-bar">
              <Typography className="logo-name" variant="h4">
                <Link className="logo" to="/">
                  Buntshop
                </Link>
              </Typography>
              <Cart />

              <Link to="/profile">
                <Typography className="profile-name">{user.name}</Typography>
              </Link>
              <Icon
                className="menu-bar"
                onClick={this.handleSidebarOpen}
                name="bars"
                link
                size="big"
              />
              {/* SIDEBAR */}
              <Sidebar
                className="navbar-sidebar"
                animation="overlay"
                icon="labeled"
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={this.state.visible}
                direction="right"
              >
                <Menu className="navbar-menu" vertical>
                  <Menu.Item as="a">
                    <Header inverted>Home</Header>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Header inverted>Profile</Header>
                  </Menu.Item>
                  {user.role ? (
                    <Menu.Item as="a">
                      <Header inverted>Dashboard</Header>
                    </Menu.Item>
                  ) : null}
                  <Menu.Item as="a">
                    <Header inverted>Category</Header>
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Head
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Top
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Bottom
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Shoes
                  </Menu.Item>
                  <Menu.Item
                    className="logout-button"
                    as="a"
                    onClick={this.onLogoutClick}
                  >
                    <Icon name="log out" size="large" />
                    Logout
                  </Menu.Item>
                </Menu>
              </Sidebar>
              {/* SIDEBAR */}
            </Toolbar>
          ) : (
            <Toolbar className="tool-bar">
              <Typography className="logo-name" variant="h4">
                <Link className="logo" to="/">
                  Buntshop
                </Link>
              </Typography>
              <Cart />
              <Icon
                className="menu-bar"
                onClick={this.handleSidebarOpen}
                name="bars"
                link
                size="big"
              />
              <Sidebar
                className="navbar-sidebar"
                animation="overlay"
                icon="labeled"
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={this.state.visible}
                direction="right"
              >
                <Menu className="navbar-menu" vertical>
                  <Menu.Item as="a">
                    <Header inverted>Home</Header>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Header inverted>Profile</Header>
                  </Menu.Item>
                  {user.role ? (
                    <Menu.Item as="a">
                      <Header inverted>Dashboard</Header>
                    </Menu.Item>
                  ) : null}
                  <Menu.Item as="a">
                    <Header inverted>Category</Header>
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Head
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Top
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Bottom
                  </Menu.Item>
                  <Menu.Item className="category" as="a">
                    Shoes
                  </Menu.Item>
                  <List>
                    <List.Item
                      className=""
                      as="a"
                      onClick={this.handleSidebarHide}
                    >
                      <Register />
                    </List.Item>
                    <List.Item
                      className=""
                      as="a"
                      onClick={this.handleSidebarHide}
                    >
                      <Login />
                    </List.Item>
                  </List>
                </Menu>
              </Sidebar>
              {/* SIDEBAR */}
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
