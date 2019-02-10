import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";

import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./Login.css";

class Login extends Component {
  state = {
    open: false
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button
          color="inherit"
          onClick={this.handleToggle}
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
        >
          Login
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal={false}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <form className="login-form">
                  <MenuItem>
                    <FormControl>
                      <InputLabel htmlFor="component-simple">Email</InputLabel>
                      <Input
                        type="email"
                        id="component-simple"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                  </MenuItem>
                  <br />
                  <MenuItem>
                    <FormControl>
                      <InputLabel htmlFor="component-simple">
                        Password
                      </InputLabel>
                      <Input
                        type="password"
                        id="component-simple"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                  </MenuItem>
                  <Button
                    className="login-btn"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Log in
                  </Button>
                </form>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default Login;
