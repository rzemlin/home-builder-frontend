import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return <div className='card center-card'>
        <h2>Welcome to the Home Builder task manager application.</h2>
        <h3>This site is intended to help the average diy home repair person stay organised when they have multiple ongoing projects</h3>
        <NavLink to="/rooms">
            <input type="button" className="button" value="Click here to get started"/>
        </NavLink>
    </div>;
}