//import { Description } from "@mui/icons-material";
import React from "react";
import {useState} from "react";

function NewPlansFCForm(props) {
    
    const handleSubmit= (e) => {
        e.preventDefault();
        alert(`The new pland is: ${plan}`)
        //const roomId = props.chosenRoom.id
        props.addPlan();
      // ???
    }

    const [plan, setPlan] = useState();
    

  
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>Add a New Plan</label>
        <br />
        <input name='plan' type='text' onChange={e => setPlan(e.target.value)} value={plan} />
        <input className='submitButton' type='submit' value='Add Plan' onSubmit={handleSubmit}/>
      </form>
    )
  }

  export default NewPlansFCForm;
