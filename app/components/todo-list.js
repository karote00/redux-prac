import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import todoStore from 'components/todo-reducer';
import todo from 'components/todo';

let store = createStore(todoStore);

const TodoList = ({ todos }) => {
	return (
		<div>
			<ul>
				{todos.map(todo =>
					<Todo
						{...todo}
					 />
				)}
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