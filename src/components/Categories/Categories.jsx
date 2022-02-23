import React, { Component } from "react";
import Category from "../Category/Category";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categoriesArray: [] };
    this.currentIndex = "";
    
    //binds
    this.newCategory = this.newCategory.bind(this);
    this.deleteCategory = this.props.deleteCategory.bind(this);
    this.deleteCategoryFromProduct = this.props.deleteCategoryFromProduct.bind(this);
  }

  //State Update
  componentDidMount() {
    this.props.categories.subscribe(this.newCategory);
  }
  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategory);
  }
  newCategory(category) {
    this.setState({ ...this.state, category });
  }

  //Handles
  handleAddCategory = (e) => {
    if (e.key === "Enter") {
      const category = e.target.value;
      this.props.addCategory(category);
    }
  };

  //Render
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
                  deleteCategory={this.deleteCategory }
                  deleteCategoryFromProduct = {this.deleteCategoryFromProduct}
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
