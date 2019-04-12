import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu, Form, Header, Button, Card } from "semantic-ui-react";
import "./AdminDashboard.scss";

class AdminDashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Menu color="blue" widths="4" pointing secondary>
          <Menu.Item as={Link} to="/admin/dashboard/users" color="olive" active>
            User
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/dashboard/products" color="olive">
            Products
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/dashboard/orders" color="olive">
            Orders
          </Menu.Item>
        </Menu>

        <Header color="blue" content="Create discount here" textAlign="left" />
        {/* put loading in Form later */}
        <Form>
          <Form.Input
            fluid
            icon="tag"
            iconPosition="left"
            placeholder="Discount Name"
            type="text"
            name="discount"
            value=""
            onChange={this.onChange}
          />

          <Form.Input
            fluid
            icon="percent"
            iconPosition="left"
            placeholder="How much percentage"
            type="number"
            name="percentage"
            value=""
            onChange={this.onChange}
          />
          <Button position="right" type="submit">
            Create
          </Button>
        </Form>

        <Header color="blue" content="Pevious discounts" textAlign="left" />
        <Card.Group>
          <Card>
            <Card.Header>JUL30</Card.Header>

            <Card.Description floated="right">20%</Card.Description>
          </Card>
        </Card.Group>
        <Card.Group>
          <Card>
            <Card.Header>JUL30</Card.Header>

            <Card.Description floated="right">20%</Card.Description>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default AdminDashboard;
