import React, { Component } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import Showroom from "./components/Showroom/Showroom";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }
  addProduct = (name, description, price) => {
    const newProduct = { name, description, price };
    const newArrayProducts = [...this.state.product, newProduct];
    this.setState({ product: newArrayProducts });
  };
  deleteProduct = (index) => {
    const newArrayProducts = this.state.product;
    newArrayProducts.splice(index,1);
    this.setState({product: newArrayProducts })
  };

  render() {
    return (
      <section className="app-content">
        <Showroom
          product={this.state.product}
          deleteProduct={this.deleteProduct}
        />
        <FormAdd addProduct={this.addProduct} />
      </section>
    );
  }
}

export default App;
