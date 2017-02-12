import TodoList from 'components/todo-list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (text) => dispatch({type: 'ADD_TODO', text: text})
	}
}

const App = connect(
		mapStateToProps,
		mapDispatchToProps
	)(TodoList);

export default App;