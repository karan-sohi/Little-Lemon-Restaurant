import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavBar.css'

const MobileNavBar = ({isVisible, showLogin}) => {
  return (
    <nav className={isVisible ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-500 bg-[#495357] ease-in-out duration-300' : 'fixed left-[-100%]'}>
      <ul className='mobile-navbar'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            About
        </li>
        <li>
            Menu
        </li>
        <li>
            <Link to="/booking">Reservations</Link>
        </li>
        <li>
            Order Online
        </li>
        <li onClick={showLogin}>
            Login
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavBar