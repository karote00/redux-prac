import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  ReactDOM.render(<App />, document.querySelector('#app'));
});
