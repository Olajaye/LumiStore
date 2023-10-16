import React from 'react'
import "./button.scss"




function Button(props) {
  const { text, func, type } = props
  return (
    <button
      type={type} onClick={func} className="button-container" > {text}</button >
  )
}

export default Button