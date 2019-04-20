import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../../actions/productActions";
import { Header, Form, Checkbox, Dropdown, Button } from "semantic-ui-react";

class CreateProducts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      productImg: "",
      price: "",
      stock: "",
      category: "",
      available: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropdownChange = (e, { value }) => {
    this.setState({
      category: value
    });
  };

  handleCheckboxtoggle = () => {
    this.setState({ available: !this.state.available });
  };

  onSubmit = e => {
    e.preventDefault();

    const newProduct = {
      title: this.state.title,
      description: this.state.description,
      productImg: this.state.productImg,
      price: this.state.price,
      stock: this.state.stock,
      category: this.state.category,
      available: this.state.available
    };
    this.setState({
      title: "",
      description: "",
      productImg: "",
      price: "",
      stock: "",
      category: ""
    });
    console.log(newProduct);
    console.log(this.state);
    this.props.createProduct(newProduct);
  };

  render() {
    const categoryOptions = [
      { key: "Head", text: "Head", value: "Head" },
      { key: "Top", text: "Top", value: "Top" },
      { key: "Bottom", text: "Bottom", value: "Bottom" },
      { key: "Shoes", text: "Shoes", value: "Shoes" }
    ];

    return (
      <div>
        <Header
          className="product-create-header"
          color="blue"
          content="Create product here"
          textAlign="left"
        />
        <Form error onSubmit={this.onSubmit} size="small">
          <Form.Input
            required
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
            required
            fluid
            icon="image"
            iconPosition="left"
            placeholder="Product Image URL"
            type="text"
            name="productImg"
            value={this.state.productImg}
            onChange={this.onChange}
          />
          <Form.Input
            required
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
            required
            fluid
            icon="warehouse"
            iconPosition="left"
            placeholder="Stock Quantity"
            type="number"
            name="stock"
            value={this.state.stock}
            onChange={this.onChange}
          />
          <Dropdown
            required
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
            // disabled={this.state.stock > 0 ? false : true}
            label="Avalible In Stock"
            onChange={this.handleCheckboxtoggle}
          />
          <br />
          <Button type="submit">Create product</Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { createProduct }
)(CreateProducts);
