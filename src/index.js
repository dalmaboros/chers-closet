import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import topsReducer from './reducers/topsReducer.js';
import bottomsReducer from './reducers/bottomsReducer.js';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  tops: topsReducer,
  bottoms: bottomsReducer 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

let state = {
  clothes: [{}],
  activePiece: {}, //this changes per clothesBrowser
  loading: false
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

