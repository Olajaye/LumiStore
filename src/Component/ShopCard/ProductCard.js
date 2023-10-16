
import Button from "../Button/Button"
import './productcard.scss'
import { CartUseContext } from "../Context/Cart-context"

function ProductCard({ product }) {
  const { addCartItem } = CartUseContext()
  const { price, name, imageUrl } = product

  const addItemToCart = () => addCartItem(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{`${name}`}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="google-sign-in" text="Add to Cart" func={addItemToCart}></Button>
    </div>
  )
}

export default ProductCard