import React from 'react'
import './intro.css'
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import profilePic from '../../assets/profilePic.JPG'


const Intro = () => {
    return (
        <section id="intro">
            <div class="introInfo">
                <span class="hello">Hello,</span>
                <br/>
                <span class= "introText1">I'm
                <span class="introName"> Rishav Pandey,</span>
                <br/>
                <span class="introText1">A Website Developer</span>
                </span>
                <p class= "introText2">I am a passion and skilled web developer that has experience in creating user friendly and appealing websites. </p>
                <div className='socialMediaLinks'>
                <a className='linkedIn' href= "https://www.linkedin.com/in/rishav-pandey-7aa274270/"> 
                <CiLinkedin />
                </a> 
                <a className='email' href='mailto:rishavpandey@outlook.com.au'>
                    <SiGmail /> Click Here to Send an Email to Me!
                </a>
                <a href='https://github.com/rishavpandey02'>
                <FaGithub />
                </a>   
                </div>
            </div>
            <img src= {profilePic} alt ="Profile Picture" class="profilePic"/>
        </section>
    )
}

export default Intro;