import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)


  return (
    <div className="cart-item">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)} className="btn-pink">Eliminar</button>
    </div>
  )
}

export default CartItem