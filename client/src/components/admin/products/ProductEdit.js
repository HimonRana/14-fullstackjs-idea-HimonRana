import React, { Component } from "react";

import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.product.title,
      description: this.props.product.description,
      imgUrl: this.props.product.productImg,
      price: this.props.product.price,
      stock: this.props.product.stock,
      category: this.props.product.category,
      available: this.props.product.available,
      expanded: true
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxtoggle = () => {
    this.setState({ available: !this.state.available });
  };

  //   deleteProduct = () => {
  //     this.props.deleteProduct(this.props.product._id);
  //   };

  onSubmit = e => {
    e.preventDefault();
    const updateProduct = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
      price: this.state.price,
      stock: this.state.stock,
      category: this.state.category,
      available: this.state.available
    };

    // this.props.editProduct(updateProduct.id, updateProduct);

    console.log(updateProduct);
  };

  render() {
    // const { product } = this.props;

    const categoryOptions = [
      { key: 1, text: "Head", value: "Head" },
      { key: 2, text: "Top", value: "Top" },
      { key: 3, text: "Bottom", value: "Bottom" },
      { key: 4, text: "Shoes", value: "Shoes" }
    ];

    return (
      <div className="product-admin-container">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Header size="tiny">{this.state.title}</Header>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Form
              error
              className="user-edit-form"
              size="small"
              onSubmit={this.onSubmit}
            >
              <Form.Input
                fluid
                icon="tag"
                iconPosition="left"
                placeholder="Title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="wordpress forms"
                iconPosition="left"
                placeholder="Description"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="image"
                iconPosition="left"
                placeholder="Product Image URL"
                type="text"
                name="imgUrl"
                value={this.state.imgUrl}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="dollar"
                iconPosition="left"
                placeholder="Price"
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="warehouse"
                iconPosition="left"
                placeholder="Stock Quantity"
                type="Number"
                name="stock"
                value={this.state.stock}
                onChange={this.onChange}
              />
              <Dropdown
                className="product-category-dropdown"
                placeholder="Select Category"
                scrolling
                selection
                options={categoryOptions}
                value={this.state.category}
                onChange={this.handleDropdownChange}
              />
              <Checkbox
                className="product-create-checkbox"
                toggle
                disabled={this.state.stock > 0 ? false : true}
                label="Avalible In Stock"
                onChange={this.handleCheckboxtoggle}
                checked={this.state.available}
              />
              <Button.Group className="product-button-group" size="tiny">
                <Button onClick={this.onSubmit} primary>
                  Edit user
                </Button>
                <Button.Or />
                <Button onClick={this.deleteProduct} type="submit" negative>
                  Delete
                </Button>
              </Button.Group>
            </Form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default ProductEdit;
