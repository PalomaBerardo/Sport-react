import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"



const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            < div className="cart-container">
                <h2 className="empty-message">OPS! NO HAY PRODUCTOS EN TU CARRITO</h2>
                <Link to="/" className="btn-pink">Ver Productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-box">
            {   
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/> )
            }
            <h3>Total: ${total}</h3>
            <h3>Cantidad total:{cantidadTotal}</h3>
            <button onClick={()=>vaciarCarrito()} className="btn-pink"> Vaciar Carrito</button>
            <Link to="/checkout" className="btn-pink"> Finalizar Compra</Link>
        </div>
    )
    }
    
    export default Cart