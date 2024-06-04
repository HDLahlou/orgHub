import React from 'react'
// import { Button } from './Button'
import { InputLabel } from './InputLabel'

export const SignUpForm = () => {
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
            {/* <Button btnName={"Submit"}/> */}
        </form>
    </div>
  )
}
