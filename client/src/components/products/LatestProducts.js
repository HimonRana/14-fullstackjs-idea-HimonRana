import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card, Image, Header } from "semantic-ui-react";
import { getProducts } from "../../actions/productActions";
import ProductItem from "./ProductItem";

class LatestProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getProducts();
  };

  render() {
    const { products } = this.props;
    console.log(products);

    let latestProducts = products.slice(0, 9).map(product => (
      <Card className="card-product-latest">
        <Link to={`/product/${product._id}`}>
          <div className="products-img-container">
            <Image alt={product.title} src={product.productImg} />
          </div>
        </Link>
      </Card>
    ));

    return (
      <div className="latest-products-container">
        <Header>Latest Products</Header>
        <div className="latest-products-content">{latestProducts}</div>
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
)(LatestProducts);
