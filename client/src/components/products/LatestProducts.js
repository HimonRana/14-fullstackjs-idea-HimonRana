import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card, Image, Header } from "semantic-ui-react";
import { getProducts } from "../../actions/productActions";

class LatestProducts extends Component {
  componentDidMount = () => {
    this.props.getProducts();
  };

  render() {
    const { products } = this.props;
    console.log(products);

    let latestProducts =
      products === null ? (
        <p>No products available, contact the support.</p>
      ) : products.length > 0 ? (
        products.slice(0, 8).map(product => (
          <Card key={product._id} className="card-product-latest">
            <Link to={`/product/${product._id}`}>
              <div className="products-img-container">
                <Image alt={product.title} src={product.productImg} />
              </div>
            </Link>
          </Card>
        ))
      ) : (
        <p>No products available</p>
      );

    let categoryHead =
      products === null ? (
        <p>No products available, contact the support.</p>
      ) : products.length > 0 ? (
        products
          .filter(product => product.category === "Head")
          .slice(0, 4)
          .map(product => (
            <Card key={product._id} className="card-product-latest">
              <Link to={`/product/${product._id}`}>
                <div className="products-img-container">
                  <Image alt={product.title} src={product.productImg} />
                </div>
              </Link>
            </Card>
          ))
      ) : (
        <p>No products available</p>
      );

    let categoryTop =
      products === null ? (
        <p>No products available, contact the support.</p>
      ) : products.length > 0 ? (
        products
          .filter(product => product.category === "Top")
          .slice(0, 4)
          .map(product => (
            <Card key={product._id} className="card-product-latest">
              <Link to={`/product/${product._id}`}>
                <div className="products-img-container">
                  <Image alt={product.title} src={product.productImg} />
                </div>
              </Link>
            </Card>
          ))
      ) : (
        <p>No products available</p>
      );

    let categoryBottom =
      products === null ? (
        <p>No products available, contact the support.</p>
      ) : products.length > 0 ? (
        products
          .filter(product => product.category === "Bottom")
          .slice(0, 4)
          .map(product => (
            <Card key={product._id} className="card-product-latest">
              <Link to={`/product/${product._id}`}>
                <div className="products-img-container">
                  <Image alt={product.title} src={product.productImg} />
                </div>
              </Link>
            </Card>
          ))
      ) : (
        <p>No products available</p>
      );

    let categoryShoes =
      products === null ? (
        <p>No products available, contact the support.</p>
      ) : products.length > 0 ? (
        products
          .filter(product => product.category === "Shoes")
          .slice(0, 4)
          .map(product => (
            <Card key={product._id} className="card-product-latest">
              <Link to={`/product/${product._id}`}>
                <div className="products-img-container">
                  <Image alt={product.title} src={product.productImg} />
                </div>
              </Link>
            </Card>
          ))
      ) : (
        <p>No products available</p>
      );

    return (
      <div className="latest-products-container">
        <Header>Latest Products</Header>
        <div className="latest-products-content">{latestProducts}</div>
        <div className="check-more-button">
          <Link to="/products">Check more...</Link>
        </div>
        <Header>Head</Header>
        <div className="latest-products-content">{categoryHead}</div>
        <Header>Top</Header>
        <div className="latest-products-content">{categoryTop}</div>
        <Header>Bottom</Header>
        <div className="latest-products-content">{categoryBottom}</div>
        <Header>Shoes</Header>
        <div className="latest-products-content">{categoryShoes}</div>
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
