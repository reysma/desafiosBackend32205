import React from 'react'
import Cartwidget from './Cart/CartWidget'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/some/valid/uri">EQUILAB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/some/valid/uri">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/some/valid/uri">Journals</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/some/valid/uri" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Acquire
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/some/valid/uri">EQUIPOS</a></li>
            <li><a className="dropdown-item" href="/some/valid/uri">COTIZACIONES</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/some/valid/uri">Something else here</a></li>
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
    <Cartwidget/>
  </div>
</nav>
  )
  
}


export default Navbar

