import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="tool_bar">
            <Button color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
