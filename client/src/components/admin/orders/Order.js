import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Card, Image, Button, Dropdown } from "semantic-ui-react";
import { editOrder } from "../../../actions/orderActions";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";

import "../Admin.scss";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      expanded: false,
      status: this.props.order.status
    };
  }

  // deleteOrder = () => {
  //   this.props.deleteOrder(this.props.order._id);
  // };

  handleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleDropdownChange = (e, { value }) => {
    this.setState({
      status: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const updateOrderStatus = {
      id: this.props.order._id,
      status: this.state.status
    };
    this.props.editOrder(updateOrderStatus.id, updateOrderStatus);
    this.setState({
      expanded: false
    });
  };

  render() {
    const { order } = this.props;

    const statusOptions = [
      { key: "Processing", text: "Processing", value: "Processing" },
      { key: "On its way", text: "On its way", value: "On its way" },
      { key: "Delivered", text: "Delivered", value: "Delivered" },
      { key: "Complete", text: "Complete", value: "Complete" }
    ];

    return (
      <div>
        <ExpansionPanel
          expanded={this.state.expanded}
          onChange={this.handleExpanded}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Header as="h5">
              Ordered: {order.date} | {order.userName}
            </Header>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="order-content">
              {order.orderProducts.map(product => (
                <Card key={product._id} className="order-item-card">
                  <div className="order-item">
                    <Card.Content className="order-item-card-content-img">
                      <Image size="tiny" src={product.productImg} />
                    </Card.Content>
                    <Card.Content className="order-item-card-content">
                      <Card.Description>
                        <strong>{product.title}</strong>
                      </Card.Description>
                      <Card.Description>{product.price} SEK</Card.Description>
                      <Card.Description>Size: {product.size}</Card.Description>
                      <Card.Description>
                        Quantity: {product.quantity}
                      </Card.Description>
                    </Card.Content>
                  </div>
                  <Divider />
                  <Card.Description className="order-item-total">
                    Discount: {order.discount.length > 0 ? "Yes" : "No"}
                  </Card.Description>
                  <Card.Description className="order-item-total">
                    Total: {order.totalSum} SEK
                  </Card.Description>
                </Card>
              ))}
              <Card className="order-item-shipping-card">
                <Card.Content>
                  <Header as="h4">Shipping address</Header>
                  <Card.Description>Name: {order.name}</Card.Description>
                  <Card.Description>Email: {order.email}</Card.Description>
                  <Card.Description>Street: {order.street}</Card.Description>
                  <Card.Description>Zip: {order.zip}</Card.Description>
                  <Card.Description>City: {order.city}</Card.Description>
                  <Card.Description>
                    Telephone: {order.telephone}
                  </Card.Description>
                  <Header as="h5">Status </Header>
                  <Dropdown
                    className=""
                    placeholder="Select Status"
                    scrolling
                    selection
                    size="small"
                    name="status"
                    options={statusOptions}
                    value={this.state.status}
                    onChange={this.handleDropdownChange}
                  />
                </Card.Content>
              </Card>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button.Group size="tiny">
              <Button
                size="small"
                type="submit"
                onClick={this.onSubmit}
                primary
              >
                Save
              </Button>
              <Button.Or />
              <Button
                size="small"
                type="submit"
                onClick={this.deleteOrder}
                negative
              >
                Delete
              </Button>
            </Button.Group>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

export default connect(
  null,
  {
    editOrder
  }
)(Order);
