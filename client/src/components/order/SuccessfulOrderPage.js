import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

const SuccessfulOrderPage = () => {
  return (
    <div className="order-success-container">
      <Header as="h2">Thank you for the purchase!</Header>
      <p>
        Feel free to follow us on <a href="/">Instagram</a> &amp;{" "}
        <a href="/">Facebook</a>
      </p>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default SuccessfulOrderPage;
