import React, { Component } from "react";
import { connect } from "react-redux";

import { createDiscount, getDiscounts } from "../../../actions/discountActions";
import { Table, Form, Header, Button } from "semantic-ui-react";
import "../Admin.scss";
import AdminNavbar from "../AdminNavbar";
import DeleteDiscount from "./DeleteDiscount";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      name: "",
      discountValue: ""
    };
  }

  componentDidMount = () => {
    this.props.getDiscounts();
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newDiscount = {
      name: this.state.name,
      discountValue: this.state.discountValue
    };

    this.props.createDiscount(newDiscount);
    this.setState({
      name: "",
      discountValue: ""
    });
  };

  render() {
    const { active } = this.state;
    const { discounts } = this.props;

    return (
      <div className="admin-container">
        <AdminNavbar activeDiscount={active} />
        <Header color="blue" content="Create discount here" textAlign="left" />
        {/* put loading in Form later */}
        <Form error onSubmit={this.onSubmit} size="small">
          <Form.Input
            fluid
            icon="tag"
            iconPosition="left"
            placeholder="Discount Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <Form.Input
            fluid
            icon="percent"
            iconPosition="left"
            placeholder="How much percentage"
            type="number"
            name="discountValue"
            value={this.state.discountValue}
            onChange={this.onChange}
          />
          <Button size="small" position="right" type="submit">
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
              <Table.HeaderCell Style="text-align: right;">
                Remove
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {discounts.map(discount => {
            return (
              <Table.Body key={discount._id}>
                <Table.Row>
                  <Table.Cell>{discount.name}</Table.Cell>
                  <Table.Cell>{discount.discountValue}%</Table.Cell>
                  <Table.Cell>
                    {new Date(discount.date).getFullYear() +
                      "-" +
                      (new Date(discount.date).getMonth() + 1) +
                      "-" +
                      new Date(discount.date).getDate()}
                  </Table.Cell>
                  <Table.Cell Style="text-align: right;">
                    <DeleteDiscount id={discount._id} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discounts: state.discount.discounts
});

export default connect(
  mapStateToProps,
  { createDiscount, getDiscounts }
)(AdminDashboard);
