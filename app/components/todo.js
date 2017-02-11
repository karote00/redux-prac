import React, { Component, PropTypes } from 'react';

const Todo = ({ todo }) => {
	return (
		<li>{todo.text}</li>
	)
}

Todo.propTypes = {
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}

export default Todo;