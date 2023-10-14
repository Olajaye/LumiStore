import React from 'react'

function Button(props) {
  const { text, func, type } = props
  return (
    <button
      type={type} onClick={func}>{text}</button>
  )
}

export default Button