import React from "react";
import {useState} from 'react';
import { addRoom } from "../actions/roomActions";
import {reduxForm, field} from 'redux-form';
const NewForm = () => {
    const [formData, setFormData] = useState({
        room_name: ""
    });

const handleOnChange = (e) => {
    //send to backend to create new room
    const {name, value} = e.target; 
    setFormData((formData) => ({...formData, [name]: value}))
    console.log(e.target.value)
};

const handleOnSubmit = (e) => {
    e.preventDefault();
    addRoom();
    e.target.reset();

}

return (
    <section>
      <form className="form" autoComplete="off" onSubmit={(e) => handleOnSubmit(e)}>
        <h3>Add A New Room</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="room_name" name="room_name" value={formData.room_name} onChange={handleOnChange}/>
        <button type="submit">Add Room</button>
      </form>
    </section>
  );
};

export default reduxForm({
    form: 'new-room-form'
})(NewForm);