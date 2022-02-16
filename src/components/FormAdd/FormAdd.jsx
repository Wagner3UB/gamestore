import React, { Component } from 'react';

class FormAdd extends Component {

  render() { 
    return (
      <section className='form-add'>
        <h2>Insert a product</h2>
        <form>
          <label htmlFor='name'>Product name</label>
          <input id='name' placeholder='Nome'></input>
          <label htmlFor='description'>Description</label>
          <textarea rows={10} id='description' placeholder='Description'/>
          <label htmlFor='price'>Product price</label>
          <input id='price' placeholder='Price'></input>

          <button>Submit</button>
        </form>
      </section> 
     );
  }
}
 
export default FormAdd;