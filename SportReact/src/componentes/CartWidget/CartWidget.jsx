import React from 'react'
import "./CartWidget.css"
const CartWidget = () => {
    const imgCarrito = "https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png"
  return (
    <div>
        <img  className="imgCarrito"src= {imgCarrito} alt="imagen del carrito" />
    </div>
  )
}

export default CartWidget