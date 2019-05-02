import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsInCart from "./ProductsInCart";
import DiscountForm from "./DiscountForm";
import { Button, Divider, Header } from "semantic-ui-react";

import "./Order.scss";

class Order extends Component {
  render() {
    const { totalValue } = this.props;

    return (
      <div className="order-container">
        <div className="products-in-order">
          <Header>Shoppingbag</Header>
          <ProductsInCart />
        </div>
        <div className="discount-content">
          <Header>Discount</Header>
          <DiscountForm />
          <Divider />
          <div className="total-value-content">
            <Header as="h4">Total value: </Header>
            <Header as="h4">{totalValue} SEK</Header>
          </div>
          <Button size="small" primary>
            Proceed to checkout
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalValue: state.product.total
});

export default connect(mapStateToProps)(Order);
