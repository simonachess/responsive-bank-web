import React from 'react'

function Button({ styles }) {
  return (
    <button type="button" className={`rounded-[10px] py-4 px-6 bg-blue-gradient font-medium font-poppins text-lg outline-none text-primary ${styles}`}>
      Get Started
    </button>
  )
}

export default Button