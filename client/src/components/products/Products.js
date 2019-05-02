import React, { Component } from "react";
import { connect } from "react-redux";

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
    let showProducts = products.map(product => (
      <ProductItem key={product._id} product={product} />
    ));

    return <div className="products-grid-container">{showProducts}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
