import React from 'react'

const Button = ({onClick}) => {
  return (
    <button className='bg-[#FFCE22] hover:bg-[#FFD84D] w-full text-[#1F2128] p-2 rounded-[4px] font-text text-[14px]' onClick={onClick}>Done</button>
  )
}

export default Button