import TodoList from 'components/todo-list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { todos: state.todos };
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const App = connect(
		mapStateToProps,
		mapDispatchToProps
	)(TodoList);

export default App;