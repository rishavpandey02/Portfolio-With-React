import React from 'react';
import './navbar.css'
import logo from '../../../public/assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav class="navbar">
        <img src={logo} alt="Logo for Portfolio" class='logo'/>
        <div class= "mainMenu">
            <Link class="mainMenuListItem">Home</Link>
            <Link class="mainMenuListItem">About</Link>
            <Link class="mainMenuListItem">Portfolio</Link>
            <Link class="mainMenuListItem">Resume</Link>
        </div>
        <button class= "mainMenuBtn">
            <img src="" alt="" class="mainMenuImg"/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
