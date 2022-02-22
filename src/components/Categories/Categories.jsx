import React, { Component } from "react";

class Categories extends Component {
  constructor(){
    super();
    this.state = { categoriesArray: [] };
    this.newCategory = this.newCategory.bind(this);
  }

  componentDidMount(){
    this.props.categories.subscribe(this.newCategory)
  }
  componentWillUnmount(){
    this.props.categories.unsubscribe(this.newCategory)
  }
  newCategory(category){
    this.setState( {...this.state, category } )
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
          {this.props.categories.categoriesArray.map((categorie, index) => {
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
