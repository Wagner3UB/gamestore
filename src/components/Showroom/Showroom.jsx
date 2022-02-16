import React, { Component } from 'react';
import Product from '../Product/Product';

class Showroom extends Component {

  render() { 
    return ( 
      <ul className='showroom'>
        {this.props.product.map((product, index) => {
          return (
            <li className='showroom-item' key={index}>
              <Product
              name={product.name} 
              description={product.description} 
              price={product.price}
              />
            </li>
          )
        })}
      </ul>
     );
  }
}
 
export default Showroom;