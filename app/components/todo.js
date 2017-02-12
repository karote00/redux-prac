import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.handleCompleted = this.handleCompleted.bind(this);
	}

	handleCompleted(e) {
		this.props.updateComplete(this.props.id);
	}

	render() {
		return (
			<li>
				<div>
					<input id={this.props.id} type="checkbox" onChange={this.handleCompleted} className="todo-checkbox" />
					<label htmlFor={this.props.id}>{this.props.text}</label>
				</div>
			</li>
		)
	}
}

export default Todo;