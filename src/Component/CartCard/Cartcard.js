
import "./cartcard.scss"

function Cartcard({ cartItem }) {
  const { price, name, imageUrl, quantity } = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} * {`$${price}`} </span>
      </div>
    </div>
  )
}

export default Cartcard