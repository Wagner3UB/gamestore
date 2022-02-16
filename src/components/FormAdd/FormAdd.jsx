import React, { Component } from 'react';

class FormAdd extends Component {
  constructor(props){
    super(props);
    this.productName = "";
    this.productDescription = "";
    this.productPrice = "";
  }

  #handleProductName = (e) => {
    e.stopPropagation();
    this.productName = e.target.value;
  }
  #handleProductDescription = (e) => {
    e.stopPropagation();
    this.productDescription = e.target.value;
  }
  #handleProductPrice = (e) => {
    e.stopPropagation();
    this.productPrice = e.target.value;
  }
  #addProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.addProduct(this.productName, this.productDescription, this.productPrice);
  }

  render() { 
    return (
      <section className='form-add'>
        <h2>Insert a product</h2>
        <form onSubmit={this.#addProduct.bind(this)}>
          <label htmlFor='name'>Product name</label>
          <input 
          id='name' 
          placeholder='Nome'
          onChange={this.#handleProductName.bind(this)}
          />

          <label htmlFor='description'>Description</label>
          <textarea 
          rows={10} 
          id='description' 
          placeholder='Description'
          onChange={this.#handleProductDescription.bind(this)}
          />

          <label htmlFor='price'>Product price</label>
          <input
          id='price'
          placeholder='Price'
          onChange={this.#handleProductPrice.bind(this)}
          />
          <button>Add product</button>
        </form>
      </section> 
     );
  }
}
 
export default FormAdd;