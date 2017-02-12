import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import todoStore from 'components/todo-reducer';
import todo from 'components/todo';

let store = createStore(todoStore);

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.todos = [];
	}

	render() {
		return (
			<div>
				<ul>
					{this.todos.map(todo =>
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