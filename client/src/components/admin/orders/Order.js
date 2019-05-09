import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Card, Image, Button, Dropdown } from "semantic-ui-react";

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
      status: ""
    };
  }

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

  render() {
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
            <Header as="h5">Ordered: 25 Jun 2015 | User</Header>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="order-content">
              <Card className="order-item-card">
                <div className="order-item">
                  <Card.Content className="order-item-card-content-img">
                    <Image
                      size="tiny"
                      src="https://www.topstreetwear.com/media/catalog/product/cache/1/image/460x597/9df78eab33525d08d6e5fb8d27136e95/4/9/490255_0.jpg"
                    />
                  </Card.Content>
                  <Card.Content className="order-item-card-content">
                    <Card.Description>
                      <strong>Title:</strong>
                    </Card.Description>
                    <Card.Description>SEK</Card.Description>
                    <Card.Description>Size: </Card.Description>
                    <Card.Description>Quantity: </Card.Description>
                  </Card.Content>
                </div>
                <div className="order-item">
                  <Card.Content className="order-item-card-content-img">
                    <Image
                      size="tiny"
                      src="https://www.topstreetwear.com/media/catalog/product/cache/1/image/460x597/9df78eab33525d08d6e5fb8d27136e95/4/9/490255_0.jpg"
                    />
                  </Card.Content>
                  <Card.Content className="order-item-card-content">
                    <Card.Description>
                      <strong>Title:</strong>
                    </Card.Description>
                    <Card.Description>SEK</Card.Description>
                    <Card.Description>Size: </Card.Description>
                    <Card.Description>Quantity: </Card.Description>
                  </Card.Content>
                </div>
                <Divider />
                <Card.Description className="order-item-total">
                  Total: 8999 SEK
                </Card.Description>
              </Card>
              <Card className="order-item-shipping-card">
                <Card.Content>
                  <Header as="h4">Shipping address</Header>
                  <Card.Description>Name: </Card.Description>
                  <Card.Description>Email: </Card.Description>
                  <Card.Description>Street: </Card.Description>
                  <Card.Description>Zip: </Card.Description>
                  <Card.Description>City: </Card.Description>
                  <Card.Description>Telephone: </Card.Description>
                  <Card.Description>Telephone: </Card.Description>
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

export default connect()(Order);
