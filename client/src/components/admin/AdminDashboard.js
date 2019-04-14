import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu, Form, Header, Button, Table } from "semantic-ui-react";
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
            Create discount
          </Button>
        </Form>

        <Header color="blue" content="Pevious discounts" textAlign="left" />
        <Table columns={12} unstackable color="red">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Discount name</Table.HeaderCell>
              <Table.HeaderCell>Discount percentage</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Remove discount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>HIM30</Table.Cell>
              <Table.Cell>30%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>JUN15</Table.Cell>
              <Table.Cell>15%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>KV70</Table.Cell>
              <Table.Cell>70%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">Delete</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default AdminDashboard;
