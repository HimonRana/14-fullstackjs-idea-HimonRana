import React, { Component } from "react";
import { Icon, Label, Card } from "semantic-ui-react";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <Card
          image="https://www.sneakersnstuff.com/images/225637/large.jpg"
          header="Converse All Star"
          meta={
            <div>
              <br />
              <Label tag as="a">
                699 SEK
              </Label>
            </div>
          }
          description={
            <div>
              <br />
              In stock: <Icon color="green" name="check" />
            </div>
          }
        />
      </div>
    );
  }
}
