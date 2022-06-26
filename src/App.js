import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoomsContainer from './containers/RoomsContainer';
import RoomContainer from './containers/RoomContainer';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';

//import { useState, useEffect } from "react";


 class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
            <NavBar />
            <div className='center-card'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/rooms/:id" render={(routerProps) => <RoomContainer {...routerProps}/>} />
              <Route path="/rooms" component={RoomsContainer} />             
            </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;


//useEffect(() => {
  //  fetch("http://localhost:4000/api/v1/rooms")
   //   .then((resp) => resp.json())
   //   .then((rooms) => setrooms(rooms));
  //}, []);

  //  return (
  //      <Router>
  //        <div className="App">
  //          <NavBar />
  //          <div className='center-card'>
  //          <Routes>
  //            <Route path="/" element={Home} />
  //          </Routes>
  //          </div>
  //        </div>
  //      </Router>
  //  
  //  ) 
//}

//class App extends React.Component {