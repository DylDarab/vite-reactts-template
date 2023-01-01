import React from 'react'

type PropsType = {
  children: React.ReactNode
  onClick: () => void
}
const Button = ({ children, onClick }: PropsType) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
