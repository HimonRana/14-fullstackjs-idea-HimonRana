import React, { Component } from "react";
import CartItem from "./CartItem";

import { Popup, Card, Image, Button, Icon, Divider } from "semantic-ui-react";
export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartItem />
      </div>
    );
  }
}
