import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utills/Firebase/Firebase"
import Input from '../Input/Input'
import Button from '../Button/Button'
import "./signup.scss"


const formInput = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName: ''
}


function SignUp() {
  const [formFeild, setFormFeild] = useState(formInput)
  const { email, password, confirmPassword, displayName } = formFeild


  //reset inputFeild
  const resetFeild = () => {
    setFormFeild(formInput)
  }

  // Onchange of  Form feild
  const handleFormFeild = (e) => {
    const { name, value } = e.target
    setFormFeild({ ...formFeild, [name]: value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("password do not match")
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      console.log(user)
      resetFeild()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Dont't have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={displayName}
          onChange={handleFormFeild}
          name='displayName'
        />

        <Input
          type="email"
          value={email}
          onChange={handleFormFeild}
          name='email'
        />

        <Input
          type="password"
          value={password}
          onChange={handleFormFeild}
          name='password'
        />

        <Input
          type="password"
          value={confirmPassword}
          onChange={handleFormFeild}
          name='confirmPassword'
        />
        <Button type="submit" text="SIGN UP" />
      </form>

    </div>

  )
}

export default SignUp