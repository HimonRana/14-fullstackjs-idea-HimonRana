import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Button,
  Divider,
  Header,
  Form,
  Input
} from "semantic-ui-react";

export default class DiscountForm extends Component {
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
