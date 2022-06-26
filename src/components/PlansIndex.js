import React from 'react';
import TodoForm from './TodoForm';

function PlansIndex(props) {
    console.log('plan index:', props.rooms.plans)
  return <div>
      {props.plans.map((plan) => (
        <div key={plan.id}><h3>{plan.description}</h3>
        <ul>{plan.todos.map(todo => (<li key={todo.id}>{todo.description}</li>))}</ul>
        <TodoForm plan={plan} addTodo={props.addPlan}/>
        </div>))}
      </div>
}

export default PlansIndex;