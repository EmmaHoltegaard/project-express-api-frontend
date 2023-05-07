import React from 'react';
import { NavLink } from 'react-router-dom';
// A header/navbar with links to different list-pages.

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/all-cards">All Cards</NavLink></p>
      <p><NavLink to="/major-arcana">Major Arcana</NavLink></p>
      <p><NavLink to="/minor-arcana">Minor Arcana</NavLink></p>
    </nav>
  )
}