import React, { Component } from 'react';

class Product extends Component {

  render() { 
    return ( 
      <section className='product'>
        <header>
          <h2>Titulo</h2>
        </header>
        <main>
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna justo, tempus at magna eget, vestibulum mollis lorem. Quisque a justo in lacus rutrum faucibus at non libero. Maecenas et lacus luctus, ornare ligula a, fermentum sem.</p>
        </main>
        
      </section>
     );
  }
}
 
export default Product;