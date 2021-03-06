import React, { Component } from "react";

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.productName = "";
    this.productDescription = "";
    this.productPrice = "";
    this.productCategory = "";
    this.handleProductName = this.handleProductName.bind(this);
  }

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
  addProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.addProduct(
      this.productName,
      this.productDescription,
      this.productPrice, 
      this.productCategory
    );
  };
  handleCategorieSelection = (e) => {
    e.preventDefault();
    this.productCategory = e.target.value;
  };

  render() {
    return (
      <section className="form-add">
        <h2>Insert a product</h2>
        <form onSubmit={this.addProduct}>
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            placeholder="Nome"
            onChange={this.handleProductName}
          />
          <select onChange={this.handleCategorieSelection}>
            <option>Select Category</option>

            {this.props.categories.map((category, index) => {
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
          di Splatoon, Re Boo, Tartosso e Bowser Junior Nuove modalit?? di gioco
          come modalit?? battaglia palloncini e Bob-omba a tappeto, con circuiti
          tutti nuovi come la Periferia urbana, il Kartodromo e Double Dash
          Modalit?? TV con una risoluzione massima di 1080p{" "}
        </p>
      </section>
    );
  }
}

export default FormAdd;
