import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomsIndex from '../components/RoomsIndex';
//import RoomsForm from '../components/RoomsForm';
import NewForm from '../components/NewForm';
import { fetchRooms, addRoom, deleteRoom } from '../actions/roomActions';

export class RoomsContainer extends Component {

    componentDidMount() {
        this.props.fetchRooms();
        // console.log(this.props.rooms);
        //debugger
    }

    render() {
        //console.log(this.props.rooms, "in rooms container")
        //console.log(this.props)
        //debugger
        return <div className='card'>
            <RoomsIndex rooms={this.props.rooms} deleteRoom={this.props.deleteRoom} />
            <NewForm addRoom={this.props.addRoom} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        addRoom: (room) => dispatch(addRoom(room)),
        deleteRoom: (id) => dispatch(deleteRoom(id)),
       // loading: () => dispatch(loading())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);