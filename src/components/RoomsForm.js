// import React from 'react';
import React, { Component } from 'react';

class RoomsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         room: ''
      }
    }

    handleChange = e => {
        this.setState({
            room: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addRoom(this.state.room);
        e.target.reset();
    }
    

  render() {
    console.log("in rooms form")
    return <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <label><b>Add a Room: </b>
            <input type='text' onChange={ (e) => this.handleChange(e)} />
            <input type='submit' value='Create A New Room' />
        </label>
    </form>;
  }
}

export default RoomsForm;