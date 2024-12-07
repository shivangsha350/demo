import React from 'react';
import './Nav_bar.css'; // CSS ko import kar rahe hain
import { Link } from 'react-router-dom'

const Nav_bar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/aboutus" className="nav-link">About Us</Link></li>
        <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav_bar;
