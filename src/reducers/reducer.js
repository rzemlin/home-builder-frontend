const reducer = (state = {
    rooms: [],
    selectedRoom: {},
    comments: [],
    requesting: false
}, action) => {
    switch (action.type) {
        case "GET_ROOMS":
            return {...state, 
            rooms: action.payload }

        case "GET_ROOM":
            return {...state,
                chosenRoom: action.payload}
        

        case "ADD_ROOM":
            return {...state,
                rooms: [...state.rooms, action.payload ]
            }

        case "DELETE_ROOM":
            return {...state,
            rooms: action.payload
            }

        case "ADD_PLAN":
            const newPlan = {description: action.payload.description, id: action.payload.id, to_dos: []}
            return {...state,
                chosenRoom: {
                    ...state.chosenRoom,
                    plans: [
                        ...state.chosenRoom.plans.concat(newPlan)
                    ]
                }               
            }
        
        case "ADD_TODO":
            console.log("payload: ", action.payload)
            const newTodo = {description: action.payload.description, id: action.payload.id}
            const thisPlan = state.chosenRoom.plans.find(plan => plan.id === action.payload.plan.id)
            return {...state,
                chosenRoom: {
                    ...state.chosenRoom,
                        plans: state.chosenRoom.plans.map(plan => {
                            if(plan.id !== thisPlan.id) {
                                return plan 
                            } else {
                            return {
                                ...plan,
                                todos: plan.todo.concat(newTodo)
                            }}
                        })                            
                }
            }

        default: 
            return state
    }
}

export default reducer