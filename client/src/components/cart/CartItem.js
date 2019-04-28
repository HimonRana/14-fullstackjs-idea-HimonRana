import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Popup,
  Card,
  Image,
  Button,
  Icon,
  Divider,
  Header
} from "semantic-ui-react";
import "./Cart.scss";

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      cartOpen: false,
      productImg: "",
      title: "",
      price: 0,
      size: "",
      quantity: 1
    };
  }

  handleClose = () => {
    this.setState({
      cartOpen: false
    });
  };

  handleOpen = () => {
    this.setState({
      cartOpen: true
    });
  };

  handleAddQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  
  handleRemoveQuantity = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
  };

  removeProduct = () => {};

  render() {
    let productList = (
      <div>
        <Card className="cart-item-card">
          <Card.Content className="cart-item-card-content-img">
            <Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Card.Content>
          <Card.Content className="cart-item-card-content">
            <Card.Description>
              <strong>Title title title title title</strong>
            </Card.Description>
            <Card.Description>669 SEK</Card.Description>
            <Card.Description>Size: L</Card.Description>
            <Card.Description>Quantity: {this.state.quantity}</Card.Description>
            <div className="cart-item-quantity-buttons">
              <Button onClick={this.handleAddQuantity} size="mini" icon>
                <Icon name="plus" />
              </Button>
              <Button
                disabled={this.state.quantity <= 1 ? true : false}
                onClick={this.handleRemoveQuantity}
                size="mini"
                icon
              >
                <Icon name="minus" />
              </Button>
              <Button onClick={this.removeProduct} size="mini" color="red" icon>
                <Icon name="close" />
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Divider />
        <div className="cart-total-value-container">
          <Header as="h4">Total Value:</Header>
          <Header as="h4">699 SEK</Header>
        </div>
        <Button color="blue" className="cart-checkout-button">
          Checkout
        </Button>
      </div>
    );
    return (
      <div>
        <Popup
          trigger={
            <IconButton aria-label="Cart">
              <Badge
                badgeContent={4}
                Style="color: white; margin-right: 1rem;"
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          }
          hideOnScroll={true}
          content={productList}
          on="click"
          open={this.state.isOpen}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
        />
      </div>
    );
  }
}

export default CartItem;
