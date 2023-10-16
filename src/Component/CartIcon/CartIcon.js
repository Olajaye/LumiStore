import { ReactComponent as ShoppingBad } from "../../Assets/shopping-bag.svg"
import { CartUseContext } from "../../Component/Context/Cart-context"
import "./carticon.scss"

function CartIcon() {
  const { handleOpenCart, cartCount } = CartUseContext()

  const OpenAndCloseCart = () => {
    handleOpenCart()
  }
  return (
    <div className="cart-icon-container" onClick={OpenAndCloseCart}>
      <ShoppingBad className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon