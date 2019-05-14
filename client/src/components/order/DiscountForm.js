import React, { Component } from "react";
import { connect } from "react-redux";
import { addDiscount } from "../../actions/orderActions";
import { Button, Form, Input, Header } from "semantic-ui-react";

class DiscountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountName: "",
      error: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = () => {
    this.setState({
      error: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.discountName === "") {
      this.setState({
        error: true
      });
    }
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
    console.log(this.state.errors);

    return (
      <div>
        <Form error onSubmit={this.onSubmit} size="tiny">
          <div>
            <Input
              type="text"
              name="discountName"
              disabled={
                addedItems.length === 0 || discount.length > 0 ? true : false
              }
              value={this.state.discountName}
              error={this.state.error}
              onFocus={this.handleBlur}
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
                {errors != null ? errors : this.state.error}
              </Header>
            )}
          </div>
          <Button
            disabled={
              addedItems.length === 0 || discount.length > 0 ? true : false
            }
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
  discount: state.order.discount,
  addedItems: state.order.addedItems
});

export default connect(
  mapStateToProps,
  { addDiscount }
)(DiscountForm);
