import React, { Component } from "react";
import AdminNavbar from "../AdminNavbar";

import "../Admin.scss";

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount = () => {
    if (window.location.pathname === "/admin/dashboard/orders") {
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
      <div className="admin-container">
        <AdminNavbar activeOrders={active} />
      </div>
    );
  }
}

export default Orders;
