import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='header-list md:inline hidden'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>About</li>
          <li>Menu</li>
          <li><Link to='/booking'>Reservations</Link></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar