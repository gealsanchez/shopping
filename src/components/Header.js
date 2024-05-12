import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/aster.svg"
import { useSelector } from "react-redux";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Valencia Logo" />
        <span className="text-xl font-bold text-gray-900 dark:text-white">Flower Shop</span>
      </Link>      
      <nav className='navigation font-bold'>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <p className="w-28 text-2xl font-bold text-gray-900 dark:text-white">Cart: {cartList.length}</p>
    </header>
  )
}
