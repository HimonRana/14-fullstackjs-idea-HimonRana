import React, { Component } from "react";
import { Header, Card, Image, Divider } from "semantic-ui-react";

class ShowOrders extends Component {
  render() {
    const { orders } = this.props.user;

    return (
      <div>
        {orders === null ? (
          <p>No orders</p>
        ) : orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} className="profile-content">
              <Header as="h5">Ordered: {order.date}</Header>
              {order.orderProducts.map(product => (
                <Card key={product._id} className="profile-item-card">
                  <div className="profile-item">
                    <Card.Content className="profile-item-card-content-img">
                      <Image size="tiny" src={product.productImg} />
                    </Card.Content>
                    <Card.Content className="profile-item-card-content">
                      <Card.Description>
                        <strong>{product.title}</strong>
                      </Card.Description>
                      <Card.Description>{product.price} SEK</Card.Description>
                      <Card.Description>Size: {product.size}</Card.Description>
                      <Card.Description>
                        Quantity: {product.quantity}
                      </Card.Description>
                    </Card.Content>
                  </div>
                  <Divider />
                  <Card.Description className="profile-item-total">
                    Total: {order.totalSum} SEK
                  </Card.Description>
                </Card>
              ))}
              <Card className="profile-item-shipping-card">
                <Card.Content>
                  <Header as="h4">Shipping address</Header>
                  <Card.Description>Name: {order.name}</Card.Description>
                  <Card.Description>Email: {order.email}</Card.Description>
                  <Card.Description>Street: {order.street}</Card.Description>
                  <Card.Description>Zip: {order.zip}</Card.Description>
                  <Card.Description>City: {order.city}</Card.Description>
                  <Card.Description>
                    Telephone: {order.telephone}
                  </Card.Description>
                  <Header className="profile-item-status" as="h5">
                    Status: {order.status}
                  </Header>
                </Card.Content>
              </Card>
            </div>
          ))
        ) : (
          <p>No orders available</p>
        )}
      </div>
    );
  }
}

export default ShowOrders;
