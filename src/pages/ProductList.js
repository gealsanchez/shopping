

import { ProductCard } from "../components/ProductCard"
import { Data } from "../data/Data"
import { useTitle } from "../hooks/useTitle";

export const ProductList = ({title}) => {
const products= Data();
useTitle(title);

  return (
    <div className="flex justify-center flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
