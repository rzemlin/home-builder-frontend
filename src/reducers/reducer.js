const reducer = (state = {
    rooms: [],
    selectedRoom: {},
    comments: [],
    requesting: false
}, action) => {
    switch (action.type) {
        case "GET_ROOMS":
            return {...state, 
            projects: action.payload }

        case "GET_ROOM":
            return {...state,
                selectedProject: action.payload}
        

        case "ADD_ROOMS":
            return {...state,
                projects: [...state.projects, action.payload ]
            }

        case "DELETE_ROOM":
            return {...state,
            projects: action.payload
            }

        case "ADD_PLAN":
            const newPlan = {description: action.payload.description, id: action.payload.id, to_dos: []}
            return {...state,
                selectedProject: {
                    ...state.selectedProject,
                    goals: [
                        ...state.selectedProject.goals.concat(newPlan)
                    ]
                }               
            }
        
        case "ADD_TODO":
            console.log("payload: ", action.payload)
            const newTodo = {description: action.payload.description, id: action.payload.id}
            const thisPlan = state.selectedRoom.plans.find(plan => plan.id === action.payload.goal.id)
            return {...state,
                selectedRoom: {
                    ...state.selectedRoom,
                        plans: state.selectedRoom.plans.map(plan => {
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