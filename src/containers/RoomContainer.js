import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomShowPage from '../components/RoomShowPage';
import { getRoom, addPlan, addTodo } from '../actions/roomActions';
import PlansForm from '../components/PlansForm';
import PlansIndex from '../components/PlansIndex';
import NewPlansFCForm from '../components/NewPlansFCForm';

class RoomContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getRoom(id);
    }

    render() {
        // debugger;
        //console.log(this.props.chosenRoom)
        return <div className='card'>
            <RoomShowPage chosenRoom={this.props.chosenRoom} addTodo={this.props.addTodo}/>
            <PlansIndex room={this.props.chosenRoom} plans={this.props.plans} addTodo={this.props.addTodo} />
            <PlansForm addPlan={this.props.addPlan} chosenRoom={this.props.chosenRoom}/>
            <NewPlansFCForm addPlan={this.props.addPlan} chosenRoon={this.props.chosenRoom}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        chosenRoom: state.chosenRoom,
        plans: state.chosenRoom.plans
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;

    return {
        getRoom: id => dispatch(getRoom(id)),
        addPlan: (description, roomId) => dispatch(addPlan(description, roomId)),
        addTodo: (description, planId) => dispatch(addTodo(description, planId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);