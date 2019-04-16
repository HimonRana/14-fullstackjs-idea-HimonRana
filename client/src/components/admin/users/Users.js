import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../../actions/userActions";
import { Header } from "semantic-ui-react";
import AdminNavbar from "../AdminNavbar";
import User from "./User";

import "../Admin.scss";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      expanded: null,
      name: "",
      email: "",
      role: false
    };
  }

  componentDidMount = () => {
    this.props.getUsers();
    if (window.location.pathname === "/admin/dashboard/users") {
      this.setState({
        active: true
      });
    }
  };

  render() {
    const { active } = this.state;
    const { users } = this.props;

    let showUsers = users.map((user, index) => {
      return <User key={index} id={user._id} user={user} />;
    });

    return (
      <div className="admin-container">
        <AdminNavbar activeUsers={active} />
        <Header color="blue" content="Users" textAlign="left" />
        {showUsers}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
