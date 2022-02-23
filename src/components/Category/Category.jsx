import React, { Component } from "react";

class Category extends Component {
  handleDeleteCategory = () => {
    const index = this.props.index;
    const categoryName = this.props.categoryName;
    this.props.deleteCategory(index);
    this.props.deleteCategoryFromProduct(categoryName);
  };

  render() {
    return (
      <>
        <p>{this.props.categoryName}</p>
        <span
          onClick={this.handleDeleteCategory}
          className="material-icons category-list_cancel"
        >
          block
        </span>
      </>
    );
  }
}

export default Category;
