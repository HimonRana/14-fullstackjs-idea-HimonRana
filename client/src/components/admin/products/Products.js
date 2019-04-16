import React, { Component } from "react";

import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdminNavbar from "../AdminNavbar";

import "../Admin.scss";
import CreateProducts from "./CreateProducts";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      expanded: null,
      title: "",
      description: "",
      imgUrl: "",
      price: "",
      stock: Number,
      dropdownValue: "",
      avaliable: false
    };
  }

  componentDidMount = () => {
    if (window.location.pathname === "/admin/dashboard/products") {
      this.setState({
        active: true
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({
      active: false
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  handleDropdownChange = (e, { value }) => {
    this.setState({
      dropdownValue: value
    });
  };

  handleCheckboxtoggle = () => {
    this.setState({ avaliable: !this.state.avaliable });
  };

  deleteProduct = () => {
    console.log("Product successfully deleted");
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { expanded, active } = this.state;

    const categoryOptions = [
      { key: 1, text: "Head", value: "Head" },
      { key: 2, text: "Top", value: "Top" },
      { key: 3, text: "Bottom", value: "Bottom" },
      { key: 4, text: "Shoes", value: "Shoes" }
    ];

    return (
      <div className="admin-container">
        <AdminNavbar activeProducts={active} />

        <CreateProducts />

        <Header color="blue" content="Products" textAlign="left" />
        <ExpansionPanel
          expanded={expanded === "id1"}
          onChange={this.handleChange("id1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Header size="tiny">Product title here</Header>
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
                value={this.state.dropdownValue}
                onChange={this.handleDropdownChange}
              />
              <p>Avalailable in stock:</p>
              <Checkbox
                className="product-create-checkbox"
                toggle
                disabled={this.state.stock > 0 ? false : true}
                label="Avalible In Stock"
                onChange={this.handleCheckboxtoggle}
                checked={this.state.avaliable}
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
        <ExpansionPanel
          expanded={expanded === "id2"}
          onChange={this.handleChange("id2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="">Another product title here</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Products;
