import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteDiscount } from "../../../actions/discountActions";
import { Button } from "semantic-ui-react";

class DeleteDiscount extends Component {
  deleteDiscount = () => {
    this.props.deleteDiscount(this.props.id);
  };

  render() {
    return (
      <div>
        <Button onClick={this.deleteDiscount} size="tiny" color="red">
          X
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteDiscount }
)(DeleteDiscount);
