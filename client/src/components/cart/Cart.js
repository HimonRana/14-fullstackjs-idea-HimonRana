import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    const { addedItems, totalValue } = this.props;

    return (
      <div>
        <CartItem productsInCart={addedItems} totalValue={totalValue} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.product.addedItems,
    totalValue: state.product.total
  };
};

export default connect(mapStateToProps)(Cart);
