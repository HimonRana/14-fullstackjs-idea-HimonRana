import React, { Component } from "react";
import { connect } from "react-redux";
import { addShippingData } from "../../actions/orderActions";
import { Form, Header, Button } from "semantic-ui-react";

import "./Order.scss";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      telephone: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const shippingData = {
      name: this.state.name,
      email: this.state.email,
      street: this.state.street,
      zip: this.state.zip,
      city: this.state.city,
      telephone: this.state.telephone
    };

    this.props.addShippingData(shippingData, this.props.history);
    this.setState({
      name: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      telephone: ""
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="checkout-container">
        <Header>Shipping information</Header>
        <Form onSubmit={this.onSubmit} error size="small">
          <Form.Input
            required
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
            required
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Form.Input
            required
            fluid
            icon="map marker alternate"
            iconPosition="left"
            placeholder="Street"
            type="text"
            name="street"
            value={this.state.street}
            onChange={this.onChange}
          />
          <Form.Input
            required
            fluid
            icon="street view"
            iconPosition="left"
            placeholder="Zip code"
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.onChange}
          />
          <Form.Input
            required
            fluid
            icon="map outline"
            iconPosition="left"
            placeholder="City"
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.onChange}
          />
          <Form.Input
            required
            fluid
            icon="phone"
            iconPosition="left"
            placeholder="Telephone"
            type="number"
            name="telephone"
            value={this.state.telephone}
            onChange={this.onChange}
          />
          <Button floated="right" primary>
            Proceed to payment
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addShippingData }
)(Checkout);
