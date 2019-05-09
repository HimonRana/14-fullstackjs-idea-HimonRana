import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { Button, Icon, Sidebar, Menu, List, Header } from "semantic-ui-react";

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
  };

  handleSidebarHide = () => {
    this.setState({
      visible: false
    });
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
      <AppBar style={navbarStyle} position="static">
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
          <Button
            disabled={this.state.visible ? true : false}
            className="menu-bar-button"
            onClick={this.handleSidebarOpen}
          >
            {visible ? (
              <Icon name="close" size="big" />
            ) : (
              <Icon name="bars" size="big" />
            )}
          </Button>

          {/* SIDEBAR */}
          <Sidebar
            className="navbar-sidebar"
            animation="overlay"
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical="true"
            visible={this.state.visible}
            direction="right"
          >
            <Menu className="navbar-menu" vertical>
              <Menu.Item as={Link} to="/" onClick={this.handleSidebarHide}>
                <Header inverted>Home</Header>
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/profile"
                onClick={this.handleSidebarHide}
              >
                <Header inverted>Profile</Header>
              </Menu.Item>
              {user.role ? (
                <Menu.Item
                  as={Link}
                  to="/admin/dashboard/discount"
                  onClick={this.handleSidebarHide}
                >
                  <Header inverted>Dashboard</Header>
                </Menu.Item>
              ) : null}
              <Menu.Item as="a" Style="cursor: auto;">
                <Header inverted>Category</Header>
              </Menu.Item>
              <Menu.Item
                className="category"
                as={Link}
                to="/products/category/head"
                onClick={this.handleSidebarHide}
              >
                Head
              </Menu.Item>
              <Menu.Item
                className="category"
                as={Link}
                to="/products/category/top"
                onClick={this.handleSidebarHide}
              >
                Top
              </Menu.Item>
              <Menu.Item
                className="category"
                as={Link}
                to="/products/category/bottom"
                onClick={this.handleSidebarHide}
              >
                Bottom
              </Menu.Item>
              <Menu.Item
                className="category"
                as={Link}
                to="/products/category/shoes"
                onClick={this.handleSidebarHide}
              >
                Shoes
              </Menu.Item>
              {isAuthenticated ? (
                <Menu.Item
                  className="logout-button"
                  as="a"
                  onClick={this.onLogoutClick}
                >
                  <Icon name="log out" size="large" />
                  Logout
                </Menu.Item>
              ) : (
                <List
                  Style="text-align: center;
                  margin-top: 2rem;"
                >
                  <List.Item as="a" onClick={this.handleSidebarHide}>
                    <Register />
                  </List.Item>
                  <List.Item as="a" onClick={this.handleSidebarHide}>
                    <Login />
                  </List.Item>
                </List>
              )}
            </Menu>
          </Sidebar>
          {/* SIDEBAR */}
        </Toolbar>
      </AppBar>
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
