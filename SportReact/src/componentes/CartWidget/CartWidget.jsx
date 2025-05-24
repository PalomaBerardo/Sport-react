import {useContext} from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import "./CartWidget.css"


const CartWidget = () => {
const {cantidadTotal} = useContext(CarritoContext);



  return (
    <div>
      <Link to="/cart">
        <img  className="imgCarrito"src= "../../../public/imagenes/imagenes/carrito.svg" alt="imagen del carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget