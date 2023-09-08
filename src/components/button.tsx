import React from 'react'

type PropsType = {
  children: React.ReactNode
  onClick: () => void
}
const Button: React.FC<PropsType> = ({ children, onClick }) => {
  return (
    <button className="bg-red-500" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
