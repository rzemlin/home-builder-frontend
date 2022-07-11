import React, { Component } from 'react';

class PlansForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         plan: ''
      }
    }

    handleChange = (e) => {
        this.setState({
            plan: e.target.value
        })
    }
    //debugger 
    handleOnSubmit = (e) => {
        e.preventDefault();
        const roomId = this.props.chosenRoom.id;
        this.props.addPlan(this.state.plan, roomId);
        e.target.reset();
        //debugger
      }
    //debugger

  render() {
    console.log("in plan form")
 //debugger;
    return <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <label><b>---Add a New Plan for the Selected Room---</b>
            <input type='text' onChange={ (e) => this.handleChange(e)} />
            <input type='submit' className='button' value='Add New Plan' />
        </label>
    </form>;
  }
}

export default PlansForm;