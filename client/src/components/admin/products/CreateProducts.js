import React, { Component } from "react";

import { Header, Form, Checkbox, Dropdown, Button } from "semantic-ui-react";

class CreateProducts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      imgUrl: "",
      price: "",
      stock: Number,
      dropdownValue: "",
      avaliable: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropdownChange = (e, { value }) => {
    this.setState({
      dropdownValue: value
    });
  };

  handleCheckboxtoggle = () => {
    this.setState({ avaliable: !this.state.avaliable });
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const categoryOptions = [
      { key: 1, text: "Head", value: "Head" },
      { key: 2, text: "Top", value: "Top" },
      { key: 3, text: "Bottom", value: "Bottom" },
      { key: 4, text: "Shoes", value: "Shoes" }
    ];

    return (
      <div>
        <Header
          className="product-create-header"
          color="blue"
          content="Create product here"
          textAlign="left"
        />
        <Form>
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
            value={this.state.dropdownValue}
            onChange={this.handleDropdownChange}
          />
          <Checkbox
            className="product-create-checkbox"
            toggle
            disabled={this.state.stock > 0 ? false : true}
            label="Avalible In Stock"
            onChange={this.handleCheckboxtoggle}
            checked={this.state.avaliable}
          />
          <br />
          <Button onClick={this.onSubmit} type="submit">
            Create product
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateProducts;
