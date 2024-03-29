import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    if (this.props.user.role) {
      this.props.getAdminProducts();
      if (window.location.pathname === "/admin/dashboard/products") {
        this.setState({
          active: true
        });
      }
    } else {
      this.props.history.push("/");
    }
  };

  UNSAFE_componentWillUnmount = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { active } = this.state;
    const { products } = this.props;

    let getAllProducts =
      products === null ? (
        <p>No products available.</p>
      ) : products.length > 0 ? (
        products.map(product => {
          return (
            <ProductEdit key={product._id} id={product._id} product={product} />
          );
        })
      ) : (
        <p>No products created.</p>
      );

    return (
      <div className="admin-container">
        <AdminNavbar activeProducts={active} />
        <CreateProducts />
        <Link to="/products">
          <Header
            className="header-products"
            color="blue"
            content="Products"
            textAlign="left"
          />
        </Link>
        <br />
        <div>{getAllProducts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getAdminProducts }
)(Products);
