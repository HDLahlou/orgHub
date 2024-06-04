import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { SignUpForm } from '../components/SignUpForm';

export const SignUp = () => {
  return (
    <div>
        <h2>SignUp</h2>
        <SignUpForm />
        <Button btnName={"Submit"}/>
    </div>
  )
}
