import React from 'react'

export const Button = ({btnName, onClick}) => {
  return (
    <button onClick={onClick}>{btnName}</button>
  )
}
