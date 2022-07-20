import React from 'react';
import { Component } from 'react';

class RoomsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         room: ""
         //room_name: ''
      }
    }
//make a controlled form
 handleChange(e){
        this.setState({
            value: e.target.value
        })
       // console.log(this.state.room)
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addRoom(this.state.room);
        e.target.reset();
    }
    

  render() {
    console.log("in rooms form")
    return <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <label><b>Add a New Room: </b>
            <input type='text' onChange= {this.handleChange} />
            <input type='submit' className='button' value='Create It' />
        </label>
    </form>;
  }
}

export default RoomsForm; 

