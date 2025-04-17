import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
  <h1>Sport</h1>
    </Link>
        
        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/TopsRemeras">Tops/Remeras</NavLink>
                </li>
                <li>
                <NavLink to="/categoria/BuzosCamperas">Buzos/Camperas</NavLink>
                </li>
                <li>
                <NavLink to="/categoria/CalzasShorts">Calzas/Shorts</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar