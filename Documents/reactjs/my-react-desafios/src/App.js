import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar/>
        <ItemListContainer/>
        <div className="App-header bg-primary">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EQUILAB INTERNATIONAL</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
    );
  }
}

export default App;
