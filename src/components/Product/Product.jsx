import React, { Component } from "react";

class Product extends Component {
  deleteProduct = () => {
    const index = this.props.index;
    this.props.deleteProduct(index);
  };

  render() {
    return (
      <section className="product">
        <header className="product-title">
          <h2>{this.props.name}</h2>
        </header>
        <ul className="product-card">
          <li className="product-card_title">
            <h3>Description:</h3>
          </li>
          <li className="product-card_description">
            <p>{this.props.description}</p>
          </li>
          <li className="product-card_price">
            <p className="product-card_price__title">Price:</p>
            <p className="product-card_price__value">{this.props.price}€</p>
          </li>
          <span
            className="material-icons product-card_cancel"
            onClick={this.deleteProduct}
          >
            block
          </span>
        </ul>
        <h3>{this.props.category}</h3>
      </section>
    );
  }
}

export default Product;
