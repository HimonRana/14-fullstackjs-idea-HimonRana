import React, { Component } from "react";
import { Header, Card, Image, Divider } from "semantic-ui-react";

class ShowOrders extends Component {
  formatDate = date => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    var weekdayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const day = new Date(date).getDate().toLocaleString("sv-SE");
    const monthIndex = new Date(date).getMonth().toLocaleString("sv-SE");
    const year = new Date(date).getFullYear();
    const weekDay = new Date(date).getDay();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${day} ${monthNames[monthIndex]} ${year} - ${hours}:${minutes} - ${
      weekdayNames[weekDay]
    }`;
  };

  render() {
    const { orders } = this.props.user;

    return (
      <div>
        {orders === null ? (
          <p>No orders</p>
        ) : orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} className="profile-content">
              <Header as="h5">Ordered: {this.formatDate(order.date)}</Header>
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
