import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {



  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} className='imgProducto' />
        <h3>{nombre}</h3>
        <p>Precio: {precio}</p>
        
        <Link to={`/item/${id}`}>
        <button className='btn-pink'>Ver Detalles</button>
        </Link>
    </div>
  )
}

export default Item