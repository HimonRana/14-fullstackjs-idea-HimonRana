import React, { Component } from "react";
import { connect } from "react-redux";

import { Header, Card, Image } from "semantic-ui-react";
import ProductItem from "./ProductItem";
import { getProducts } from "../../actions/productActions";

import "./Products.scss";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getProducts();
  };

  render() {
    const { products } = this.props;

    return (
      <div className="products-grid-container">
        <Card className="card-product">
          <div className="products-img-container title-container">
            <Header>Latest products</Header>
          </div>
        </Card>
        {products === null ? (
          <p>Products is not available please contact support.</p>
        ) : products.length > 0 ? (
          products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
