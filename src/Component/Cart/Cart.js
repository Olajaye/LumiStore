import Button from "../Button/Button"
import { CartUseContext } from "../Context/Cart-context"
import Cartcard from "../CartCard/Cartcard"
import { useNavigate } from "react-router-dom"
import "./cart.scss"


function Cart() {
  const { cartItems } = CartUseContext()

  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate("/checkout-item")
  }
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.map((cartItem) => <Cartcard key={cartItem.id} cartItem={cartItem} />)}
      </div>
      <Button func={goToCheckout}>Go TO CHECKOUT</Button>
    </div >
  )
}

export default Cart