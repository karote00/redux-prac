import React from 'react';
import { createStore } from 'redux';
import Todo from 'components/todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.addTodo = this.addTodo.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	addTodo() {
		this.props.addTodo(this.input.value);
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
					{this.props.todos.map(todo =>
						<Todo
							key={todo.id}
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