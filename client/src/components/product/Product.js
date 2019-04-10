import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../actions/productActions";

import { Grid, Image, Icon, Dropdown, Button } from "semantic-ui-react";
import "./Product.scss";

class Product extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getProductById(this.props.match.params.id);
    }
  };

  render() {
    const { product } = this.props;
    console.log(product);
    const getOptions = [
      // {
      //   key: "42",
      //   text: "42",
      //   value: "42"
      // },
      // {
      //   key: "43",
      //   text: "43",
      //   value: "43"
      // },
      // {
      //   key: "44",
      //   text: "44",
      //   value: "44"
      // },
      // {
      //   key: "45",
      //   text: "45",
      //   value: "45"
      // }
      { key: product.size, text: product.size, value: product.size }
    ];
    return (
      <div className="product-container">
        <div className="product-grid-container">
          <div className="product-img-container" width={10}>
            <Image src={product.productImg} />
          </div>
          <div className="product-info-container" width={6}>
            <h1>{product.title}</h1>
            <h3>{product.price} SEK</h3>
            <br />
            <br />
            <Dropdown
              placeholder="Select size"
              fluid
              selection
              scrolling
              options={getOptions}
            />
            <h3>Category: {product.category}</h3>
            <h3>Description: {product.description}</h3>
            <h5>
              In stock:{" "}
              <Icon
                color={product.available ? "green" : "red"}
                name={product.available ? "check" : "close"}
              />
            </h5>
            <Button color="blue">Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.product
});

export default connect(
  mapStateToProps,
  { getProductById }
)(Product);
