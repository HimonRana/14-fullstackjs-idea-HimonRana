import React, { Component } from "react";
import { connect } from "react-redux";
import { addDiscount } from "../../actions/orderActions";
import { Button, Form, Input, Header } from "semantic-ui-react";

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
    this.setState({
      discountName: ""
    });
  };

  render() {
    const { addedItems, discount, errors } = this.props;

    return (
      <div>
        <Form error onSubmit={this.onSubmit} size="tiny">
          <div>
            <Input
              type="text"
              name="discountName"
              disabled={addedItems.length === 0 ? true : false}
              value={this.state.discountName}
              placeholder="Enter discount code"
              onChange={this.onChange}
            />
            {discount.length > 0 ? (
              addedItems.length === 0 ? (
                ""
              ) : (
                <Header as="h5" color="green">
                  Discount code is used.
                </Header>
              )
            ) : addedItems.length === 0 ? (
              ""
            ) : (
              <Header as="h5" color="red">
                {errors}
              </Header>
            )}
          </div>
          <Button
            disabled={addedItems.length === 0 ? true : false}
            type="submit"
            size="tiny"
            color="blue"
          >
            Add discount
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.error,
  discount: state.product.discount,
  addedItems: state.product.addedItems
});

export default connect(
  mapStateToProps,
  { addDiscount }
)(DiscountForm);
