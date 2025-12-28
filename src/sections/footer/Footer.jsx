import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../img/Logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between'>
      <div className='flex justify-center'>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      
      <div>
        <h6>Navigation</h6>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      
      <div>
        <h6>Contacts</h6>
        <ul>
          <li>Baker Street, 221b</li>
          <li>555-5555</li>
          <li>littlelemon@email.com</li>
        </ul>
      </div>
      
      <div className='flex flex-col'>
        <h6>Social Media</h6>
        <ul className='social-icons flex mx-auto mt-2'>
          <li><BsFacebook size={25} /></li>
          <li><BsInstagram size={25} /></li>
          <li><BsTwitter size={25} /></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer