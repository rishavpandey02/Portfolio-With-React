import React from 'react'
import './portfolio.css'
import frontendImg from '../../assets/frontendProject.png'
import fullStackImg from '../../assets/fullStackProject.png'
import MERNProject from '../../assets/MERNProject.png'

export const portfolio = () => {
  return (
    <section id="portfolio">
        <h2 class="portfolioTitle">My Portfolio</h2>
        <br/>
        <span class="portfolioText1">My portfolio highlights my technical skills, attention to detail, and my commitment to pushing the boundaries of web development. Here are some projects I have worked on. (Click on image to go to the project website, and click on button to go to the project repo.)</span>
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
                <p className='box'>A website that allows the users to search up a movie or tv show and view the trailer via YouTube and basic information about it from IMDB. This project uses the YouTube API and the OMDB API.</p>                
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
                <p className='box'>Forum for users to share, view and like recipes for fun and delicious meals.</p>
            </div>
            <div class="project">
                <a href='https://mern-car-rental-k71s.onrender.com/'>
                <img src= {MERNProject} alt="MERN project" class="projectImg"/>
                </a>
                <button class="projectBtn">
                <a href='https://github.com/rishavpandey02/CarRental.git' class= "projectLink">
                <h2>MERN Project: LuxeWheels</h2>
                </a>
                </button>
                <p className='box'>MERN Stack Project that allows users to list and view car rentals. Uses MongoDB, React JS, Express JS, Node JS and firebase.</p>
            </div>
        </div>
    </section>
  )
}

export default portfolio
