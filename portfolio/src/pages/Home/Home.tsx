// import React from 'react'
import profile from '../../assets/profilepic.svg'
import './Home.css'
import {NavLink} from 'react-router-dom'
import Heart from '../../../src/components/heart/Heart'


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
          {/* Education */}
          <div className="education">
            <h1 className="title">Education</h1>
            <h2 className="subtitle">Bachelor of Science in Software Engineering</h2>
            <h2 className="subtitle2">University of California, Irvine (Class of 2025)</h2>
            <h2 className="subtitle">High School Graduate</h2>
            <h2 className="subtitle2">Monterey Trail High School (Class of 2021)</h2>
          </div>
          {/* Experience */}
          <div className="experience">
            <h1 className="title">Experience</h1>
            <h2 className="subtitle">Coding Instructor</h2>
            <h2 className="subtitle2">Coding Minds Academy (April 2024 - Present)</h2>
            <h2 className="subtitle">Software Engineer Intern</h2>
            <h2 className="subtitle2">Personable Inc (Jun 2023 - Sep 2023)</h2>
            <h2 className="subtitle">Design Assistant</h2>
            <h2 className="subtitle2">Champion Print & Ship (Jun 2021 - Sep 2021)</h2>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="technical">
        <h1 className="title">Technical Skills</h1>
        <div className="languages">
           <h2 className="subtitle">Programming Languages</h2>
           <Heart type="language"/>
        </div>

        <div className="languages">
           <h2 className="subtitle">Frameworks & Tools</h2>
           <Heart type="tools"/>
        </div>
      </div>




    </div>
    
    
  )
}
