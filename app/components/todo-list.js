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
		this.input.value = '';
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" ref={(input) => this.input = input} className="todo-input" />
						<span onClick={this.addTodo} className="add">＋</span>
					</form>
				</div>
				<ul>
					{this.props.todos.map(todo =>
						<Todo
							key={todo.id}
							{...todo}
							updateComplete={this.props.updateComplete}
						 />
					)}
				</ul>
			</div>
		)
	}
}

export default TodoList;