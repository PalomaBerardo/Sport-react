import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
  <img className='LogoSport' src={"../public/imagenes/imagenes/sport.png"} alt="Logo Sport" />
    </Link>
        
        <nav>
            <ul>
                <li>
                  <NavLink to="">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="categoria/Tops">Tops</NavLink>
                </li>
                <li>
                <NavLink to="categoria/Buzos">Buzos</NavLink>
                </li>
                <li>
                <NavLink to="categoria/Calzas">Calzas</NavLink>
                </li>
            </ul>
            
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar