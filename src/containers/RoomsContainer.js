import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomsIndex from '../components/RoomsIndex';
import RoomsForm from '../components/RoomsForm';
import { fetchRooms, addRoom, deleteRoom } from '../actions/roomActions';

export class RoomsContainer extends Component {
 
    componentDidMount() {
        this.props.fetchRooms();
        //debugger
        console.log("component mounted with props")
    }

    render() {
        //const { isFetching } = this.state
        console.log(this.props.data.rooms)
        //debugger
        return <div className='card'>
            <RoomsIndex rooms={this.props.rooms} deleteroom={this.props.deleteRoom} />
            <RoomsForm addRoom={this.props.addRoom} />
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        addRoom: (room) => dispatch(addRoom(room)),
        deleteRoom: (id) => dispatch(deleteRoom(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);