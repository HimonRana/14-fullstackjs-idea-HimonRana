import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editUser } from "../../../actions/userActions";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      expanded: null,
      name: this.props.user.name,
      email: this.props.user.email,
      role: this.props.user.role
    };

    console.log(this.props);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxtoggle = () => {
    this.setState({ role: !this.state.role });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  deleteUser = () => {
    console.log("User successfully deleted");
  };

  onSubmit = e => {
    e.preventDefault();
    const updateUser = {
      id: this.props.id,
      name: this.state.name,
      email: this.state.email,
      role: this.state.role
    };

    this.props.editUser(updateUser.id, updateUser);
    this.setState({
      expanded: !this.expanded
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="user-container">
        <ExpansionPanel
          expanded={this.state.expanded === user._id}
          onChange={this.handleChange(user._id)}
          Style="background-color: aliceblue;"
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Header size="tiny">{this.state.name}</Header>
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
                value={this.state.name}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <p>Admin:</p>
              <Checkbox
                toggle
                checked={this.state.role}
                onChange={this.handleCheckboxtoggle}
              />
              <Button.Group size="tiny" floated="right">
                <Button type="submit" primary>
                  Edit user
                </Button>
                <Button.Or />
                <Button onClick={this.deleteUser} negative>
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

export default connect(
  null,
  { editUser }
)(withRouter(User));
