import React, { Component, PropTypes } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>{this.props.todo.text}</li>
		)
	}
}

export default Todo;


// const Todo = ({ todo }) => {
// 	return (
// 		<li>{todo.text}</li>
// 	)
// }

// Todo.propTypes = {
// 	text: PropTypes.string.isRequired,
// 	completed: PropTypes.bool.isRequired
// }

// export default Todo;