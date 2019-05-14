import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQuantity,
  removeQuantity,
  deleteProductInCart
} from "../../actions/cartActions";

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
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false
    };
  }

  handleOpen = () => {
    this.setState({
      cartOpen: true
    });
  };

  handleOpenPopupTimeOut = () => {
    this.timeout = setTimeout(() => {
      this.setState({ cartOpen: false });
    }, 2500);
  };

  handleClose = () => {
    this.setState({
      cartOpen: false
    });
    clearTimeout(this.timeout);
  };

  handleAddQuantity = productData => {
    this.props.addQuantity(productData);
  };

  handleRemoveQuantity = productData => {
    this.props.removeQuantity(productData);
  };

  handleRemoveFromCart = productData => {
    this.props.deleteProductInCart(productData);
  };

  render() {
    const { productsInCart, totalValue } = this.props;

    let addedItems = (
      <div>
        {productsInCart.length > 0 ? (
          productsInCart.map(productInCart => (
            <Card key={productInCart.id} className="cart-item-card">
              <Card.Content className="cart-item-card-content-img">
                <Image size="tiny" src={productInCart.productImg} />
              </Card.Content>
              <Card.Content className="cart-item-card-content">
                <Card.Description>
                  <strong>{productInCart.title}</strong>
                </Card.Description>
                <Card.Description>{productInCart.price} SEK</Card.Description>
                <Card.Description>Size: {productInCart.size}</Card.Description>
                <Card.Description>
                  Quantity: {productInCart.quantity}
                </Card.Description>
                <div className="cart-item-quantity-buttons">
                  <Button
                    disabled={productInCart.quantity <= 1 ? true : false}
                    onClick={() => {
                      this.handleRemoveQuantity(productInCart);
                    }}
                    size="mini"
                    icon
                  >
                    <Icon name="minus" />
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleAddQuantity(productInCart);
                    }}
                    size="mini"
                    icon
                  >
                    <Icon name="plus" />
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleRemoveFromCart(productInCart);
                    }}
                    size="mini"
                    color="red"
                    icon
                  >
                    <Icon name="close" />
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))
        ) : (
          <p>No products</p>
        )}

        <Divider />
        <div className="cart-total-value-container">
          <Header as="h4">Total Value:</Header>
          <Header as="h4">{totalValue} SEK</Header>
        </div>
        <Button
          color="blue"
          className="cart-checkout-button"
          as={Link}
          to="/order"
          onClick={this.handleClose}
        >
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
                badgeContent={productsInCart.length}
                Style="color: white; margin-right: 1rem;"
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          }
          hideOnScroll={true}
          content={addedItems}
          on="click"
          open={this.state.cartOpen}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    addQuantity,
    removeQuantity,
    deleteProductInCart
  }
)(CartItem);
