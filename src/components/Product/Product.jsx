import React, { Component } from 'react';

class Product extends Component {

  render() { 
    return ( 
      <section className='product'>
        <header className='product-title'>
          <h2>Titulo</h2>
        </header>
        <ul className='product-card'>
          <li className='product-card_title'><h3>Description:</h3></li>
          <li className='product-card_description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna justo, tempus at magna eget, vestibulum mollis lorem. Quisque a justo in lacus rutrum faucibus at non libero. Maecenas et lacus luctus, ornare ligula a, fermentum sem.</p></li>
          <li className='product-card_price'><p className='product-card_price__title'>Price:</p><p className='product-card_price__value'>10,00€</p></li>
        </ul>  
      </section>
     );
  }
}
 
export default Product;