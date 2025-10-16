// import React from 'react'
import './Footer.css'
import emailImage from '../../assets/email.svg'
import phoneImage from '../../assets/phone.svg'

export default function Footer() {
  return (
    <div className="footer">
        {/* <div className="inner-text"> */}
            <h1 className="title">Contact</h1>
        {/* </div> */}
        <div className="email">
            <img src={emailImage} alt="email icon" className="email-img"/>
            <a className="subtitle email-txt">cduong1012@yahoo.com</a>

        </div>
        {/* <div className="phone">
            <img src={phoneImage} alt="phone icon"/>
        </div> */}
    </div>
  )
}
