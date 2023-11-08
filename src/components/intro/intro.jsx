import React from 'react'
import './intro.css'
import info from '../../assets/info.png'
import { Link } from 'react-scroll'

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
                <Link>
                <button class="introBtn">
                  <img src={info} alt="info Pic" class="infoImg" />  
                Learn More</button>
                </Link>
            </div>
            <img src= "#" alt ="Profile Picture" class="profilePic"/>
        </section>
    )
}

export default Intro;