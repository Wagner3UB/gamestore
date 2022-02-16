import React, { Component } from 'react';
import FormAdd from "./components/FormAdd/FormAdd";
import Showroom from './components/Showroom/Showroom';
import "./assets/App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      product: []
    }
  }
  addProduct = (name, description, price) => {
    const newProduct = {name, description, price};
    const newArrayProducts = [...this.state.product, newProduct];
    console.log(newArrayProducts);
    this.setState({product: newArrayProducts}) 
    console.log(this.state)
  }

  render() { 
    return ( 
      <section className='app-content'>
        <Showroom product={this.state.product}/>
        <FormAdd addProduct={this.addProduct.bind(this)}/>
      </section>
     );
  }
}
 
export default App;