import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice"

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img className="rounded" src={image} alt={name} />
      <p className="text-xl font-bold text-gray-900 dark:text-white">{name}</p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">${price}</p>
      <button onClick={() => dispatch(remove(product))} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</button>
    </div>
  )
}
