import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";

import { Breadcrumb, Image, Icon, Dropdown, Button } from "semantic-ui-react";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      productImg: "",
      price: 0,
      size: "",
      quantity: 0,
      error: false
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getProductById(this.props.match.params.id);
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.product._id,
      title: nextProps.product.title,
      productImg: nextProps.product.productImg,
      price: nextProps.product.price
    });
  }

  handleSelectChange = (e, { value }) => {
    this.setState({ size: value });
  };

  handleBlur = () => {
    this.setState({
      error: false
    });
  };

  handleSendToCart = id => {
    if (this.state.size === "") {
      this.setState({
        error: true
      });
    } else {
      const addProductToCart = {
        id: this.state.id,
        title: this.state.title,
        productImg: this.state.productImg,
        price: this.state.price,
        size: this.state.size,
        quantity: this.state.quantity
      };
      this.props.addToCart(addProductToCart);
    }
  };

  render() {
    const { product } = this.props;

    const getShoeSizes = [
      { key: "39", text: "39", value: "39" },
      { key: "40", text: "40", value: "40" },
      { key: "41", text: "41", value: "41" },
      { key: "42", text: "42", value: "42" },
      { key: "43", text: "43", value: "43" },
      { key: "44", text: "44", value: "44" },
      { key: "45", text: "45", value: "45" }
    ];

    const getClothingSizes = [
      { key: "S", text: "S", value: "S" },
      { key: "M", text: "M", value: "M" },
      { key: "L", text: "L", value: "L" },
      { key: "XL", text: "XL", value: "XL" }
    ];

    // onClickEdit(product) {
    //   this.props.history.push({
    //     pathname: `/admin/products`,
    //     state: {
    //       key: product,

    //     }
    //   });
    // }
    const breadcrumOptions = [
      { key: "Home", content: "Home", href: "/" },
      { key: "Products", content: "Products", href: "/products" },
      { key: "Category", content: "Category" },
      {
        key: `${product.category}`,
        content: `${product.category}`,
        href: `/products/category/${product.category}`
      }
    ];

    return (
      <div className="product-container">
        <div className="product-grid-container">
          <div className="product-img-container" width={10}>
            <Image src={product.productImg} />
          </div>
          <div className="product-info-container" width={6}>
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price} SEK</p>
            <Dropdown
              placeholder="Select size"
              error={this.state.error}
              onFocus={this.handleBlur}
              fluid
              selection
              scrolling
              options={
                product.category === "Shoes" ? getShoeSizes : getClothingSizes
              }
              value={this.state.size}
              onChange={this.handleSelectChange}
            />
            {this.state.error ? (
              <p className="product-select-error">Please select size</p>
            ) : (
              ""
            )}
            <Breadcrumb icon="right angle" sections={breadcrumOptions} />
            <p className="product-description">{product.description}</p>
            <p className="product-stock">
              In stock:
              <Icon
                color={product.available ? "green" : "red"}
                name={product.available ? "check" : "close"}
              />
            </p>
            <Button
              content="Add to cart"
              className="add-to-cart-button"
              type="submit"
              color="blue"
              icon="cart"
              labelPosition="left"
              disabled={product.available ? false : true}
              onClick={this.handleSendToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.product
});

export default connect(
  mapStateToProps,
  { getProductById, addToCart }
)(Product);
