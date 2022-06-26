import React, { Component } from 'react';

export class TodoForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            task: ''}
    }
    handleChange = e => {
        this.setState({
            todo: e.target.value
        })
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault();
        const planId = this.props.plan.id;
        this.props.addTodo(this.state.todo, planId);
        e.target.reset();
    }
    
  render() {
    return <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <input type='text' placeholder='new to-do' onChange={ (e) => this.handleChange(e)} />
            <input type='submit' value='Add' />
        </form>
    </div>;
  }
}

export default TodoForm;