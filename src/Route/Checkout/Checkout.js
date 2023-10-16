
import "./checkout.scss"
import { CartUseContext } from "../../Component/Context/Cart-context"
import CheckOutItem from "../../Component/CheckOutItem/CheckOutItem"


function Checkout() {
  const { cartItems, cartTotal } = CartUseContext()
  return (
    <div className='checkout-container'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Descriotion</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>


      {cartItems.map((cartItem) => {
        return (
          < CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )
      })}
      <span className='total'>Total : ${cartTotal}</span>
    </div>
  )
}

export default Checkout