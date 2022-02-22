import React, { Component } from "react";
import Product from "../Product/Product";

class Showroom extends Component {
  constructor(){
    super();
    this.state = { productsArray: [] };
    this.newProduct = this.newProduct.bind(this);
  }
  componentDidMount(){
    this.props.product.subscribe(this.newProduct)
  }
  componentWillUnmount(){
    this.props.product.unsubscribe(this.newProduct)
  }
  newProduct(product){
    this.setState({...this.state, product})
  }

  render() {
    return (
      <ul className="showroom">
        {this.props.product.productsArray.map((product, index) => {
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
