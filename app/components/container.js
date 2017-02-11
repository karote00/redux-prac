import TodoList from 'components/todo-list';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return { todos: state.todos };
}

const Todo = connect(
		mapStateToProps
	)(TodoList);

// export default connect(mapStateToProps)(components.TodoList);

export default Todo;