import { Routes, Route } from "react-router-dom";
import { ProductList, Cart } from "../pages"

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="/" element={<ProductList title="Home" />} />
                <Route path="/cart" element={<Cart title="Cart" />} />
            </Routes>
        </div>
    )
}
