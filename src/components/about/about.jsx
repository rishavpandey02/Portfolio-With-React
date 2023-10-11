import React from 'react'
import './about.css'
import Icon1 from '../../assets/aboutIcon.png';
import Icon2 from '../../assets/aboutIcon2.png';

export const About = () => {
  return (
    <section id="about">
        <span class="aboutTitle">Who am I & What I do</span>
        <br/>
        <span class="aboutText1">Hello!
        <br/>
        <span>I'm Rishav Pandey, a passionate and innovative Full Stack Web Developer. I specialize in transforming complex problems into scalable, accessible, and intuitive digital experiences. In addition, I am a lifelong learner who believes in the power of continuous growth and adaptation. The rapidly evolving landscape of web development excites me, and I am always on the lookout for opportunities to experiment with new technologies and methodologies to push the boundaries of what’s possible on the web. </span></span>
        <br/>
        <span class="aboutSubHeading">Technical Skills</span>
        <div class="skillBars">
            <div class="skillBar">
                <img src={Icon1} alt="icon" class="skillImg" />
                <div class="text-container">
                    <h2>Backend</h2>
                    <p class="skillText">On the backend, I excel in creating robust, scalable, and efficient server-side applications. My expertise lies in working with Javascript and I’m adept at leveraging frameworks to streamline development and enhance application functionality. My experience with SQL and NoSQL databases, including MySQL, and MongoDB, ensures data integrity, security, and optimized performance. I’m also well-versed in API development and integration, creating seamless connections between frontend interfaces and backend systems.</p>
                </div>
            </div>
            <div class="skillBar">
                <img src={Icon2} alt="icon" class="skillImg" />
                <div class="text-container">
                    <h2>Frontend</h2>
                    <p class="skillText">I have a strong command of frontend development, dedicated to crafting visually appealing, responsive, and intuitive user interfaces. My proficiency in HTML, CSS, and JavaScript, complemented with a mastery of frameworks like React, Angular, Bootstrap, Tailwind CSS  and Vue.js, empowers me to create engaging user experiences. I’m skilled in modern UI/UX design principles and tools, ensuring every webpage is not only functional but also aesthetically pleasing and user-friendly. Accessibility and performance are always at the forefront of my design process, ensuring optimal usability across various devices and platforms.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About
