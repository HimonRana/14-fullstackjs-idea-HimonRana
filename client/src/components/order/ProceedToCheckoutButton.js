import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { loginAndCheckout } from "../../actions/orderActions";

class ProceedToCheckoutButton extends Component {
  handleLoginAndCheckout = () => {
    this.props.loginAndCheckout(this.props.isAuthenticated, this.props.history);
  };

  render() {
    const { addedItems, isAuthenticated } = this.props;

    return (
      <div>
        <Button
          disabled={addedItems.length === 0 ? true : false}
          size="small"
          primary
          onClick={this.handleLoginAndCheckout}
        >
          {isAuthenticated ? "Proceed to checkout" : "Login to checkout"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedItems: state.product.addedItems,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { loginAndCheckout }
)(ProceedToCheckoutButton);
