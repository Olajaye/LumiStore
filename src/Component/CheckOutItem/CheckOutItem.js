import "./checkoutitem.scss"
import { CartUseContext } from "../Context/Cart-context"

function CheckOutItem({ cartItem }) {
  const { price, name, imageUrl, quantity } = cartItem
  const { addCartItem, reduceCart, ClearCart } = CartUseContext()

  const addCartItemHandler = () => addCartItem(cartItem)
  const reduceCartItemHandeler = () => reduceCart(cartItem)
  const clearCartHandler = () => ClearCart(cartItem)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={addCartItemHandler} >
          +
        </div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={reduceCartItemHandeler}>
          -
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className="remove-button" onClick={clearCartHandler}>X</div>
    </div>
  )
}

export default CheckOutItem