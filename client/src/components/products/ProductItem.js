import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Card, Image } from "semantic-ui-react";

import "./Products.scss";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="grid-product">
        <Card className="card-product">
          <Link to={`/product/${product._id}`}>
            <Image src={product.productImg} />
          </Link>
          <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <h5>{product.price} SEK</h5>
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
