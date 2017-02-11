import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Todo from 'components/container';
import todoStore from 'components/todo-reducer';

let store = createStore(todoStore);

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  render(
  	<Provider store={store}>
  		<Todo />
  	</Provider>,
  	document.getElementById('app')
  );
});
