import React from 'react'
import { useState } from 'react'
import {
  signInWithGooglePopup,
  SignAuthInWithEmailAndPassword,
} from "../../Utills/Firebase/Firebase"
import Button from '../../Component/Button/Button'
import Input from '../../Component/Input/Input'
import { useNavigate } from 'react-router-dom'

const formInput = {
  email: "",
  password: ""
}
function Signin() {
  const [signUpForm, setSignUpForm] = useState(formInput)
  const { email, password } = signUpForm
  const navigate = useNavigate()


  const resetFeild = () => {
    setSignUpForm(formInput)
  }

  const SignUpPage = () => {
    navigate("/sign-up")
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const SignInWithEmailAndPassword = async (e) => {
    e.preventDefault()
    try {
      await SignAuthInWithEmailAndPassword(email, password)
      resetFeild()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormFeild = (e) => {
    const { name, value } = e.target
    setSignUpForm({ ...signUpForm, [name]: value })
  }

  return (
    <>
      <form onSubmit={SignInWithEmailAndPassword}>
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
        <Button
          text="Sign In"
          type="submit"
        ></Button>


        <Button
          text="Google Sign in"
          func={signInWithGoogle}
        ></Button>

        <Button
          text="Sign UP"
          type="button"
          func={SignUpPage}
        />

      </form>





    </>


  )
}

export default Signin