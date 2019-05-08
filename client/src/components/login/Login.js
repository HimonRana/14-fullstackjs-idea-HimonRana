import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import Register from "../register/Register";

import {
  Button,
  Header,
  Modal,
  Form,
  Grid,
  Message,
  Icon
} from "semantic-ui-react";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (window.location.pathname === "/order") {
      this.setState({
        modalOpen: nextProps.auth.isOpen
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModalOpen = isOpen => {
    this.setState({
      modalOpen: isOpen
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    
    return (
      <div className="content">
        <Button onClick={this.handleModalOpen} compact basic inverted>
          Login
        </Button>
        <Modal
          basic
          size="small"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
        >
          <Grid textAlign="center" style={{ height: "100%" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Icon
                style={{ position: "absolute", right: "10px" }}
                className="modal-close-icon"
                link
                basic="true"
                name="close"
                onClick={this.handleModalClose}
              />
              <Modal.Content>
                <Header
                  color="blue"
                  content="Log in to your account"
                  textAlign="left"
                />
                {/* TODO: put loading in Form later */}
                <Form error onSubmit={this.onSubmit} size="small">
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail address"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <Message size="mini" error list={[`${errors.email}`]} />
                  )}
                  {errors.password && (
                    <Message size="mini" error list={[`${errors.password}`]} />
                  )}
                  <Button type="submit" primary fluid size="medium">
                    Log in
                  </Button>
                </Form>
                <br />
                <Register />
              </Modal.Content>
            </Grid.Column>
          </Grid>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
