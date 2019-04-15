import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import "./Admin.scss";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      activeDiscount,
      activeUsers,
      activeProducts,
      activeOrders
    } = this.props;
    return (
      <div>
        <Menu color="blue" widths="4" pointing secondary>
          <Menu.Item
            as={Link}
            to="/admin/dashboard/users"
            color="olive"
            active={activeUsers}
          >
            User
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/admin/dashboard/discount"
            color="olive"
            active={activeDiscount}
          >
            Discount
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/admin/dashboard/products"
            color="olive"
            active={activeProducts}
          >
            Products
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/admin/dashboard/orders"
            color="olive"
            active={activeOrders}
          >
            Orders
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default AdminNavbar;
