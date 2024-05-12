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
      <nav className="flex items-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
        </svg>
        <p className="w-5 text-2xl font-bold text-gray-900 dark:text-white">{cartList.length}</p></nav>
    </header>
  )
}
