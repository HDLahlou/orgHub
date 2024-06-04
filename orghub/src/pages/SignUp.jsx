import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Button } from '../components/Button';
import { SignUpForm } from '../components/SignUpForm';

export const SignUp = () => {
    // const navigate = useNavigate();
    // function handleSubmitButton (e) {
    //     e.preventDefault();
    //     navigate("/login");
    //     // need to add state and fetch to backend using useState and useEffect(fetch request)
    // }
  return (
    <div>
        <h2>SignUp</h2>
        <SignUpForm />
        {/* <Button btnName={"Submit"} onClick={handleSubmitButton}/> */}
    </div>
  )
}
