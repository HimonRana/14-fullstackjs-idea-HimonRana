import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { FormControl, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    const { open } = this.state;
    const { errors } = this.state;

    return (
      <div className="container">
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <Button
              color="inherit"
              onClick={this.handleToggle}
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={open ? "menu-list-grow" : null}
              aria-haspopup="true"
            >
              Login
            </Button>
            <Popper
              className="login-popper"
              open={open}
              anchorEl={this.anchorEl}
              transition
              placement={"bottom-start"}
              disablePortal={true}
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
                    <form
                      noValidate
                      onSubmit={this.onSubmit}
                      className="login-form"
                    >
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Email</InputLabel>
                          <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                        </FormControl>
                      </MenuItem>
                      {errors.email && (
                        <Typography color="error" className="error-message">
                          {errors.email}
                        </Typography>
                      )}
                      <br />
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Password</InputLabel>
                          <Input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </FormControl>
                      </MenuItem>
                      {errors.password && (
                        <Typography color="error" className="error-message">
                          {errors.password}
                        </Typography>
                      )}
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
        </ClickAwayListener>
      </div>
    );
  }
}

export default Login;
