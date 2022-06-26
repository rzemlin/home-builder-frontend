import React, { Component } from 'react';

class RoomShowPage extends Component {

  render() {
    const room = this.props.chosenRoom
  return <div className="center-card">
      <h2>{room.room_name}</h2>
  </div>;
  }
}

export default RoomShowPage;