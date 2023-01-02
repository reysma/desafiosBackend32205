import React, { } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer.jsx';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';



      function App() {

        return (
          <Router>
           
            <Navbar/> 
            <h1>EQUILAB CIENTIFICA</h1>
            <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/item/detail/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            </Routes>
            <Cart/>
          </Router>
        )
      }
      
      
export default App;
