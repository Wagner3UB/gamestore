import React, { Component } from "react";
import Product from "../Product/Product";

class Showroom extends Component {
  render() {
    return (
      <ul className="showroom">
        {this.props.product.map((product, index) => {
          return (
            <li className="showroom-item" key={index}>
              <Product
                index={index}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                deleteProduct={this.props.deleteProduct}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Showroom;
