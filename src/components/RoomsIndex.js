import React from 'react'
import { Link } from 'react-router-dom';

const RoomsIndex = (props) => {
    console.log(props)
    return <div>
        <h3>Current Renovations:</h3>
        {props.rooms.map(room => (
            <div key={room.id}>
                <Link to={`/rooms/${room.id}`} >                   
                    <h3>{room.room_name}</h3>
                </Link>
                <button onClick={(() => {props.deleteRoom(room.id)})}>Delete Room</button>
            </div>
            
        ))}
    </div>
}

export default RoomsIndex;