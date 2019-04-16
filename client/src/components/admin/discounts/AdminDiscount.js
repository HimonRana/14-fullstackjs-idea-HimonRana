import React, { Component } from "react";

import { Form, Header, Button, Table } from "semantic-ui-react";
import "../Admin.scss";
import AdminNavbar from "../AdminNavbar";

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount = () => {
    if (window.location.pathname === "/admin/dashboard/discount") {
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
        <AdminNavbar activeDiscount={active} />
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
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Percent</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>HIM30</Table.Cell>
              <Table.Cell>30%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">X</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>JUN15</Table.Cell>
              <Table.Cell>15%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">X</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>KV70</Table.Cell>
              <Table.Cell>70%</Table.Cell>
              <Table.Cell>2018-04-02</Table.Cell>
              <Table.Cell>
                <Button color="red">X</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default AdminDashboard;
