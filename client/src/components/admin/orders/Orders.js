import React, { Component } from "react";
import { connect } from "react-redux";

import { getOrders } from "../../../actions/orderActions";
import AdminNavbar from "../AdminNavbar";
import { Header } from "semantic-ui-react";
import Order from "./Order";

import "../Admin.scss";

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount = () => {
    this.props.getOrders();
    if (window.location.pathname === "/admin/dashboard/orders") {
      this.setState({
        active: true
      });
    }
  };

  render() {
    const { active } = this.state;
    const { orders } = this.props;

    let showOrders =
      orders === null ? (
        <p>No orders available.</p>
      ) : orders.length > 0 ? (
        orders.map(order => {
          return <Order key={order._id} id={order._id} order={order} />;
        })
      ) : (
        <p>No orders created.</p>
      );

    return (
      <div className="admin-container">
        <AdminNavbar activeOrders={active} />
        <Header color="blue" content="Orders" textAlign="left" />
        <div className="show-all-orders">{showOrders}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders
});

export default connect(
  mapStateToProps,
  { getOrders }
)(Orders);
