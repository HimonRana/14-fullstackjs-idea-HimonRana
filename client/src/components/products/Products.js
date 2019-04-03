import React, { Component } from "react";
import { connect } from "react-redux";

import ProductItem from "./ProductItem";
import { getProducts } from "../../actions/productActions";

import { Grid } from "semantic-ui-react";
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
    console.log(products);
    let showProducts = products.map((product, index) => (
      <ProductItem key={index} product={product} />
    ));

    return (
      <div className="products-container">
        <Grid>
          <Grid.Row columns={16}>{showProducts}</Grid.Row>
        </Grid>
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
