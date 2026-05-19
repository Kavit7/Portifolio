import React from 'react'

const Button = ({className,size="default",children}) => {
    const baseClass="relative overflow-hidden rounded-full bg-blue-700 px-2 py-1 text-white text-md"

     const sizeClass={
        sm:"px-4 py-2 text-sm",
        default: "px-6 py-3 ",
        lg: "text-lg px-8 py-6"
     }
  return (
    <button className={`${baseClass}, ${sizeClass[size]}`} >
        <span className='relative flex items-center gap-2 justify-center'>{children}</span>
    </button>
  )
}

export default Button