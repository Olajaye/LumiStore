import React from 'react'

function Input(props) {
  const { type, value, onChange, name } = props
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  )
}

export default Input