import React, { Component } from "react";
import { connect } from "react-redux";
import { getAdminProducts } from "../../../actions/productActions";

import { Header } from "semantic-ui-react";
import AdminNavbar from "../AdminNavbar";

import "../Admin.scss";
import CreateProducts from "./CreateProducts";
import ProductEdit from "./ProductEdit";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount = () => {
    this.props.getAdminProducts();
    if (window.location.pathname === "/admin/dashboard/products") {
      this.setState({
        active: true
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { active } = this.state;
    const { products } = this.props;

    let getAllProducts = products.map(product => {
      return (
        <ProductEdit key={product._id} id={product._id} product={product} />
      );
    });

    return (
      <div className="admin-container">
        <AdminNavbar activeProducts={active} />
        <CreateProducts />
        <Header color="blue" content="Products" textAlign="left" />
        <div>{getAllProducts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getAdminProducts }
)(Products);
