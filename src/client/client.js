// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'
import reducers from './reducers' //brings the index.js for reducers which uses combineReducers

//baseURL will pre-pend /api to all our requests that use axiosInstance
const axiosInstance = axios.create({
    baseURL: '/api'
})

// normally it was: const store = createStore(reducers, {}, applyMiddleware(thunk)) but now we added initial state when server rendering unto the window object (LOOK IN RENDERER.JS)
const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
    //Provider is connected to store, so whenever store changes due to actions->reducers, then it tells the React Routes to re-render
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))