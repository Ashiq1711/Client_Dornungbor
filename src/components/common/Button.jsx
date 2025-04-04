import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`${className} text-sm py-2 md:py-3 xl:py-4 xl:text-2xl font-semibold cursor-pointer rounded-lg`}>{children}</button>
  )
}

export default Button