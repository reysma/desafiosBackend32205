import React from 'react'

const Cart = (props) => {
const { title, description, price, thumbnail, code, stock } = props
  return (
    <div className="card" style= {{width: "18rem"}}>
  <img src= { thumbnail } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title }</h5>
    <p className="card-text">{ description }</p>
    <p className="card-text">{ price }</p>
    <p className="card-text">{ code}</p>
    <p className="card-text">{ stock }</p>
    <a href="" className="btn btn-primary"></a>
  </div>
</div>
  )
}

export default Cart