import { Link } from 'react-router-dom';

const RoomIndex = (props) => {
    return <div>
        <h2>Current Rooms:</h2>
        {props.rooms.map(room => (
            <div key={room.id}>
                <Link to={`/rooms/${room.id}`} >                   
                    {/* <h3 onClick={(() => {props.getProject(project.id)})}>{project.title}</h3> */}
                    <h3>{room.room_name}</h3>
                </Link>
                <button onClick={(() => {props.deleteRoom(room.id)})}>Delete Room</button>
            </div>
            
        ))}
    </div>
}

export default RoomIndex;