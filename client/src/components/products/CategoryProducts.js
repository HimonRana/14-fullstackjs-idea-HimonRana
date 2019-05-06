import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { Card, Header } from "semantic-ui-react";
import ProductItem from "./ProductItem";

import "./Products.scss";

class CategoryProducts extends Component {
  componentDidMount = () => {
    this.props.getProducts();
  };

  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  render() {
    const { products } = this.props;
    console.log(this.props);

    return (
      <div className="products-grid-container">
        <Card className="card-product">
          <div className="products-img-container title-container">
            <Header>
              {this.capitalizeFirstLetter(this.props.match.params.category)}
            </Header>
          </div>
        </Card>
        {products === null ? (
          <p>Products is not available please contact support.</p>
        ) : products.length > 0 ? (
          products
            .filter(
              product =>
                product.category ===
                this.capitalizeFirstLetter(this.props.match.params.category)
            )
            .map(product => <ProductItem key={product._id} product={product} />)
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
)(CategoryProducts);
