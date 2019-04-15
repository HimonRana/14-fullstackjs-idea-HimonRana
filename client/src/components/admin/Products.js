import React, { Component } from "react";

import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdminNavbar from "./AdminNavbar";

import "./Admin.scss";
import CreateProducts from "./CreateProducts";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      expanded: null,
      dropdownValue: ""
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

  render() {
    const { expanded, active } = this.state;

    return (
      <div className="container">
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
                icon="user"
                iconPosition="left"
                placeholder="Name"
                type="text"
                name="name"
                value=""
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                name="email"
                value=""
              />
              <p>Admin:</p>
              <Checkbox checked={true} toggle />
              <Button loading floated="right" primary>
                Edit user
              </Button>
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
