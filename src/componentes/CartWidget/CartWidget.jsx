import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/603/776/png-transparent-shopping-cart-icon-shopping-cart-blue-orange-baby-products-thumbnail.png"
    return (
        <div>
            <img className="imgCarrito" src={imgCarrito} alt="Imagen del carrito" />
        </div>
    )
}

export default CartWidget