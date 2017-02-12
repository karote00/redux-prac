const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, {
				text: action.text,
				completed: false,
				id: state.length > 0? state[state.length - 1].id + 1: 0
			}];
		case 'COMPLETE_TODO':
			return [
				...state.slice(0, action.id),
				Object.assign({}, state[action.id], {
					completed: !state[action.id].completed
				}),
				...state.slice(action.id + 1)
			];
		case 'DELETE_TODO':
			return [
				...state.slice(0, action.id - 1),
				...state.slice(action.id)
			];
		default:
			return state;
	}
}

export default todos;