import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { addOrder } from "../../actions/orderActions";

class StripeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripeLoading: true
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.loadStripe = this.loadStripe.bind(this);
  }

  loadStripe(onload) {
    if (!window.StripeCheckout) {
      const script = document.createElement("script");
      script.onload = function() {
        onload();
      };
      script.src = "https://checkout.stripe.com/checkout.js";
      document.head.appendChild(script);
    } else {
      onload();
    }
  }

  componentDidMount() {
    this.loadStripe(() => {
      this.stripeHandler = window.StripeCheckout.configure({
        key: "pk_test_cr3BDV2StJh354Wmrnr0eGfs00ZnwDyGEo",
        image:
          "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26567497.jpg",
        locale: "auto",
        token: token => {
          this.setState({ loading: true });

          const { order } = this.props;
          this.props.addOrder(order, token, this.props.history);
        }
      });

      this.setState({
        stripeLoading: false
      });
    });
  }

  UNSAFE_componentWillUnmount() {
    if (this.stripeHandler) {
      this.stripeHandler.close();
    }
  }

  onSubmit(e) {
    e.preventDefault();

    this.stripeHandler.open({
      name: "Buntshop",
      description: "Webshop",
      panelLabel: "Make Payment",
      allowRememberMe: false
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onSubmit} color="olive">
          COMPLETE PURCHASE
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addOrder }
)(StripeButton);
