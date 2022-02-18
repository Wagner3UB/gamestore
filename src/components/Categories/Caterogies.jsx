import React, { Component } from "react";

class Categories extends Component {
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
          {this.props.categories.map((categorie, index) => {
            return (
              <li className="categories-list_item" key={index}>
                {categorie}
                <span className="material-icons categories-list_cancel">
                  block
                </span>
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
