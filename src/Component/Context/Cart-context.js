import { createContext, useContext, useEffect, useState } from "react";

const addItemToCart = (cartItems, productToAdd) => {
  const exsistingProduct = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
  if (exsistingProduct) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const reduceItemFromCart = (cartItems, productToReduce) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToReduce.id
  })

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToReduce.id
    })
  }

  return cartItems.map((cartItem) => cartItem.id === productToReduce.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems, productToCleare) => {
  let clearItem = cartItems.filter((cartItem) => {
    return cartItem.id !== productToCleare.id
  })
  return clearItem
}

const CartContext = createContext()

export const CartProvide = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItem] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addCartItem = (productToAdd) => {
    setCartItem(addItemToCart(cartItems, productToAdd))
  }

  const reduceCart = (productToAdd) => {
    setCartItem(reduceItemFromCart(cartItems, productToAdd))
  }

  const ClearCart = (productToAdd) => {
    setCartItem(clearCartItem(cartItems, productToAdd))
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  const value = { isCartOpen, cartCount, cartItems, cartTotal, handleOpenCart, addCartItem, reduceCart, ClearCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const CartUseContext = () => {
  return useContext(CartContext)
}