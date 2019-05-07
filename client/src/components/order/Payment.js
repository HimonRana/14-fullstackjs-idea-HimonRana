import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Header, Button } from "semantic-ui-react";
import ProductsInCart from "./ProductsInCart";
import StripeButton from "./StripeButton";

class Payment extends Component {
  render() {
    const { total, discount, shippingData } = this.props;
    console.log(this.props);

    const order = {
      orderProducts: this.props.addedItems,
      discount: this.props.discount,
      totalSum: this.props.total,
      name: this.props.shippingData.name,
      email: this.props.shippingData.email,
      street: this.props.shippingData.street,
      zip: this.props.shippingData.zip,
      city: this.props.shippingData.city,
      telephone: this.props.shippingData.telephone
    };

    return (
      <div className="payment-container">
        <div className="shoppingbag-container">
          <Header>Your shoppingbag</Header>
          <Divider />
          <ProductsInCart />
        </div>
        <div className="discount-container">
          <Header>Your discount</Header>
          <Divider />
          {discount.length > 0 ? (
            <div>
              <p>
                <span>Code:</span>
                {"   "}
                {discount[0].name}
              </p>
              <p>
                <span>Percentage:</span>
                {"   "}
                {discount[0].discountValue}%
              </p>
            </div>
          ) : (
            <p>No discount</p>
          )}
        </div>
        <div className="shipping-info-container">
          <Header>Your shipping information</Header>
          <Divider />
          <p>
            <span>Name:</span> {shippingData.name}
          </p>
          <p>
            <span>Email:</span> {shippingData.email}
          </p>
          <p>
            <span>street:</span> {shippingData.street}
          </p>
          <p>
            <span>Zip:</span> {shippingData.zip}
          </p>
          <p>
            <span>City:</span> {shippingData.city}
          </p>
          <p>
            <span>Telephone:</span> {shippingData.telephone}
          </p>
        </div>
        <div className="total-payment-container">
          <Header>Payment</Header>
          <Divider />
          <p>
            <span>Total:</span> {total} SEK
          </p>
          {/* <Button onClick={this.onSubmit} color="olive">
            COMPLETE PURCHASE
          </Button> */}
          <StripeButton order={order} history={this.props.history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discount: state.order.discount,
  shippingData: state.order.shippingData,
  total: state.order.total,
  addedItems: state.order.addedItems
});

export default connect(mapStateToProps)(Payment);
