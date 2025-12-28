import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Navbar from '../../components/navbar/Navbar'
import logo from '../../img/Logo.svg'
import MobileNavBar from '../../components/mobile-navbar/MobileNavBar'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  
  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
  
  return (
    <header>
        <div className='w-full py-3 flex mx-auto items-center justify-center'>

          <div className='w-full md:w-[40%] flex flex-col md:flex-row'>
            <div className='flex items-center justify-between px-2'>
              <Link to="/">
                <img src={logo} alt="Little lemon logo" className='mr-10' />
              </Link>
              <div className='md:hidden' onClick={handleNav} >
                {mobileNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
              </div>
            </div>
          </div>

          <Navbar/>
          
        </div>

        {/* Mobile menu */}
        <MobileNavBar isVisible={mobileNav} />
    </header>
  )
}

export default Header