import React from 'react'
//import Cart from '../Cart/Cart' <Cart/>
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/some/valid/uri">EQUILAB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/some/valid/uri">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">Journals</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/some/valid/uri" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Acquire
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className= {'navlink'}  to="/checkout">Checkout</NavLink>
              </li>
            <li>
              <NavLink className={'navlink'} to="/cart">Cart</NavLink>
              </li>
           
            <li>
              <NavLink className={'navlink'}  to="/item/detail/:id">ItemList</NavLink>
              </li>
          </ul>
        </li>
        <li className="nav-item">
         <a className="nav-link disabled" href="/some/valid/uri">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
  </div>
</nav>
  )
  
}


export default Navbar

