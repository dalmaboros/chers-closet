import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import clothesReducer from './reducers/clothesReducer.js';
import './index.css';
import App from './App';

// combineReducer is likely unnecessary now
const rootReducer = combineReducers({
  clothes: clothesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

