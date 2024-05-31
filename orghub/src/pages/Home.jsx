import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  function handleLoginButton (e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div>
      Home
      <Button btnName = {'login'} onClick={handleLoginButton}/>
    </div>
  )
}
