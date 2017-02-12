import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import todoStore from 'components/todo-reducer';
import todo from 'components/todo';

let store = createStore(todoStore);

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: store.getState().todos || [],
		}

		this.addTodo = this.addTodo.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	addTodo() {
		store.dispatch({type: 'ADD_TODO', text: this.input.value});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" ref={(input) => this.input = input} />
						<span onClick={this.addTodo}>Add Todo</span>
					</form>
				</div>
				<ul>
					{this.state.todos.map(todo =>
						<Todo
							{...todo}
						 />
					)}
				</ul>
			</div>
		)
	}
}

export default TodoList;

// const TodoList = ({ todos }) => {
// 	return (
// 		<div>
// 			<ul>
// 				{todos.map(todo =>
// 					<Todo
// 						{...todo}
// 					 />
// 				)}
// 			</ul>
// 		</div>
// 	)
// }

// TodoList.propTypes = {
// 	todos: PropTypes.arrayOf(PropTypes.shape({
// 		text: PropTypes.string.isRequired,
// 		completed: PropTypes.bool.isRequired
// 	}))
// }

// export default TodoList;