import React, { Component } from "react";
import { Icon, Label, Card } from "semantic-ui-react";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    console.log(this.props);
    return (
      <div Style="margin: 10px;">
        <Card
          image={product.productImg}
          header={product.title}
          meta={
            <div>
              <br />
              <Label tag as="a">
                {product.price} SEK
              </Label>
            </div>
          }
          description={
            <div>
              <br />
              In stock:{" "}
              <Icon
                color={product.available ? "green" : "red"}
                name={product.available ? "check" : "close"}
              />
            </div>
          }
        />
      </div>
    );
  }
}
