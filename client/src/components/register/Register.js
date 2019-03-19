import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { FormControl, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
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
              aria-owns={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
            >
              Register
            </Button>
            <Popper
              className="register-popper"
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
                      className="register-form"
                    >
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Name</InputLabel>
                          <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </FormControl>
                      </MenuItem>
                      {errors.name && (
                        <Typography color="error" className="error-message">
                          {errors.name}
                        </Typography>
                      )}
                      <br />
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
                      <br />
                      <MenuItem>
                        <FormControl>
                          <InputLabel>Confirm password</InputLabel>
                          <Input
                            type="password"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChange}
                          />
                        </FormControl>
                      </MenuItem>
                      {errors.password2 && (
                        <Typography color="error" className="error-message">
                          {errors.password2}
                        </Typography>
                      )}
                      <Button
                        className="register-btn"
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Register now
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
