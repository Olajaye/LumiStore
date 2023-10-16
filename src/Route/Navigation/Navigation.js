import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg"
import CartIcon from "../../Component/CartIcon/CartIcon"
import { CurrentUserContext } from "../../Component/Context/User-context"
import { signOutUser } from "../../Utills/Firebase/Firebase"
import Cart from "../../Component/Cart/Cart"
import { CartUseContext } from "../../Component/Context/Cart-context"
import "./navigation.scss"


const Navigation = () => {
  const { isCartOpen } = CartUseContext()
  const { currentUser } = CurrentUserContext()

  const signOutHandler = () => {
    signOutUser()
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className='nav-link'>
            SHOP
          </Link>
          {currentUser ?
            (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : (
              <Link to="/sign-in" className='nav-link'>
                SIGN IN
              </Link>
            )}
          <CartIcon />
        </div>
        {isCartOpen && <Cart />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation