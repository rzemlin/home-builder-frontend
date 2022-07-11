import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            todos: ''}
    }
    handleChange = e => {
        this.setState({
            todos: e.target.value
        })
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault();
        const planId = this.props.plan.id;
        this.props.addTodo(this.state.todos, planId);
        e.target.reset();
    }
    
  render() {
    console.log ("in todoForm")
    console.log(this.props)
    //debugger
    return <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <input type='text' placeholder='Add new todo' onChange={ (e) => this.handleChange(e)} />
            <input type='submit' className='button' value='Add to Checklist' />
        </form>
    </div>;
  }
}

export default TodoForm;