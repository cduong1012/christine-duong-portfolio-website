import React from 'react'
import profile from '../../assets/profilepic.svg'
import './Home.css'
import {NavLink} from 'react-router-dom'


export default function Home() {
  return (
    <div className="Home">
      {/* Introduction */}
      <div className='landing'>
        {/* Left Side */}
        <div className='intro'>
            <h1 className="title intro-title">Hello, <br></br> I'm Christine !</h1>
            <a className="intro-p">I am a software engineer based in Sacramento, CA, driven by a passion for learning and taking on new challenges. With a solid foundation in various programming languages, I’ve developed a range of projects that highlight my creativity and problem-solving skills. Feel free to explore my portfolio to view my latest projects and reach out if you’d like to connect!</a>
            <div className="buttons">
              <NavLink to="/projects">
                <button className="explore-button">Explore My Work</button>
              </NavLink>
              <button className="resume-button">Resume</button>
            </div>
        </div>
        {/* Right Side */}
        <div className='profile'>
            <img src={profile} alt="Profile Picture" className="profile-img"/>
        </div>
      </div>

      {/* Education/Experience */}
      <div className="outer-background-section">
        <div className="inner-background-section">

          <div className="education">
            <h1 className="title">Education</h1>
          </div>

          <div className="experience">
            <h1 className="title">Experience</h1>
          </div>

        </div>
        

      </div>

      {/* Skills */}
      <div className="technical">
        <div className="languages"></div>
        <div className="tools"></div>
      </div>




    </div>
    
    
  )
}
