import React from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    // need to implement state for passing data to backend
    // need to implement clicking handlers for btns and navigation
    // need to generate basic template for SignupForm

  const navigate = useNavigate();
  function handleLoginButton (e) {
    e.preventDefault();
    navigate("/");
  }
  
  function handleSignUpButton (e) {
    e.preventDefault();
    navigate("/signup");
  }
    
  return (
    <div>
      <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Button btnName={"Login"} onClick={handleLoginButton} />
          <Button btnName={"Sign Up"} onClick={handleSignUpButton}/>
      </form>
    </div>
  )
}
