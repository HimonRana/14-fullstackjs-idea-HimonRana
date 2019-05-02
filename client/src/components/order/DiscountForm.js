import React, { Component } from "react";
import {
  Button,
  Form,
  Input
} from "semantic-ui-react";

class DiscountForm extends Component {
  render() {
    return (
      <div>
        <Form size="tiny">
          <Input placeholder="Enter discount code" />
          <Button size="tiny" color="blue">
            Add discount
          </Button>
        </Form>
      </div>
    );
  }
}

export default DiscountForm;
