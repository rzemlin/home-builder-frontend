import React from 'react';
import './App.css';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {

  render() {
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
    );
  }
}

export default App;
