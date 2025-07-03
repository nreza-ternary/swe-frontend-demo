'use client'
import React, { useState, useEffect } from 'react'

export const Navbar: React.FC = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    alert('Hello World!')
  }, [isNavbarOpen])

  return (
    <div className="absolute w-full h-36 px-14 flex flex-row justify-between items-center">
      <div>
        {/* Logo */}
        <p className="text-4xl font-semibold tracking-widest">NAHID</p>
      </div>
      <div className="relative text-6xl text-black">
        {/* Button */}
        <button
          onClick={() => setNavbarOpen(!isNavbarOpen)}
          type="button"
          className="hover:cursor-pointer"
        >
          =
        </button>
        <div
          className={`${isNavbarOpen === true ? 'opacity-100' : 'opacity-0'} absolute right-0 z-[100] bg-white w-[400px] flex flex-col gap-5 text-2xl`}
        >
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
        </div>
      </div>
    </div>
  )
}
