import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import {watcher} from './saga';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(watcher);

export default store;
