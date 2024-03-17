import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-title'>
            <img className='logo' src='/logo.png' width='50px' />
            <h3>Travel Stack India</h3>
        </div>
        <div className='navbar-sections'>
            <Link to='/' className='navbar-links'><h4>Home</h4></Link>
            <a href='/#destinations' className='navbar-links'><h4>Destinations</h4></a>
        </div>
        <div className='navbar-contact'>
            <Link to='/contact' className='navbar-links'><h4>Contact</h4></Link>
        </div>
    </div>
  )
}
