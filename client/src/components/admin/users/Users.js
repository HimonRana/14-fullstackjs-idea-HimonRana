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
      active: false
    };
  }

  componentDidMount = () => {
    if (this.props.user.role) {
      this.props.getUsers();
      if (window.location.pathname === "/admin/dashboard/users") {
        this.setState({
          active: true
        });
      }
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { active } = this.state;
    const { users } = this.props;

    let showUsers =
      users === null ? (
        <p>No users available.</p>
      ) : users.length > 0 ? (
        users.map(user => {
          return <User key={user._id} id={user._id} user={user} />;
        })
      ) : (
        <p>No users created.</p>
      );

    return (
      <div className="admin-container">
        <AdminNavbar activeUsers={active} />
        <Header color="blue" content="Users" textAlign="left" />
        <div className="show-all-users">{showUsers}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
