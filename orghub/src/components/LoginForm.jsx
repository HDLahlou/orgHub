import React from 'react'
import { Button } from './Button'

export const LoginForm = () => {
    // need to implement state for passing data to backend
    // need to implement clicking handlers for btns and navigation
    // need to generate basic template for SignupForm
  return (
    <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button btnName={"Login"} />
        <Button btnName={"Sign Up"} />
    </form>
  )
}
