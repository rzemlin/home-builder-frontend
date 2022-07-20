import React from "react";
//import {useState} from 'react';
//import { addRoom } from "../actions/roomActions";
//import {reduxForm, field} from 'redux-form';
//const NewForm = () => {
    class NewForm extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                room_name: "",
            };
        }

        handleChange = (e) => {
            console.log(this.state.room_name)
            this.setState({
                room_name: e.target.value
            })


        };

        handleSubmit = (e) => {
            alert(`The new room name is: ${this.state.room_name}`)
            console.log('getting close')
                e.preventDefault();
                this.props.addRoom(this.state.room_name);
                this.setState({room_name: ""})

        };
        render() {
            return (
                  <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <h3>Add A New Room</h3>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="room_name" name="room_name" value={this.state.room_name} onChange={this.handleChange}/>
                    <button type="submit">Add Room</button>
                  </form>
              );
            };
        }
            export default NewForm;/*({
    }
    const [formData, setFormData] = useState({
        room: "",
        room_name: "",
    });

const handleOnChange = (e) => {
    const {name, value} = e.target; 
    setFormData((formData) => ({...formData, [name]: value}))
    //debugger
    console.log(e.target.value)
};

const handleOnSubmit = (e) => {
    console.log(formData)
    //send to backend to create new room
    //e.preventDefault();
    addRoom();
    e.target.reset();

}


    form: 'new-room-form'
})(NewForm);*/