import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editUser, deleteUser } from "../../../actions/userActions";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      expanded: false,
      name: this.props.user.name,
      email: this.props.user.email,
      role: this.props.user.role
    };
  }

  deleteUser = () => {
    this.props.deleteUser(this.props.user._id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = () => {
    this.setState({
      expanded: !this.expanded
    });
  };

  handleCheckboxtoggle = () => {
    this.setState({ role: !this.state.role });
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
  };

  render() {
    const { user } = this.props;
    let adminUser = "background-color: aliceblue;";
    let regularUser = "background-color: antiquewhite;";
    return (
      <div className="user-container">
        <ExpansionPanel
          onClick={this.handleChange}
          Style={user.role ? adminUser : regularUser}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Header size="tiny">{this.state.name}</Header>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Form error className="user-edit-form" size="small">
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
              {!user.role ? (
                <div>
                  <p>Admin:</p>
                  <Checkbox
                    toggle
                    checked={this.state.role}
                    onChange={this.handleCheckboxtoggle}
                  />
                </div>
              ) : (
                ""
              )}
            </Form>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button.Group size="tiny">
              <Button
                size="small"
                type="submit"
                disabled={
                  (user.name === this.state.name ? true : false) &&
                  (user.email === this.state.email ? true : false) &&
                  (user.role === this.state.role ? true : false)
                }
                onClick={this.onSubmit}
                primary
              >
                Save
              </Button>
              <Button.Or />
              <Button
                size="small"
                type="submit"
                onClick={this.deleteUser}
                negative
              >
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
  { editUser, deleteUser }
)(withRouter(User));
