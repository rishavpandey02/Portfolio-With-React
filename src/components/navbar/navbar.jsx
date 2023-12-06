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
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} class="mainMenuListItem">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} class="mainMenuListItem">About</Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} class="mainMenuListItem">Portfolio</Link>
            <a href="https://docs.google.com/document/d/1xP4xM6lZsZIR_uHjT8qmbl6LqB6lT6NjLP-Sp4B5aNo/edit?usp=sharing" class="mainMenuListItem">Resume</a>
        </div>
        <button class= "mainMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" class="mainMenuImg"/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
