import React, { Component } from 'react';
import Product from '../Product/Product';

class Showroom extends Component {

  render() { 
    return ( 
      <ul className='showroom'>
        {Array.of(1,2,3,4,5,6).map((category, index) => {
          return (
            <li className='showroom-item' key={index}>
              <Product/>
            </li>
          )
        })}
      </ul>
     );
  }
}
 
export default Showroom;