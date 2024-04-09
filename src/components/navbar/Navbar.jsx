// Importing required modules and assets
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg'; // Assuming the logo is imported from this path
import './navbar.css'; // Importing the CSS styles for the Navbar component

// Define the functional component Navbar
const Navbar = () => {
  // Using state to manage the toggle state of the menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className='gpt3__navbar'>
      {/* Navigation links section */}
      <div className='gpt3__navbar-links'>
        {/* Logo */}
        <div className='gpt3__navbar-links_logo'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={isHovered ? 'expanded' : ''}>GC</span>
          <span className={isHovered ? '' : 'expanded'}>Gautam Chemicals</span>
            </div>
        {/* Navigation links container */}
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>About Us</a></p>
          {/* <p><a href='#possibility'>Open AI</a></p> */}
          <p><a href='#features'>Achivements</a></p>
          <p><a href='#blog'>Products</a></p>
        </div>
      </div>
      {/* Sign-in and Sign-up section
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div> */}
      {/* Hamburger menu */}
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          // Close icon when the menu is open
          <RiCloseLine
            color='#FFF'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          // Menu icon when the menu is closed
          <RiMenu3Line
            color='#FFF'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* Dropdown menu content */}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#wgpt3'>What is GPT3?</a></p>
              <p><a href='#possibility'>Open AI</a></p>
              <p><a href='#features'>Case Studies</a></p>
              <p><a href='#blog'>Library</a></p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
