import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Card, Image } from "semantic-ui-react";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div Style="margin: 10px;">
        <Card>
          <Link to={`/product/${product._id}`}>
            <Image src={product.productImg} />
          </Link>
          <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <br />
            <Card.Header>
              <Label tag as="a">
                {product.price} SEK
              </Label>
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              In stock:{" "}
              <Icon
                color={product.available ? "green" : "red"}
                name={product.available ? "check" : "close"}
              />
            </a>
            <Card.Meta>
              <span className="date">Added: {product.date}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
