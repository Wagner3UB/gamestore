import React, { Component } from 'react';
import FormAdd from "./components/FormAdd/FormAdd";
import "./assets/App.css";
import Showroom from './components/Showroom/Showroom';

class App extends Component {

  render() { 
    return ( 
      <section className='app-content'>
        <Showroom/>
        <FormAdd/>
      </section>
     );
  }
}
 
export default App;