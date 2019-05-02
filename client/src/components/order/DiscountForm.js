import React, { Component } from "react";
import { connect } from "react-redux";
import { addDiscount } from "../../actions/orderActions";
import { Button, Form, Input } from "semantic-ui-react";

class DiscountForm extends Component {
  state = { discountName: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newDiscount = {
      name: this.state.discountName
    };
    this.props.addDiscount(newDiscount);
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <Form error onSubmit={this.onSubmit} size="tiny">
          <Input
            type="text"
            name="discountName"
            value={this.state.discountName}
            placeholder="Enter discount code"
            onChange={this.onChange}
          />
          <Button type="submit" size="tiny" color="blue">
            Add discount
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.error
});

export default connect(
  mapStateToProps,
  { addDiscount }
)(DiscountForm);
