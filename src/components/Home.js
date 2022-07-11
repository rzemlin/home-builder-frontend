import React from 'react';
import { NavLink } from 'react-router-dom';
//import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Home() {
  
  //return <div className='card center-card'>
    //    <p>Inside home page</p>
      //  <p>This is where I link to projects</p>
        
            

//export default function BasicButtons() {
  return (
    <>
    <div> Welcome to the Home Builder Site. This is a useful tool to help organize all your diy home projects.</div>
    <NavLink to="/rooms">
           <Button variant="contained">"Press here to add a Room or view current projects"</Button>
        </NavLink>
        </>
  )
    
}