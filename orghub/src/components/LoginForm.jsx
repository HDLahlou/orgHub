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
    // need to add state and fetch to backend using useState and useEffect(fetch request)
    // need to change navigation route to ("/home/:id" replace = true) when backend is up and running
  }
  
  function handleSignUpButton (e) {
    e.preventDefault();
    navigate("/signup");
    // need to add state and fetch to backend using useState and useEffect(fetch request)
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
