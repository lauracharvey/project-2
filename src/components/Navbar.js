import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <nav className="navbar">
    <div>
      <img src="../images/Logo.png"/>
    </div>
    
    <div className="home-button">
      <Link to="/project-2">Home</Link>
    </div>
  </nav>
}

export default Navbar