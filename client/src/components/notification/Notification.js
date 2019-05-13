import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import socketIOClient from "socket.io-client";
import "./Notification.scss";
import $ from "jquery";

class Notification extends Component {
  state = { productId: "" };
  
  componentDidMount() {
    $(".notification-container").hide();
    this.handleHide();
  }

  handleHide = () => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("notification", data => {
      this.setState({
        productId: data
      });
      if (data) {
        $(".notification-container").show();
        setTimeout(() => {
          $(".notification-container").hide();
        }, 5000);
      }
    });
  };

  handleProduct = () => {
    const productId = this.props.products[0]._id;
    this.props.history.push(`/product/${productId}`);
  };

  render() {
    return (
      <div className="notification-container">
        <div className="notification-content">
          <Header>New product released!</Header>
          <Button onClick={this.handleProduct}>Check out</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(mapStateToProps)(withRouter(Notification));
