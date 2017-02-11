import React, { Component } from 'react';
import { Todo } from 'components/todo';
import { todoStore } from './todo-data';

export default class App extends Component {
	addTodo() {
		todoStore.dispatch({type: 'ADD_TODO', text: todoStore.getState().todos.length + 1});
	}

	render() {
		return (
			<div>
				<button onClick={this.addTodo}>Add Todo</button>
				<ul>
					<Todo />
				</ul>
			</div>
		);
	}
}