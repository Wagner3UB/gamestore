import React, { Component } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import Showroom from "./components/Showroom/Showroom";
import Categories from "./components/Categories/Caterogies";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      categories: [],
    };
  }
  addProduct = (name, description, price, category) => { 
    const newProduct = { name, description, price, category };
    const newArrayProducts = [...this.state.product, newProduct];
    this.setState({ product: newArrayProducts });
  };
  deleteProduct = (index) => {
    const newArrayProducts = this.state.product;
    newArrayProducts.splice(index, 1);
    this.setState({ product: newArrayProducts });
  };
  addCategory = (category) => {
    const newArrayCategories = [...this.state.categories, category];
    const newState = { ...this.state, categories: newArrayCategories };
    this.setState(newState);
  };
  deleteCategory = (index) => {
    const newArrayCategories = this.state.categories;
    newArrayCategories.splice(index, 1);
    const newState = {...this.state, categories: newArrayCategories};
    this.setState(newState);
  }
  delete = (index) => {
    this.deleteCategory(index);
  }

  render() {
    return (
      <section className="app-content">
        <section className="app-content_section">
          <h1>GameStore</h1>
          <Categories
            delete = {this.delete}
            addCategory={this.addCategory}
            categories={this.state.categories}
          />
          <Showroom
            product={this.state.product}
            deleteProduct={this.deleteProduct}
          />
        </section>
        <FormAdd categories={this.state.categories} addProduct={this.addProduct} />
      </section>
    );
  }
}

export default App;
