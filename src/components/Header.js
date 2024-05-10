import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/aster.svg"

export const Header = () => {
  return (
    <header>
        <Link to="/" className="logo">
        <img src={logo} alt="Valencia Logo" />
        <span>Floristeria Valencia</span>
      </Link>
      <nav className='navigation'>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </nav>
      <p>Cart: 2</p>
    </header>
  )
}
