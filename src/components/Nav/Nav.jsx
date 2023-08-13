import React from 'react'

const Nav = () => {
  return (
    <nav className='fixed top-0 w-full h-[8vh] bg-zinc-900 flex justify-center items-center' >
    <ul className='flex flex-row justify-between w-[95%] mx-auto items-center'>
        <li>Expense Meter</li>
        <li className='text-sm cursor-pointer'>Signout</li>
    </ul>
    </nav>
  )
}

export default Nav