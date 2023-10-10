import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.jpg'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav class="navbar">
        <img src={logo} alt="Logo for Portfolio" class='logo'/>
        <div class= "mainMenu">
            <Link class="mainMenuListItem">Home</Link>
            <Link class="mainMenuListItem">About</Link>
            <Link class="mainMenuListItem">Portfolio</Link>
            <a href="" class="mainMenuListItem">Resume</a>
        </div>
        <button class= "mainMenuBtn">
            <img src={contactImg} alt="" class="mainMenuImg"/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
