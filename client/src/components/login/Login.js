import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open } = this.state;

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
                    <form className="login-form">
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Email</InputLabel>
                          <Input type="email" onChange={this.handleChange} />
                        </FormControl>
                      </MenuItem>
                      <br />
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Password</InputLabel>
                          <Input type="password" onChange={this.handleChange} />
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
        </ClickAwayListener>
      </div>
    );
  }
}

export default Login;
