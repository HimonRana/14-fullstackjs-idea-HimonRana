import React, { Component } from "react";
import { Header, Card, Image, Divider } from "semantic-ui-react";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Header>My orders</Header>
        <div>
          <Card className="profile-item-card">
            <div className="profile-item">
              <Card.Content className="profile-item-card-content-img">
                <Image
                  size="tiny"
                  src="https://www.topstreetwear.com/media/catalog/product/cache/1/image/460x597/9df78eab33525d08d6e5fb8d27136e95/4/9/490255_0.jpg"
                />
              </Card.Content>
              <Card.Content className="profile-item-card-content">
                <Card.Description>
                  <strong>Title:</strong>
                </Card.Description>
                <Card.Description>SEK</Card.Description>
                <Card.Description>Size: </Card.Description>
                <Card.Description>Quantity: </Card.Description>
              </Card.Content>
            </div>
            <div className="profile-item">
              <Card.Content className="profile-item-card-content-img">
                <Image
                  size="tiny"
                  src="https://www.topstreetwear.com/media/catalog/product/cache/1/image/460x597/9df78eab33525d08d6e5fb8d27136e95/4/9/490255_0.jpg"
                />
              </Card.Content>
              <Card.Content className="profile-item-card-content">
                <Card.Description>
                  <strong>Title:</strong>
                </Card.Description>
                <Card.Description>SEK</Card.Description>
                <Card.Description>Size: </Card.Description>
                <Card.Description>Quantity: </Card.Description>
              </Card.Content>
            </div>
            <Divider />
            <Card.Description className="profile-item-total">
              Total: 8999 SEK
            </Card.Description>
          </Card>
          <Card className="profile-item-card">
            <Card.Content>
              <Header>Shipping address</Header>
              <Card.Description>Name: </Card.Description>
              <Card.Description>Email: </Card.Description>
              <Card.Description>Street: </Card.Description>
              <Card.Description>Zip: </Card.Description>
              <Card.Description>City: </Card.Description>
              <Card.Description>Status: </Card.Description>
              <Card.Description>Telephone: </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
