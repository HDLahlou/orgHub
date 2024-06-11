import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  // using useNavigate to create event handlers for btn clicks with appropriate navigation
  const navigate = useNavigate();
  function handleLoginButton (e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div>
      Home
      {/* btn for redirecting to login page */}
      <Button btnName = {'login'} onClick={handleLoginButton}/>
    </div>
  )
}
