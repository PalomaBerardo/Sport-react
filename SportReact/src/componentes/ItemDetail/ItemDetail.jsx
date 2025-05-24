import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({id, nombre, precio, img, stock, descripción}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
      console.log("Productos agregados:" + cantidad)

      const item = {id, nombre, precio};
      agregarAlCarrito(item, cantidad)
      toast.success("Su compra fue enviada al carrito",{autoClose:1000, theme:"colored",position:"top-center" })
    }



  return (
    <div className='contenedorItem'>
        <img src={img} alt={nombre} className="imgProducto" />
      <h2>{nombre}</h2>
      <p className='descripcion'>{descripción}</p>
      <h3>Precio: ${precio}</h3>
        {
          agregarCantidad > 0 ? (<Link to="/cart" className='btn-pink'>Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail