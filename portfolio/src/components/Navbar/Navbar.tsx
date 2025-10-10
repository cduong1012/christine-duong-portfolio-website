import React from 'react'
import {NavLink} from 'react-router-dom'
import heart from '../../assets/heart.svg'
import logo_image from '../../assets/logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">
        <NavLink to='/'>
          <img src={logo_image} alt='Christine Duong' className='logo-icon'/>
        </NavLink>
        {/* <img src={heart} alt='Heart' className="heart-icon"/>
        <h2 className="title website-name">Christine Duong</h2> */}
      </div>

      <div className="tabs">
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/projects' className='nav-link'>Projects</NavLink>

        {/* <h2>Home</h2>
        <h2>About</h2>
        <h2>Projects</h2> */}
        <button className="contact-button">Contact</button>
      </div>

    </div>
  )
}
