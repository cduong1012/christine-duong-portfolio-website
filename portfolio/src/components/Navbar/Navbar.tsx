// import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
// import heart from '../../assets/heart.svg'
import logo_image from '../../assets/logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">
        <NavLink to='/'>
          <img src={logo_image} alt='Christine Duong' className='logo-icon'/>
        </NavLink>
      </div>

      <div className="tabs">
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/projects' className='nav-link'>Projects</NavLink>
        <button className="contact-button">Contact</button>
      </div>

    </div>
  )
}
