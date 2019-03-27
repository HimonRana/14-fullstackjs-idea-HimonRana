import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Grid,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

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

  handleModalOpening = () => {
    this.setState({
      open: true
    });
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
    const { errors } = this.state;

    return (
      <div>
        <Modal
          trigger={
            <Button onClick={this.handleModalOpening} compact basic inverted>
              Register
            </Button>
          }
          basic
          size="small"
        >
          <Grid textAlign="center" style={{ height: "100%" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Modal.Content>
                <Header color="blue" content="Register" textAlign="left" />
                <Form error size="small">
                  {/* <Segment stacked> */}
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm password"
                    type="password"
                  />
                  <Message error content="You can only sign up for an account once with a given e-mail address." />
                  <Button primary fluid size="medium">
                    Login
                  </Button>
                  {/* </Segment> */}
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
