import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { InputLabel } from './InputLabel'

export const SignUpForm = () => {
    const navigate = useNavigate();
    function handleSubmitButton (e) {
        e.preventDefault();
        navigate("/login");
        // need to add state and fetch to backend using useState and useEffect(fetch request)
    }
  return (
    <div>
        <form>
            <div>
                <InputLabel labelName = {"First Name"}  />
                <input required type="text" placeholder="First Name" />
            </div>
            <div>
                <InputLabel labelName = {"Last Name"}  />
                <input required type="text" placeholder="Last Name" />
            </div>
            <div>
                <InputLabel labelName = {"Email"}  />
                <input required type="email" placeholder="Email" />
            </div>
            <div>
                <InputLabel labelName = {"Username"}  />
                <input required type="text" placeholder="Username" />
            </div>
            <div>
                <InputLabel labelName = {"Password"}  />
                <input required type="password" placeholder="Password" />
            </div>
            <div>
                <InputLabel labelName = {"Confirm Password"}  />
                <input required type="password" placeholder="Confirm Password" />
            </div>
            <Button btnName={"Submit"} onClick={handleSubmitButton}/>
        </form>
    </div>
  )
}
