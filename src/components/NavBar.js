import { NavLink } from "react-router-dom";
import React from 'react';

function NavBar() {
  return <header className='header'>
    <nav className='Nav'> 
      <p className='big-text'>Home Builder</p>
      <NavLink className='navbar-link-text' to="/">Home</NavLink>
      <NavLink className='navbar-link-text' to="/rooms">Rooms</NavLink>
    </nav>
  </header>
}

export default NavBar;