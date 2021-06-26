import { createStore, applyMiddleware } from 'redux';
import reducers from 'redux/reducers';
import reduxPromise from 'redux-promise';

export const store = (initialState) =>
    createStore(reducers, initialState, applyMiddleware(reduxPromise));
