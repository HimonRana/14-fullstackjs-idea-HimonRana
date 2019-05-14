import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  deleteProductInCart
} from "../../actions/cartActions";
import { Card, Icon, Image, Button } from "semantic-ui-react";

class ProductsInCart extends Component {
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
    const { addedItems } = this.props;

    return (
      <div>
        {addedItems.length > 0 ? (
          addedItems.map(product => (
            <Card key={product.id} className="order-item-card">
              <Card.Content className="order-item-card-content-img">
                <Image size="small" src={product.productImg} />
              </Card.Content>
              <Card.Content className="order-item-card-content">
                <Card.Description>
                  <strong>{product.title}</strong>
                </Card.Description>
                <Card.Description>{product.price} SEK</Card.Description>
                <Card.Description>Size: {product.size}</Card.Description>
                <Card.Description>
                  Quantity: {product.quantity}
                </Card.Description>
                <div className="order-item-quantity-buttons">
                  <Button
                    disabled={product.quantity <= 1 ? true : false}
                    onClick={() => {
                      this.handleRemoveQuantity(product);
                    }}
                    size="mini"
                    icon
                  >
                    <Icon name="minus" />
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleAddQuantity(product);
                    }}
                    size="mini"
                    icon
                  >
                    <Icon name="plus" />
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleRemoveFromCart(product);
                    }}
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
          ))
        ) : (
          <p>No products</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedItems: state.order.addedItems,
  totalValue: state.order.total
});

export default connect(
  mapStateToProps,
  {
    addQuantity,
    removeQuantity,
    deleteProductInCart
  }
)(ProductsInCart);
