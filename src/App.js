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

    //binds
    this.deleteCategory = this.category.deleteCategory.bind(this.category);
    this.deleteCategoryFromProduct = this.product.deleteCategoryFromProduct.bind(this);
    this.deleteProduct = this.product.deleteProduct.bind(this.product);
    this.addProduct = this.product.addProduct.bind(this.product);
  }

  //Render
  render() {
    return (
      <section className="app-content">
        <section className="app-content_section">
          <h1>GameStore</h1>
          <Categories
            deleteCategory={this.deleteCategory}
            addCategory={this.category.addCategory}
            categories={this.category}
            deleteCategoryFromProduct={this.deleteCategoryFromProduct}
          />
          <Showroom product={this.product} deleteProduct={this.deleteProduct} />
        </section>
        <FormAdd categories={this.category} addProduct={this.addProduct} />
      </section>
    );
  }
}

export default App;
