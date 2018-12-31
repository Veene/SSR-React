//server side helpers for createStore
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers' //brings the combineReducers

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    return store;
}