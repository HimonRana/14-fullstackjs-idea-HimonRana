import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

import {
  Button,
  Header,
  Modal,
  Form,
  Grid,
  Message,
  Icon
} from "semantic-ui-react";

import "./Register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModalOpen = () => {
    this.setState({
      modalOpen: true
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false
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
    const { errors } = this.state;

    return (
      <div>
        <Button onClick={this.handleModalOpen} compact basic inverted>
          Register
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
                basic
                name="close"
                onClick={this.handleModalClose}
              />
              <Modal.Content>
                <Header
                  color="blue"
                  content="Register a new account here"
                  textAlign="left"
                />
                <Form error onSubmit={this.onSubmit} size="small">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
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
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm password"
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <Message size="mini" error list={[`${errors.name}`]} />
                  )}
                  {errors.email && (
                    <Message size="mini" error list={[`${errors.email}`]} />
                  )}
                  {errors.password && (
                    <Message size="mini" error list={[`${errors.password}`]} />
                  )}
                  {errors.password2 && (
                    <Message size="mini" error list={[`${errors.password2}`]} />
                  )}
                  <Button type="submit" primary fluid size="medium">
                    Register
                  </Button>
                </Form>
              </Modal.Content>
            </Grid.Column>
          </Grid>
        </Modal>
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
