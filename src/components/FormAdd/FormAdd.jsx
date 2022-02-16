import React, { Component } from 'react';

class FormAdd extends Component {

  render() { 
    return (
      <section className='form-add'>
        <h2>Insert a product</h2>
        <form>
          <label htmlFor='name'>Product name</label>
          <input id='name' placeholder='Nome'></input>
          <label htmlFor='name'>Short description</label>
          <input id='name' placeholder='Nome'></input>
          <label htmlFor='name'>Nome</label>
          <input id='name' placeholder='Nome'></input>
          <label htmlFor='name'>Nome</label>
          <input id='name' placeholder='Nome'></input>
          <button>Submit</button>
        </form>
      </section> 
     );
  }
}
 
export default FormAdd;