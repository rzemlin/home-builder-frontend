import React from 'react';
import './App.css';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";


  const App = () => {
    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/rooms")
      .then((resp) => resp.json())
      .then((rooms) => setrooms(rooms));
  }, []);

    return (
        <Router>
          <div className="App">
            <NavBar />
            <div className='center-card'>
            <Routes>
              <Route path="/" element={Home} />
            </Routes>
            </div>
          </div>
        </Router>
    
    ) 
}

export default App;
