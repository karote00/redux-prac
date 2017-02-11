import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import todoStore from 'components/todo-reducer';

let store = createStore(todoStore);

const TodoList = ({ todos }) => {
	return (
		<div>
			<ul>
				<li>Hi I'm Todo List!</li>
			</ul>
		</div>
	)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}))
}

export default TodoList;

// export class TodoList extends Component {
// 	addTodo() {
// 		// store.dispatch({type: 'ADD_TODO', text: '123'});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.addTodo}>Add Todo</button>
// 				<ul>
// 					<li>I'm todo list!</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }