import React, { Component } from "react";
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

export default class ProductsInCart extends Component {
  render() {
    return (
      <div>
        <Card className="order-item-card">
          <Card.Content className="order-item-card-content-img">
            <Image
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
          </Card.Content>
          <Card.Content className="order-item-card-content">
            <Card.Description>
              <strong>Adidas Ultimate Jeans</strong>
            </Card.Description>
            <Card.Description>3999 SEK</Card.Description>
            <Card.Description>Size: L</Card.Description>
            <Card.Description>Quantity: 3</Card.Description>
            <div className="order-item-quantity-buttons">
              <Button
                //   onClick={() => {
                //     this.handleAddQuantity(productInCart);
                //   }}
                size="mini"
                icon
              >
                <Icon name="plus" />
              </Button>
              <Button
                //   disabled={productInCart.quantity <= 1 ? true : false}
                //   onClick={() => {
                //     this.handleRemoveQuantity(productInCart);
                //   }}
                size="mini"
                icon
              >
                <Icon name="minus" />
              </Button>
              <Button
                //   onClick={() => {
                //     this.handleRemoveFromCart(productInCart);
                //   }}
                size="mini"
                color="red"
                icon
                title="Remove product"
              >
                <Icon name="close" />
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card className="order-item-card">
          <Card.Content className="order-item-card-content-img">
            <Image
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
          </Card.Content>
          <Card.Content className="order-item-card-content">
            <Card.Description>
              <strong>Adidas Ultimate Jeans</strong>
            </Card.Description>
            <Card.Description>3999 SEK</Card.Description>
            <Card.Description>Size: L</Card.Description>
            <Card.Description>Quantity: 3</Card.Description>
            <div className="order-item-quantity-buttons">
              <Button
                //   onClick={() => {
                //     this.handleAddQuantity(productInCart);
                //   }}
                size="mini"
                icon
              >
                <Icon name="plus" />
              </Button>
              <Button
                //   disabled={productInCart.quantity <= 1 ? true : false}
                //   onClick={() => {
                //     this.handleRemoveQuantity(productInCart);
                //   }}
                size="mini"
                icon
              >
                <Icon name="minus" />
              </Button>
              <Button
                //   onClick={() => {
                //     this.handleRemoveFromCart(productInCart);
                //   }}
                size="mini"
                color="red"
                icon
                title="Remove product"
              >
                <Icon name="close" />
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
