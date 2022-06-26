export const fetchRooms = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/api/v1/rooms")
        .then(response => response.json())
        .then(data => dispatch({type: "GET_ROOMS", payload: data })
        );
    }
}

export const addRoom = (room_name) => {
    return (dispatch) => {
        return fetch('http://localhost:4000/api/v1/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ room_name: room_name,
            })
        })
        .then((res) => res.json())
        .then(formData => dispatch({type: "ADD_ROOM", payload: formData}))
    }
}

export const getRoom = (id) => {
    return (dispatch) => fetch(`http://localhost:4000/api/v1/rooms/${id}`, 
    {method: 'GET'})
        .then(response => response.json())
        .then(room => dispatch({type: "GET_ROOM", payload: room })       
    );
}

export const deleteRoom = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:4000/api/v1/rooms/${id}`, {
             method: 'DELETE' })
        .then((res) => res.json())
        .then(payload => dispatch({type: 'DELETE_ROOM', payload}))
    }
}

export const addPlan = (description, planId) => {
    return (dispatch) => {
        return fetch('http://localhost:4000/api/v1/plans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: description, room_id: planId
            })
        })
        .then((res) => res.json())
        // .then(payload => console.log('goal action: ', payload))
        .then(payload => dispatch({type: "ADD_PLAN", payload: payload}))
    }
}

export const addTodo = (description, planId) => {
    return (dispatch) => {
        console.log('addtodo', description, planId)
        return fetch('http://localhost:4000/api/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: description, plan_id: planId
            })
        })
        .then((res) => res.json())
         .then(payload => console.log('goal action: ', payload))
        .then(payload => dispatch({type: "ADD_TODO", payload: payload}))
    }
}