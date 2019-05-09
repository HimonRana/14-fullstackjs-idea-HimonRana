import React, { Component } from "react";
import { connect } from "react-redux";

import { Header } from "semantic-ui-react";
import { getUser } from "../../actions/userActions";
import "./Profile.scss";
import ShowOrders from "./ShowOrders";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="profile-container">
        <Header>My orders</Header>
        <ShowOrders user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);
