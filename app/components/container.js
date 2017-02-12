import TodoList from 'components/todo-list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	console.log(state)
	return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const App = connect(
		mapStateToProps
	)(TodoList);

export default App;