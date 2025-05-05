import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from '../component/ui/Button/Button';
import Icon from '../component/ui/svg/Icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full navbarContainer">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            {/* MyLogo */}
          </div>

          {/* Desktop Links */}
          <div className="navLinks hidden md:flex space-x-6">
            <Link to="/" className='navItem'>About</Link>
            <Link to="/" className='navItem'>Solution</Link>
            <Link to="/" className='navItem'>Industries</Link>
            <Link to="/" className='navItem'>Products</Link>
            <Link to="/" className='navItem'>Resources</Link>
            <Link to="/" className='navItem'>Pricing</Link>
            <Button color="primary" size="sm" variant="filled">Login</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none ">
              {isOpen ? <Icon name='close' className='size-5'/>: <Icon name='hamburger' className='size-5'/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='navPopup md:hidden'>
          <div className=" bg-white p-4 shadow w-full flex flex-col navPopupContent gap-2">
          <Link to="/" className='navItem'>About</Link>
          <Link to="/" className='navItem'>Solution</Link>
          <Link to="/" className='navItem'>Industries</Link>
          <Link to="/" className='navItem'>Products</Link>
          <Link to="/" className='navItem'>Resources</Link>
          <Link to="/" className='navItem'>Pricing</Link>
        </div>

        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
