import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Login from "../login/Login";
import Register from "../register/Register";

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="tool_bar">
            <Register />
            <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
