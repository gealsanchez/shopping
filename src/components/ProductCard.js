import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === product.id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  }, [cartList, product.id])

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <img className="rounded-t-lg mb-2" src={product.image} alt="product" />
      <div className="px-4 pb-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          {isInCart ? <button onClick={() => dispatch(remove(product))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove</button>
            : <button onClick={() => dispatch(add(product))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>}

        </div>
      </div>
    </div>
  )
}
