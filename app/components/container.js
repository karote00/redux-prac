import TodoList from 'components/todo-list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (text) => dispatch({type: 'ADD_TODO', text: text}),
		updateComplete: (id) =>dispatch({type: 'COMPLETE_TODO', id: id})
	}
}

const App = connect(
		mapStateToProps,
		mapDispatchToProps
	)(TodoList);

export default App;