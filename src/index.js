import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import moviesState from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(
    moviesState,
    applyMiddleware(thunk),
    )

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);