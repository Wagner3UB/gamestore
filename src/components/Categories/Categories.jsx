import React, { Component } from "react";
import Category from "../Category/Category";

class Categories extends Component {
  constructor() {
    super();
    this.state = { categoriesArray: [] };
    this.newCategory = this.newCategory.bind(this);
    this.currentIndex = "";
  }

  componentDidMount() {
    this.props.categories.subscribe(this.newCategory);
  }
  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategory);
  }
  newCategory(category) {
    this.setState({ ...this.state, category });
  }

  handleAddCategory = (e) => {
    if (e.key === "Enter") {
      const category = e.target.value;
      this.props.addCategory(category);
    }
  };
  render() {
    return (
      <section className="categories">
        <ul className="categories-list">
          {this.props.categories.categoriesArray.map((category, index) => {
            this.currentIndex = index;
            return (
              <li className="categories-list_item" key={index}>
                <Category
                  index={index}
                  categoryName={category}
                  deleteCategory={this.props.deleteCategory.bind(this)}
                  deleteCategoryFromProduct = {this.props.deleteCategoryFromProduct.bind(this)}
                />
              </li>
            );
          })}
        </ul>
        <span className="material-icons categories-span">keyboard_return</span>
        <input
          onKeyUp={this.handleAddCategory}
          className="categories-input"
          placeholder="Add Category"
        />
      </section>
    );
  }
}

export default Categories;
