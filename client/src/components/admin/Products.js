import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";

import "./Admin.scss";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount = () => {
    if (window.location.pathname === "/admin/dashboard/products") {
      console.log("/admin/dashboard/products");
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
    
    return (
      <div className=" container">
        <AdminNavbar activeProducts={active} />
      </div>
    );
  }
}

export default Products;
