import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Checkout from './components/Checkout/Checkout';
import CartWidget from './components/Cart/CartWidget';
import itemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';


      function App() {

        return (
          <Router>
            <h1>EQUILAB CIENTIFICA</h1>
            <Navbar/>
            <Routes>
            <Route path='/'element = {<ItemListContainer/>}/>
            <Route path='/item/detail/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/cart'element = {<CartWidget/>}/>
            <Route path='/checkout'element = {<Checkout/>}/>
            </Routes>
          </Router>
        )
      }
      
      
export default App;
