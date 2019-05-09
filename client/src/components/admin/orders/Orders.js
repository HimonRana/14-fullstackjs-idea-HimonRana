import React, { Component } from "react";
import { connect } from "react-redux";

import AdminNavbar from "../AdminNavbar";
import { Header } from "semantic-ui-react";

import "../Admin.scss";
import Order from "./Order";

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

  render() {
    const { active } = this.state;
    // fetch orders here
    let showOrders = <Order />;

    return (
      <div className="admin-container">
        <AdminNavbar activeOrders={active} />
        <Header color="blue" content="Orders" textAlign="left" />
        <div className="show-all-orders">{showOrders}</div>
      </div>
    );
  }
}

export default connect()(Orders);
