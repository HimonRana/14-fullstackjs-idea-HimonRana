import React, { Component } from "react";

import { Grid, Image, Label, Icon, Dropdown } from "semantic-ui-react";
import "./Product.scss";

class Product extends Component {
  render() {
    const getOptions = [
      {
        key: "42",
        text: "42",
        value: "42"
      },
      {
        key: "43",
        text: "43",
        value: "43"
      },
      {
        key: "44",
        text: "44",
        value: "44"
      },
      {
        key: "45",
        text: "45",
        value: "45"
      }
    ];

    return (
      <div className="product-container">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column className="product-img-container" width={10}>
              <Image
                src="https://www.sneakersnstuff.com/images/225637/large.jpg"
                fluid
              />
            </Grid.Column>
            <Grid.Column className="product-info-container" width={6}>
              <h1>Converse All Star</h1>
              <Label tag as="a">
                699 SEK
              </Label>
              <br />
              <br />
              <Dropdown
                placeholder="Select size"
                fluid
                selection
                scrolling
                options={getOptions}
              />
              <h3>Category: Shoe</h3>
              <h3>Dsecription: Good looking shoes</h3>
              <h5>
                In stock: <Icon color="green" name="check" />
              </h5>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Product;
