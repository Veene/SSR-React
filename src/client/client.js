// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import Routes from './Routes'
import reducers from './reducers' //brings the index.js for reducers which uses combineReducers

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    //Provider is connected to store, so whenever store changes due to actions->reducers, then it tells the React Routes to re-render
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))