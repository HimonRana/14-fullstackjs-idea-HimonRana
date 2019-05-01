import React, { Component } from "react";
import ProductsInCart from "./ProductsInCart";
import DiscountForm from "./DiscountForm";
import {
  Card,
  Icon,
  Image,
  Button,
  Divider,
  Header,
  Form,
  Input
} from "semantic-ui-react";

import "./Order.scss";
import OrderStep from "./OrderStep";

class Order extends Component {
  render() {
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
              <Header as="h4">7998 SEK</Header>
            </div>
            <Button size="small" primary>
              Proceed to checkout
            </Button>
          </div>
        </div>
    );
  }
}

export default Order;
