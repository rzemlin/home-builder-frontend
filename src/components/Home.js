import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return <div className='card center-card'>
        <p>Inside home page</p>
        <p>This is where I link to projects</p>
        <NavLink to="/rooms">
            <input type="button" value="Start here to view current room renovations or add rooms"/>
        </NavLink>
    </div>;
}