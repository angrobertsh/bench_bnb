import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/bench_actions';
import Root from './components/root';

window.Store = configureStore();
window.requestBenches = ACTIONS.requestBenches;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
