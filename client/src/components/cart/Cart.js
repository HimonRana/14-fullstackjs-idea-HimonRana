import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Cart extends Component {
  render() {
    return (
      <div>
        <IconButton aria-label="Cart">
          <Badge
            badgeContent={4}
            Style="color: white; margin-right: 1rem;"
            color="error"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
    );
  }
}

export default Cart;
