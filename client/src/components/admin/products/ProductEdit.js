import React, { Component } from "react";
import { connect } from "react-redux";
import { editProduct, deleteProduct } from "../../../actions/productActions";

import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.product.title,
      description: this.props.product.description,
      productImg: this.props.product.productImg,
      price: this.props.product.price,
      stock: this.props.product.stock,
      category: this.props.product.category,
      available: this.props.product.available,
      expanded: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxtoggle = () => {
    this.setState({ available: !this.state.available });
  };

  handleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleDropdownChange = (e, { value }) => {
    this.setState({
      category: value
    });
  };

  deleteProduct = () => {
    this.props.deleteProduct(this.props.product._id);
  };

  onSubmit = e => {
    e.preventDefault();
    const updateProduct = {
      id: this.props.id,
      title: this.state.title,
      description: this.state.description,
      productImg: this.state.productImg,
      price: this.state.price,
      stock: this.state.stock,
      category: this.state.category,
      available: this.state.available
    };

    console.log(updateProduct);
    this.props.editProduct(updateProduct.id, updateProduct);
    this.setState({
      expanded: false
    });
  };

  render() {
    // const { product } = this.props;

    const categoryOptions = [
      { key: "Head", text: "Head", value: "Head" },
      { key: "Top", text: "Top", value: "Top" },
      { key: "Bottom", text: "Bottom", value: "Bottom" },
      { key: "Shoes", text: "Shoes", value: "Shoes" }
    ];

    return (
      <div className="product-admin-container">
        <ExpansionPanel
          expanded={this.state.expanded}
          onChange={this.handleExpanded}
        >
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
                required
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
                required
                icon="image"
                iconPosition="left"
                placeholder="Product Image URL"
                type="text"
                name="productImg"
                value={this.state.productImg}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                required
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
                required
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
                name="category"
                options={categoryOptions}
                value={this.state.category}
                onChange={this.handleDropdownChange}
              />
              <Checkbox
                className="product-create-checkbox"
                toggle
                label="Avalible In Stock"
                onChange={this.handleCheckboxtoggle}
                checked={this.state.available}
              />
            </Form>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button.Group className="product-button-group" size="tiny">
              <Button size="small" onClick={this.onSubmit} primary>
                Edit user
              </Button>
              <Button.Or />
              <Button size="small" onClick={this.deleteProduct} negative>
                Delete
              </Button>
            </Button.Group>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

export default connect(
  null,
  { editProduct, deleteProduct }
)(ProductEdit);
