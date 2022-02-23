import React, { Component } from "react";

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.productName = "";
    this.productDescription = "";
    this.productPrice = "";
    this.productCategory = "";
    
    //State
    this.state = { categoriesArray: [] };

    //Binds
    this.handleProductName = this.handleProductName.bind(this);
    this.newCategory = this.newCategory.bind(this);
  }

  //State Control
  componentDidMount() {
    this.props.categories.subscribe(this.newCategory);
  }
  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategory);
  }
  newCategory(category) {
    this.setState({ ...this.state, category });
  }

  //Handles&Modules&Functions
  handleProductName(e) {
    e.stopPropagation();
    this.productName = e.target.value;
  }
  handleProductDescription = (e) => {
    e.stopPropagation();
    this.productDescription = e.target.value;
  };
  handleProductPrice = (e) => {
    e.stopPropagation();
    this.productPrice = e.target.value;
  };
  handleProductOnSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.productCategory = document.querySelector("select").value;
    this.addProduct();
  };
  addProduct = (e) => {
    this.props.addProduct(
      this.productName,
      this.productDescription,
      this.productPrice,
      this.productCategory
    );
  };

  render() {
    return (
      <section className="form-add">
        <h2>Insert a product</h2>
        <form onSubmit={this.handleProductOnSubmit}>
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            placeholder="Nome"
            onChange={this.handleProductName}
          />
          <select>
            <option value={"uncategorized"}>Select Category</option>
            {this.props.categories.categoriesArray.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            rows={10}
            id="description"
            placeholder="Description"
            onChange={this.handleProductDescription}
          />

          <label htmlFor="price">Product price</label>
          <input
            id="price"
            placeholder="Price"
            onChange={this.handleProductPrice}
          />
          <button>Add product</button>
        </form>
        <p className="lorem">
          La versione definitiva di Mario Kart 8 sino a 8 giocatori in
          multiplayer locale Nuovi personaggi: il ragazzo e la ragazza Inkling
          di Splatoon, Re Boo, Tartosso e Bowser Junior Nuove modalità di gioco
          come modalità battaglia palloncini e Bob-omba a tappeto, con circuiti
          tutti nuovi come la Periferia urbana, il Kartodromo e Double Dash
          Modalità TV con una risoluzione massima di 1080p
        </p>
      </section>
    );
  }
}

export default FormAdd;
