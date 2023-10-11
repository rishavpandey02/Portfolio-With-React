import React from 'react'
import './portfolio.css'
import frontendImg from '../../assets/frontendProject.png'
import fullStackImg from '../../assets/fullStackProject.png'
import comingSoon from '../../assets/comingSoon.png'

export const portfolio = () => {
  return (
    <section id="portfolio">
        <h2 class="portfolioTitle">My Portfolio</h2>
        <br/>
        <span class="portfolioText1">My portfolio highlights my technical skills, attention to detail, and my commitment to pushing the boundaries of web development. Here are some projects I have worked on.</span>
        <div class= "projects">
            <div class="project">
                <a href='https://annalisedev.github.io/moviesearch/'>
                <img src= {frontendImg} alt="Frontend Project" class="projectImg"/>
                </a>
                <button class="projectBtn">
                <a href='https://github.com/rishavpandey02/moviesearch.git' class= "projectLink">
                <h2>Frontend Project: Movie Searcher</h2>
                </a>
                </button>
            </div>
            <div class="project">
                <a href='https://powerful-sierra-12005-787af3607f3d.herokuapp.com/'>
                <img src= {fullStackImg} alt="Full Stack Project" class="projectImg"/>
                </a>
                <button class="projectBtn">
                <a href='https://github.com/rishavpandey02/recipe-forum.git' class= "projectLink">
                <h2>Full Stack Project: Recipe Forum</h2>
                </a>
                </button>
            </div>
            <div class="project">
                <a href='#'>
                <img src= {comingSoon} alt="MERN project" class="projectImg"/>
                </a>
                <button class="projectBtn">
                <a href='#' class= "projectLink">
                <h2>Coming Soon... MERN Project</h2>
                </a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default portfolio
