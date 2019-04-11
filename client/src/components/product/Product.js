import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../actions/productActions";

import {
  Breadcrumb,
  Image,
  Icon,
  Dropdown,
  Button,
  Message
} from "semantic-ui-react";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: 0,
      size: "",
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
      title: nextProps.product.title,
      price: nextProps.product.price
    });
  }

  handleSelectChange = (e, { value }) => {
    this.setState({ size: value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.size === "") {
      this.setState({
        error: true
      });
    } else {
      console.log(this.state);
    }
  };

  render() {
    const { product } = this.props;
    console.log(product);

    const getSize =
      product.sizes &&
      product.sizes.map(size => {
        size = size.size;
        return {
          key: size,
          text: size,
          value: size
        };
      });

    // onClickEdit(product) {
    //   this.props.history.push({
    //     pathname: `/admin/products`,
    //     state: {
    //       key: product,

    //     }
    //   });
    // }
    const breadcrumOptions = [
      { key: "Home", content: "Home", link: true, href: "/" },
      { key: "Products", content: "Products", link: true, href: "/products" },
      { key: "Category", content: "Category" },
      {
        key: `${product.category}`,
        content: `${product.category}`,
        link: true
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
              fluid
              selection
              scrolling
              options={getSize}
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
            {product.available ? (
              <Button type="submit" onClick={this.onSubmit} color="blue">
                Add to cart
              </Button>
            ) : (
              <Button disabled color="blue">
                Add to cart
              </Button>
            )}
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
  { getProductById }
)(Product);
