import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <h1>Sport</h1>
            <nav>
                <ul>
                    <li>Tops/Remeras</li>
                    <li>Short/calzas</li>
                    <li>Camperas/buzos</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar