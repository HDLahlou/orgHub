import React from 'react'
import { Button } from './Button'

export const LoginForm = () => {
  return (
    <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button btnName={"Login"} />
        <Button btnName={"Sign Up"} />
    </form>
  )
}
