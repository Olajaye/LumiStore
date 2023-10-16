import { ProductUseContext } from "../../Component/Context/Product-context"
import ProductCard from "../../Component/ShopCard/ProductCard"
import "./shop.scss"

function Shop() {
  const { productItem } = ProductUseContext()
  return (
    <div className="products-container">
      {productItem.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Shop