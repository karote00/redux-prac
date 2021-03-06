import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'components/container';
import todoStore from 'components/todo-reducer';

let store = createStore(todoStore);

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  render(
  	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('app')
  );
});
