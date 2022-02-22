import React, { Component } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import Showroom from "./components/Showroom/Showroom";
import Categories from "./components/Categories/Caterogies";
import "./assets/App.css";
import CategoriesState from "./data/CategoriesState";
import ProductState from "./data/ProductState";

class App extends Component {
  constructor() {
    super();
    this.category = new CategoriesState();
    this.product = new ProductState();
  }


  render() {
    return (
      <section className="app-content">
        <section className="app-content_section">
          <h1>GameStore</h1>
          <Categories
            delete = {this.category}
            addCategory={this.category}
            categories={this.category}
          />
          <Showroom
            product={this.product}
            deleteProduct={this.product}
          />
        </section>
        <FormAdd categories={this.state.categories} addProduct={this.addProduct} />
      </section>
    );
  }
}

export default App;
