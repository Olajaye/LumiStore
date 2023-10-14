import { ReactComponent as ShoppingBad } from "../../Assets/shopping-bag.svg"
import "./carticon.scss"

function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingBad className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon