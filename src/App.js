import React, { Component } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import Showroom from "./components/Showroom/Showroom";
import Categories from "./components/Categories/Categories";
import CategoriesState from "./data/CategoriesState";
import ProductState from "./data/ProductState";
import "./assets/App.css";

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
            deleteCategory={this.category.deleteCategory.bind(this.category)}
            addCategory={this.category.addCategory}
            categories={this.category}
            deleteCategoryFromProduct={this.product.deleteCategoryFromProduct.bind(this)}
          />
          <Showroom
            product={this.product}
            deleteProduct={this.product.deleteProduct.bind(this.product)}
          />
        </section>
        <FormAdd
          categories={this.category}
          addProduct={this.product.addProduct.bind(this.product)}
        />
      </section>
    );
  }
}

export default App;
